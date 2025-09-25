const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// File upload configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

// MongoDB connection with better error handling
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Admin Schema
const adminSchema = new mongoose.Schema({
    password: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);

// Portfolio Schemas
const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    profileImage: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    socialLinks: {
        linkedin: String,
        github: String,
        instagram: String
    }
});

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
    category: { type: String, required: true },
    icon: { type: String }
});

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    features: [{ type: String }],
    category: { type: String },
    icon: { type: String },
    gradient: { type: String },
    projectUrl: { type: String },
    githubUrl: { type: String },
    order: { type: Number, default: 0 }
});

const experienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String },
    current: { type: Boolean, default: false },
    description: [{ type: String }],
    type: { type: String, enum: ['experience', 'education'], required: true }
});

const certificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    icon: { type: String },
    url: { type: String }
});

// Models
const Profile = mongoose.model('Profile', profileSchema);
const Skill = mongoose.model('Skill', skillSchema);
const Project = mongoose.model('Project', projectSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Certificate = mongoose.model('Certificate', certificateSchema);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

// Auth middleware with better error handling
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

// Initialize admin account
const initializeAdmin = async () => {
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await Admin.create({ password: hashedPassword });
            console.log('Default admin created with password: admin123');
        }
    } catch (error) {
        console.error('Error initializing admin:', error);
    }
};

// Error handling middleware
const handleError = (res, error, message = 'Server error') => {
    console.error(message + ':', error);
    res.status(500).json({ 
        message, 
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error' 
    });
};

// Routes

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
    try {
        const { password } = req.body;
        
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        const admin = await Admin.findOne();
        
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ token });
    } catch (error) {
        handleError(res, error, 'Login failed');
    }
});

app.post('/api/auth/change-password', authenticateToken, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'Current and new passwords are required' });
        }

        const admin = await Admin.findById(req.user.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await Admin.findByIdAndUpdate(req.user.id, { password: hashedPassword });

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        handleError(res, error, 'Password change failed');
    }
});

// Profile Routes
app.get('/api/profile', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            // Create default profile if none exists
            profile = await Profile.create({
                name: 'Muhammad Ahtisham',
                title: 'Full Stack Developer & Flutter Developer',
                description: 'Passionate 6th semester BS Software Engineering student at FAST-NUCES Islamabad, eager to apply my growing expertise in software development and web technologies to real-world challenges.',
                email: 'shamimuhammad77@gmail.com',
                phone: '+92 330 5266999',
                location: 'Satellite Town, Rawalpindi',
                socialLinks: {
                    linkedin: 'https://www.linkedin.com/in/m-ahtisham-6116ba2b2/',
                    github: 'https://github.com/Ahtisham992',
                    instagram: 'https://www.instagram.com/_m_ahtish.05/'
                }
            });
        }
        res.json(profile);
    } catch (error) {
        handleError(res, error, 'Failed to fetch profile');
    }
});

app.put('/api/profile', authenticateToken, upload.single('profileImage'), async (req, res) => {
    try {
        let updateData;
        
        // Check if data is in req.body.data (from FormData) or directly in req.body
        if (req.body.data) {
            try {
                updateData = JSON.parse(req.body.data);
            } catch (parseError) {
                return res.status(400).json({ message: 'Invalid JSON data' });
            }
        } else {
            updateData = req.body;
        }

        // Handle profile image upload
        if (req.file) {
            updateData.profileImage = '/uploads/' + req.file.filename;
        }

        // Validation
        if (!updateData.name || !updateData.title || !updateData.description || !updateData.email) {
            return res.status(400).json({ message: 'Name, title, description, and email are required' });
        }

        const profile = await Profile.findOneAndUpdate({}, updateData, { 
            new: true, 
            upsert: true,
            runValidators: true 
        });
        
        res.json(profile);
    } catch (error) {
        handleError(res, error, 'Profile update failed');
    }
});

// Skills Routes
app.get('/api/skills', async (req, res) => {
    try {
        const skills = await Skill.find().sort({ category: 1, name: 1 });
        res.json(skills);
    } catch (error) {
        handleError(res, error, 'Failed to fetch skills');
    }
});

app.post('/api/skills', authenticateToken, async (req, res) => {
    try {
        const { name, percentage, category } = req.body;
        
        if (!name || !percentage || !category) {
            return res.status(400).json({ message: 'Name, percentage, and category are required' });
        }

        if (percentage < 0 || percentage > 100) {
            return res.status(400).json({ message: 'Percentage must be between 0 and 100' });
        }

        const skill = await Skill.create(req.body);
        res.status(201).json(skill);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation failed', errors: error.errors });
        }
        handleError(res, error, 'Failed to create skill');
    }
});

app.put('/api/skills/:id', authenticateToken, async (req, res) => {
    try {
        const { percentage } = req.body;
        
        if (percentage !== undefined && (percentage < 0 || percentage > 100)) {
            return res.status(400).json({ message: 'Percentage must be between 0 and 100' });
        }

        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        
        res.json(skill);
    } catch (error) {
        handleError(res, error, 'Failed to update skill');
    }
});

app.delete('/api/skills/:id', authenticateToken, async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        handleError(res, error, 'Failed to delete skill');
    }
});

// Projects Routes
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ order: 1, _id: -1 });
        res.json(projects);
    } catch (error) {
        handleError(res, error, 'Failed to fetch projects');
    }
});

app.post('/api/projects', authenticateToken, async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        handleError(res, error, 'Failed to create project');
    }
});

app.put('/api/projects/:id', authenticateToken, async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        res.json(project);
    } catch (error) {
        handleError(res, error, 'Failed to update project');
    }
});

app.delete('/api/projects/:id', authenticateToken, async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        handleError(res, error, 'Failed to delete project');
    }
});

// Experience Routes
app.get('/api/experience', async (req, res) => {
    try {
        const experience = await Experience.find().sort({ startDate: -1 });
        res.json(experience);
    } catch (error) {
        handleError(res, error, 'Failed to fetch experience');
    }
});

app.post('/api/experience', authenticateToken, async (req, res) => {
    try {
        const { title, company, startDate, type } = req.body;
        
        if (!title || !company || !startDate || !type) {
            return res.status(400).json({ 
                message: 'Title, company, start date, and type are required' 
            });
        }

        if (!['experience', 'education'].includes(type)) {
            return res.status(400).json({ 
                message: 'Type must be either "experience" or "education"' 
            });
        }

        // Ensure description is an array
        if (req.body.description && !Array.isArray(req.body.description)) {
            req.body.description = [req.body.description];
        }

        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        console.error('Experience creation error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                message: 'Validation failed', 
                errors: Object.keys(error.errors).map(key => ({
                    field: key,
                    message: error.errors[key].message
                }))
            });
        }
        handleError(res, error, 'Failed to create experience');
    }
});

app.put('/api/experience/:id', authenticateToken, async (req, res) => {
    try {
        const { type } = req.body;
        
        if (type && !['experience', 'education'].includes(type)) {
            return res.status(400).json({ 
                message: 'Type must be either "experience" or "education"' 
            });
        }

        // Ensure description is an array
        if (req.body.description && !Array.isArray(req.body.description)) {
            req.body.description = [req.body.description];
        }

        const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        
        res.json(experience);
    } catch (error) {
        handleError(res, error, 'Failed to update experience');
    }
});

app.delete('/api/experience/:id', authenticateToken, async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        
        res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
        handleError(res, error, 'Failed to delete experience');
    }
});

// Certificates Routes
app.get('/api/certificates', async (req, res) => {
    try {
        const certificates = await Certificate.find().sort({ date: -1 });
        res.json(certificates);
    } catch (error) {
        handleError(res, error, 'Failed to fetch certificates');
    }
});

app.post('/api/certificates', authenticateToken, async (req, res) => {
    try {
        const { title, issuer } = req.body;
        
        if (!title || !issuer) {
            return res.status(400).json({ message: 'Title and issuer are required' });
        }

        const certificate = await Certificate.create(req.body);
        res.status(201).json(certificate);
    } catch (error) {
        handleError(res, error, 'Failed to create certificate');
    }
});

app.put('/api/certificates/:id', authenticateToken, async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        
        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }
        
        res.json(certificate);
    } catch (error) {
        handleError(res, error, 'Failed to update certificate');
    }
});

app.delete('/api/certificates/:id', authenticateToken, async (req, res) => {
    try {
        const certificate = await Certificate.findByIdAndDelete(req.params.id);
        
        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }
        
        res.json({ message: 'Certificate deleted successfully' });
    } catch (error) {
        handleError(res, error, 'Failed to delete certificate');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, subject, message } = req.body;
        
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Here you can add email sending logic or save to database
        console.log('Contact form submission:', {
            name: `${firstName} ${lastName}`,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
        
        res.json({ message: 'Message sent successfully' });
    } catch (error) {
        handleError(res, error, 'Failed to send message');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// Handle 404 for API routes
app.use('/api', (req, res) => {
    res.status(404).json({ message: 'API endpoint not found' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await initializeAdmin();
});

module.exports = app;