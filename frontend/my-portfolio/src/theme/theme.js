// ========================================
// FILE: src/theme/theme.js
// ========================================
// Professional Blue Theme - Clean, Modern, Trustworthy
export const theme = {
  colors: {
    // Primary brand color - Professional Blue
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',  // Main brand color
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
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
    info: '#3b82f6',
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
  
  // Gradients - Using single brand color
  gradient: 'bg-gradient-to-r from-primary-600 to-primary-500',
  gradientText: 'bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent',
  
  // Buttons
  btnPrimary: 'bg-primary-600 hover:bg-primary-700 text-white',
  btnSecondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100',
  btnOutline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
  
  // Cards
  card: 'bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
  cardGlass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700',
});

export default theme;