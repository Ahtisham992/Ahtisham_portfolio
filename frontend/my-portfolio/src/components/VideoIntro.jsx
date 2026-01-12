import React, { useState, useRef } from 'react';
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
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${themeClasses.bgPrimary}`}>
      {/* Hero Video Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          poster="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80"
        >
          <source src={personalInfo.introVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          {/* Top Section - Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              Welcome, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Center - Play Button (when paused) */}
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
                className="bg-white/20 backdrop-blur-md p-8 rounded-full hover:bg-white/30 transition-all group"
              >
                <Play className="w-16 h-16 text-white fill-white" />
              </motion.button>
            </motion.div>
          )}

          {/* Bottom Section - Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {/* Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-2 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer group"
            >
              <div
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all group-hover:h-3"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 hover:bg-white/20 rounded-full transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/20 rounded-full transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>

                <span className="text-sm font-medium">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={scrollToPortfolio}
                  className="px-6 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full font-medium transition-all flex items-center gap-2"
                >
                  Skip to Portfolio
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => videoRef.current?.requestFullscreen()}
                  className="p-2 hover:bg-white/20 rounded-full transition-all"
                >
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer"
          onClick={scrollToPortfolio}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* About Section Below Video */}
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              A Little About Me
            </h2>
            <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full mb-8`} />
            
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-8`}>
              {personalInfo.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {Object.entries(personalInfo.stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className={`${themeClasses.card} p-6`}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">
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
                href="#contact"
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