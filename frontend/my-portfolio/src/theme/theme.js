// ========================================
// FILE: src/theme/theme.js
// ========================================
// Professional Vibrant Purple Theme - Tech-Forward & Modern
export const theme = {
  colors: {
    // Primary brand color - Vibrant Tech Purple
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',  // Main vibrant purple
      600: '#9333ea',  // Rich tech purple
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    // Accent - Electric Purple/Pink for highlights
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',  // Electric purple-pink
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    // Neutral grays
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Semantic colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#a855f7',
  },
  
  // Consistent spacing
  spacing: {
    section: {
      mobile: 'py-16',
      desktop: 'py-24',
    },
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  
  // Consistent shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    purple: '0 10px 40px -10px rgba(168, 85, 247, 0.5)',
  },
  
  // Consistent animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
};

// Utility function to get theme-aware classes
export const getThemeClasses = () => ({
  // Backgrounds
  bgPrimary: 'bg-white dark:bg-gray-900',
  bgSecondary: 'bg-gray-50 dark:bg-gray-800',
  bgCard: 'bg-white dark:bg-gray-800',
  
  // Text colors
  textPrimary: 'text-gray-900 dark:text-gray-100',
  textSecondary: 'text-gray-600 dark:text-gray-400',
  textAccent: 'text-primary-600 dark:text-primary-400',
  
  // Borders
  border: 'border-gray-200 dark:border-gray-700',
  borderAccent: 'border-primary-500 dark:border-primary-400',
  
  // Gradients - Vibrant tech purple
  gradient: 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500',
  gradientText: 'bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent',
  
  // Buttons
  btnPrimary: 'bg-primary-600 hover:bg-primary-700 text-white',
  btnSecondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
  btnOutline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
  
  // Cards
  card: 'bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
  cardGlass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700',
});

export default theme;