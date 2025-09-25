# Dynamic Portfolio Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- A text editor (VS Code recommended)

## Project Structure
```
portfolio-project/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── uploads/
├── frontend/
│   ├── index.html (your dynamic portfolio)
│   └── admin.html (admin panel)
└── README.md
```

## Backend Setup

### 1. Create Backend Directory
```bash
mkdir portfolio-project
cd portfolio-project
mkdir backend
cd backend
```

### 2. Initialize Node.js Project
```bash
npm init -y
```

### 3. Install Dependencies
```bash
npm install express mongoose cors bcryptjs jsonwebtoken multer dotenv
npm install --save-dev nodemon
```

### 4. Create server.js
Copy the backend code from the "Backend Server (server.js)" artifact.

### 5. Update package.json Scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### 6. Set Environment Variables (Optional)
Create a `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 7. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Windows, start MongoDB service from Services

# On Ubuntu/Debian
sudo systemctl start mongod
```

### 8. Run the Backend
```bash
npm run dev
```

The backend will start on `http://localhost:5000`

**Default admin password: `admin123`** (you can change this later)

## Frontend Setup

### 1. Create Frontend Directory
```bash
cd ..
mkdir frontend
cd frontend
```

### 2. Create the Main Portfolio Page
Create `index.html` and copy the content from the "Updated Dynamic Portfolio Frontend" artifact.

### 3. Create the Admin Panel
Create `admin.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        // Copy the AdminPanel component code here from the artifact
        // Then add this at the bottom:
        ReactDOM.render(<AdminPanel />, document.getElementById('root'));
    </script>
</body>
</html>
```

### 4. Serve the Frontend
You can use any static server. For example, with Python:
```bash
# Python 3
python -m http.server 3000

# Or with Node.js (install globally)
npm install -g http-server
http-server -p 3000
```

Your portfolio will be available at `http://localhost:3000`
Admin panel will be at `http://localhost:3000/admin.html`

## Configuration

### 1. Update API URLs
If your backend runs on a different port, update the `API_BASE` variable in:
- `index.html` (line with `const API_BASE = 'http://localhost:5000/api';`)
- `admin.html` (in the AdminPanel component)

### 2. Change Default Password
1. Login to admin panel with password `admin123`
2. Use the settings section to change your password
3. Or update it directly in the database/backend

### 3. CORS Configuration
If you face CORS issues, make sure your backend allows your frontend domain. The current setup allows all origins (`cors()`), which is fine for development but should be restricted in production.

## Usage

### 1. Access Admin Panel
1. Go to `http://localhost:3000/admin.html`
2. Login with password `admin123`
3. Start editing your portfolio content

### 2. Edit Content
- **Profile**: Update your personal information, description, contact details
- **Skills**: Add/edit your technical skills with percentages
- **Projects**: Add your projects with descriptions, technologies used
- **Experience**: Add work experience and education
- **Certificates**: Add your certifications and achievements

### 3. View Portfolio
Visit `http://localhost:3000` to see your updated portfolio with the changes reflected in real-time.

## Production Deployment

### Backend (Node.js)
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Use MongoDB Atlas for database
- Set proper environment variables
- Use a strong JWT secret

### Frontend
- Deploy to Netlify, Vercel, or GitHub Pages
- Update API_BASE URLs to your production backend
- Consider using a proper React build process for better performance

### Security Considerations
- Change the default admin password immediately
- Use strong JWT secrets
- Implement rate limiting
- Add input validation and sanitization
- Use HTTPS in production
- Restrict CORS to your domain only

## Troubleshooting

### Common Issues:
1. **MongoDB Connection Error**: Make sure MongoDB is running
2. **CORS Error**: Check if backend allows your frontend domain
3. **404 on API calls**: Verify backend is running on correct port
4. **Admin login fails**: Check if default admin was created in console logs

### Database Reset:
If you need to reset everything:
```javascript
// Connect to MongoDB and run:
db.dropDatabase()
// Then restart your backend to recreate default admin
```

## Advanced Features to Add:

1. **Image Upload**: The backend supports image upload for profile pictures
2. **Email Integration**: Add SendGrid or similar for contact form emails
3. **Analytics**: Add Google Analytics tracking
4. **SEO**: Add meta tags, structured data
5. **Performance**: Implement caching, compression
6. **Security**: Add rate limiting, input validation

Your dynamic portfolio is now ready to use! You can customize the design, add more features, or modify the admin panel according to your needs.