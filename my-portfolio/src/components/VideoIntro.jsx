// ========================================
// FILE: src/components/VideoIntro.jsx
// TASK 3.2: Guard against broken video — if /intro-video.mp4 fails
//           to load, render PhotoIntro instead. No broken player shown.
// ========================================
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { getThemeClasses } from '../theme/theme';
import PhotoIntro from './Photointro';

const VideoIntro = () => {
  const [isPlaying,   setIsPlaying]   = useState(false);
  const [isMuted,     setIsMuted]     = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  // TASK 3.2 – track whether the video failed to load
  const [videoFailed, setVideoFailed] = useState(false);

  const videoRef     = useRef(null);
  const themeClasses = getThemeClasses();

  // Spacebar play/pause
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        e.code === 'Space' &&
        e.target.tagName !== 'INPUT' &&
        e.target.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  // TASK 3.2 – if the video file simply doesn't exist at all, trigger fallback
  useEffect(() => {
    if (!personalInfo.introVideoUrl) {
      setVideoFailed(true);
    }
  }, []);

  // ── FALLBACK: render PhotoIntro if video can't be loaded ─────────────────
  if (videoFailed) {
    return <PhotoIntro />;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate   = () => { if (videoRef.current) setCurrentTime(videoRef.current.currentTime); };
  const handleLoadedMeta   = () => { if (videoRef.current) setDuration(videoRef.current.duration); };
  const handleVideoError   = () => { setVideoFailed(true); }; // TASK 3.2 – network/file error

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos  = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToPortfolio = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      window.scrollTo({ top: videoSection.offsetHeight + 100, behavior: 'smooth' });
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`${themeClasses.bgPrimary} pt-20`}>
      <div id="video-section" className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient">
              Welcome, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">{personalInfo.title}</p>
          </div>

          {/* Video Player */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMeta}
                onEnded={() => setIsPlaying(false)}
                onError={handleVideoError}   /* TASK 3.2 – triggers fallback */
              >
                <source src={personalInfo.introVideoUrl} type="video/mp4" />
                {/* If <source> itself errors, the video element fires onError above */}
              </video>

              {!isPlaying && (
                <>
                  <div className="absolute inset-0 bg-black/40" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      onClick={togglePlay}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-md p-6 rounded-xl hover:bg-white/30 transition-all"
                    >
                      <Play className="w-12 h-12 text-white fill-white" />
                    </motion.button>
                  </motion.div>
                </>
              )}

              {isPlaying && (
                <div onClick={togglePlay} className="absolute inset-0 cursor-pointer" />
              )}
            </div>

            {/* Controls */}
            <div className="bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 left-0 right-0 p-4">
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer group mb-3"
              >
                <div
                  className="h-full bg-primary-500 rounded-full transition-all group-hover:h-2"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} className="p-2 hover:bg-white/20 rounded-md transition-all">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded-md transition-all">
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                <button
                  onClick={() => videoRef.current?.requestFullscreen()}
                  className="p-2 hover:bg-white/20 rounded-md transition-all"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Skip */}
          <div className="text-center mt-6">
            <button
              onClick={scrollToPortfolio}
              className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-700 rounded-md font-medium transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              A Little About Me
            </h2>
            <div className={`w-24 h-1 ${themeClasses.gradient} mx-auto rounded-full mb-8`} />
            <p className={`${themeClasses.textSecondary} text-lg leading-relaxed mb-12 max-w-3xl mx-auto`}>
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {Object.entries(personalInfo.stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className={`${themeClasses.card} p-6`}
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {value}
                  </div>
                  <div className={`${themeClasses.textSecondary} text-sm capitalize`}>{key}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.gradient} text-white rounded-md font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center`}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${themeClasses.btnOutline} rounded-md font-bold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
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