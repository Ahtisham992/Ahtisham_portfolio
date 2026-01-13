import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';

const VideoIntro = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const themeClasses = getThemeClasses();

  // Handle spacebar for play/pause
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = pos * duration;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const scrollToPortfolio = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      const offset = videoSection.offsetHeight + 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className={`${themeClasses.bgPrimary} pt-20`}>
      {/* Video Section with proper spacing */}
      <div id="video-section" className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              {personalInfo.title}
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
            {/* Video */}
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={personalInfo.introVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40" />
              )}

              {/* Center Play Button */}
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-md p-6 rounded-full hover:bg-white/30 transition-all"
                  >
                    <Play className="w-12 h-12 text-white fill-white" />
                  </motion.button>
                </motion.div>
              )}

              {/* Click to pause when playing */}
              {isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 cursor-pointer"
                />
              )}
            </div>

            {/* Video Controls */}
            <div className="bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer group mb-3"
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all group-hover:h-2"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 hover:bg-white/20 rounded-full transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-white/20 rounded-full transition-all"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>

                  <span className="text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => videoRef.current?.requestFullscreen()}
                    className="p-2 hover:bg-white/20 rounded-full transition-all"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skip Button */}
          <div className="text-center mt-6">
            <button
              onClick={scrollToPortfolio}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 rounded-full font-medium transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Skip to Portfolio
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              A Little About Me
            </h2>
            <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full mb-8`} />
            
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-12 max-w-3xl mx-auto`}>
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {Object.entries(personalInfo.stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className={`${themeClasses.card} p-6`}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {value}
                  </div>
                  <div className={`${themeClasses.textSecondary} text-sm capitalize`}>
                    {key}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="../#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.gradient} text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center`}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.btnOutline} rounded-full font-bold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;