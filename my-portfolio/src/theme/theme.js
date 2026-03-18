export const getThemeClasses = () => ({
  bgPrimary: 'bg-slate-50 dark:bg-slate-950',
  bgSecondary: 'bg-slate-100 dark:bg-slate-900',
  bgCard: 'bg-white dark:bg-slate-900',
  textPrimary: 'text-slate-900 dark:text-slate-100',
  textSecondary: 'text-slate-600 dark:text-slate-400',
  textAccent: 'text-primary-600 dark:text-primary-400',
  border: 'border-slate-200 dark:border-slate-800',
  borderAccent: 'border-primary-500/50',
  gradient: 'bg-primary-600 text-white shadow-sm',
  gradientText: 'text-slate-900 dark:text-slate-100',
  btnPrimary: 'btn-primary',
  btnSecondary: 'btn-secondary',
  btnOutline: 'border border-slate-700 text-slate-300 hover:bg-slate-800/50 font-medium px-6 py-2.5 rounded-md transition-all',
  card: 'bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 transition-colors duration-200',
  cardGlass: 'glass rounded-lg',
});

// For backward compatibility if it's imported as default
export default { getThemeClasses };