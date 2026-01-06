import React, { useState } from 'react';
import { Copy, Check, Terminal, Folder, FileCode } from 'lucide-react';

const SetupGuide = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const commands = [
    {
      title: "1. Create React App with Vite",
      command: "npm create vite@latest my-portfolio -- --template react",
      description: "Initialize a new React project with Vite (faster than CRA)"
    },
    {
      title: "2. Navigate to Project",
      command: "cd my-portfolio",
      description: "Enter the project directory"
    },
    {
      title: "3. Install Dependencies",
      command: "npm install",
      description: "Install base React dependencies"
    },
    {
      title: "4. Install Additional Packages",
      command: "npm install framer-motion react-intersection-observer lucide-react emailjs-com react-type-animation",
      description: "Install animation, icons, email service, and typing effect libraries"
    },
    {
      title: "5. Install Tailwind CSS",
      command: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
      description: "Set up Tailwind CSS for styling"
    },
    {
      title: "6. Start Development Server",
      command: "npm run dev",
      description: "Start the development server (usually runs on http://localhost:5173)"
    }
  ];

  const fileStructure = {
    name: "my-portfolio/",
    children: [
      { name: "public/", children: [{ name: "favicon.ico" }] },
      {
        name: "src/",
        children: [
          {
            name: "components/",
            children: [
              { name: "Navbar.jsx" },
              { name: "Hero.jsx" },
              { name: "About.jsx" },
              { name: "Skills.jsx" },
              { name: "Projects.jsx" },
              { name: "Experience.jsx" },
              { name: "Contact.jsx" },
              { name: "Footer.jsx" },
              { name: "ParticleBackground.jsx" },
              { name: "ScrollProgress.jsx" }
            ]
          },
          {
            name: "theme/",
            children: [
              { name: "ThemeContext.jsx" },
              { name: "theme.js" }
            ]
          },
          {
            name: "data/",
            children: [
              { name: "portfolio.js" }
            ]
          },
          {
            name: "hooks/",
            children: [
              { name: "useScrollAnimation.js" },
              { name: "useInView.js" }
            ]
          },
          { name: "App.jsx" },
          { name: "main.jsx" },
          { name: "index.css" }
        ]
      },
      { name: "tailwind.config.js" },
      { name: "vite.config.js" },
      { name: "package.json" },
      { name: ".gitignore" }
    ]
  };

  const renderTree = (node, level = 0) => {
    const isFolder = node.children && node.children.length > 0;
    const icon = isFolder ? <Folder className="w-4 h-4 text-yellow-500" /> : <FileCode className="w-4 h-4 text-blue-500" />;
    
    return (
      <div key={node.name}>
        <div className="flex items-center gap-2 py-1" style={{ paddingLeft: `${level * 20}px` }}>
          {icon}
          <span className={`text-sm ${isFolder ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
            {node.name}
          </span>
        </div>
        {node.children && node.children.map(child => renderTree(child, level + 1))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            React Portfolio Setup Guide
          </h1>
          <p className="text-gray-600 text-lg">
            Complete instructions to convert your portfolio to modern React
          </p>
        </div>

        {/* Installation Commands */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Installation Steps</h2>
          </div>
          
          <div className="space-y-4">
            {commands.map((cmd, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-purple-300 transition-colors">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800 text-sm">{cmd.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{cmd.description}</p>
                </div>
                <div className="bg-gray-900 p-4 flex items-center justify-between">
                  <code className="text-green-400 text-sm flex-1 font-mono">{cmd.command}</code>
                  <button
                    onClick={() => copyToClipboard(cmd.command, index)}
                    className="ml-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* File Structure */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Folder className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Project File Structure</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm border border-gray-200">
            {renderTree(fileStructure)}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">📝 Next Steps</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Run all the installation commands above in your terminal</li>
            <li>Wait for the complete file structure with code (next artifacts)</li>
            <li>Copy each file's code into the corresponding file in your project</li>
            <li>Update the portfolio data in <code className="bg-white/20 px-2 py-1 rounded">src/data/portfolio.js</code></li>
            <li>Configure EmailJS for contact form (instructions included)</li>
            <li>Run <code className="bg-white/20 px-2 py-1 rounded">npm run dev</code> to see your portfolio</li>
            <li>Build for production with <code className="bg-white/20 px-2 py-1 rounded">npm run build</code></li>
          </ol>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">✨ New Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Smooth animations with Framer Motion</li>
              <li>• Dark/Light theme toggle</li>
              <li>• Particle background effects</li>
              <li>• Typing animation effect</li>
              <li>• Scroll-triggered animations</li>
              <li>• Professional email integration</li>
              <li>• Mobile-first responsive design</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎨 Design Improvements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Modern glassmorphism effects</li>
              <li>• Custom font system (Inter)</li>
              <li>• Consistent color theming</li>
              <li>• Improved typography hierarchy</li>
              <li>• Smooth gradient backgrounds</li>
              <li>• Professional card designs</li>
              <li>• Enhanced hover interactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupGuide;