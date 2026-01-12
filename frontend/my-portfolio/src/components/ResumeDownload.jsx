import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Check, Eye, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [progress, setProgress] = useState(0);
  const themeClasses = getThemeClasses();

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloaded(true);
          
          // Trigger actual download
          const link = document.createElement('a');
          link.href = personalInfo.resumeUrl;
          link.download = 'M_Ahtisham_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Reset after 3 seconds
          setTimeout(() => {
            setDownloaded(false);
            setProgress(0);
          }, 3000);
          
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Download Button */}
        <motion.button
          onClick={handleDownload}
          disabled={isDownloading || downloaded}
          whileHover={{ scale: isDownloading || downloaded ? 1 : 1.05 }}
          whileTap={{ scale: isDownloading || downloaded ? 1 : 0.95 }}
          className={`relative px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 overflow-hidden ${
            downloaded
              ? 'bg-green-500 text-white'
              : `${themeClasses.gradient} text-white`
          }`}
        >
          {/* Progress Bar */}
          {isDownloading && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute left-0 top-0 h-full bg-white/20"
            />
          )}

          {/* Icon and Text */}
          <AnimatePresence mode="wait">
            {downloaded ? (
              <motion.div
                key="downloaded"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>Downloaded!</span>
              </motion.div>
            ) : isDownloading ? (
              <motion.div
                key="downloading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                <span>Downloading... {progress}%</span>
              </motion.div>
            ) : (
              <motion.div
                key="download"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Preview Button */}
        <motion.button
          onClick={() => setShowPreview(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 ${themeClasses.btnOutline} rounded-full font-bold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
        >
          <Eye className="w-5 h-5" />
          Preview Resume
        </motion.button>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreview(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`${themeClasses.bgCard} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary-500" />
                  <h3 className={`text-xl font-bold ${themeClasses.textPrimary}`}>
                    Resume Preview
                  </h3>
                </div>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto p-6">
                <iframe
                  src={personalInfo.resumeUrl}
                  className="w-full h-[600px] rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  title="Resume Preview"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
                <p className={`text-sm ${themeClasses.textSecondary}`}>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setShowPreview(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 ${themeClasses.btnSecondary} rounded-lg font-medium transition-all`}
                  >
                    Close
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setShowPreview(false);
                      handleDownload();
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 ${themeClasses.gradient} text-white rounded-lg font-medium transition-all flex items-center gap-2`}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeDownload;