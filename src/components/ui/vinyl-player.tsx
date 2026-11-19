"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Disc,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Volume1,
  VolumeX,
  Radio,
  ExternalLink,
  AlertCircle,
  Tv,
  CheckCircle2,
} from "lucide-react";
import { musicData, TrackInfo } from "@/data/music-data";

// Type definitions for YouTube IFrame Player API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const VinylPlayer: React.FC = () => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const playerRef = useRef<any>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTracks =
    categoryFilter === "All"
      ? musicData
      : musicData.filter((t) => t.category === categoryFilter);

  const currentTrack = filteredTracks[selectedTrackIndex] || filteredTracks[0];

  // Initialize YouTube IFrame API
  useEffect(() => {
    let isMounted = true;

    const initYouTubePlayer = () => {
      if (!isMounted || playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player("youtube-player-mount", {
          height: "100%",
          width: "100%",
          videoId: currentTrack.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            enablejsapi: 1,
            origin: typeof window !== "undefined" ? window.location.origin : "",
          },
          events: {
            onReady: (event: any) => {
              if (!isMounted) return;
              setIsReady(true);
              setAudioError(null);
              event.target.setVolume(Math.round(volume * 100));
              const dur = event.target.getDuration();
              if (dur > 0) setDuration(dur);
            },
            onStateChange: (event: any) => {
              if (!isMounted) return;
              // 1 = PLAYING, 2 = PAUSED, 0 = ENDED, 3 = BUFFERING
              if (event.data === 1) {
                setIsPlaying(true);
                setIsBuffering(false);
                setAudioError(null);
                const dur = playerRef.current?.getDuration();
                if (dur > 0) setDuration(dur);
              } else if (event.data === 2) {
                setIsPlaying(false);
                setIsBuffering(false);
              } else if (event.data === 0) {
                setIsPlaying(false);
                setIsBuffering(false);
                handleNextTrack();
              } else if (event.data === 3) {
                setIsBuffering(true);
              }
            },
            onError: (event: any) => {
              if (!isMounted) return;
              console.warn("YouTube player error event code:", event.data);
              setIsPlaying(false);
              setIsBuffering(false);
              if (event.data === 101 || event.data === 150) {
                setAudioError(
                  "The copyright owner restricts embedding on local environments. Use the direct official YouTube, Spotify, or Apple Music buttons below to stream immediately!"
                );
              } else {
                setAudioError(
                  "Original audio stream encountered an interruption. Use the official streaming links below to listen."
                );
              }
            },
          },
        });
      } catch (e) {
        console.error("YouTube initialization error:", e);
      }
    };

    if (window.YT && window.YT.Player) {
      initYouTubePlayer();
    } else {
      // Inject YouTube IFrame API Script
      const existingTag = document.getElementById("youtube-iframe-api");
      if (!existingTag) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      window.onYouTubeIframeAPIReady = () => {
        initYouTubePlayer();
      };
    }

    return () => {
      isMounted = false;
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
      }
    };
  }, []);

  // Update track when selection changes
  useEffect(() => {
    if (!playerRef.current) return;

    setAudioError(null);
    setCurrentTime(0);

    try {
      if (isPlaying) {
        playerRef.current.loadVideoById(currentTrack.youtubeId);
      } else {
        playerRef.current.cueVideoById(currentTrack.youtubeId);
      }
    } catch (e) {
      console.warn("Error cueing track:", e);
    }
  }, [currentTrack]);

  // Sync volume & mute
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.setVolume) return;
    try {
      if (isMuted) {
        playerRef.current.mute();
      } else {
        playerRef.current.unMute();
        playerRef.current.setVolume(Math.round(volume * 100));
      }
    } catch (e) {}
  }, [volume, isMuted]);

  // Progress time tracking interval
  useEffect(() => {
    if (isPlaying) {
      timeIntervalRef.current = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          try {
            const cur = playerRef.current.getCurrentTime();
            const dur = playerRef.current.getDuration();
            if (typeof cur === "number") setCurrentTime(cur);
            if (typeof dur === "number" && dur > 0) setDuration(dur);
          } catch (e) {}
        }
      }, 250);
    } else {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
      }
    }

    return () => {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
      }
    };
  }, [isPlaying]);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleTogglePlay = () => {
    if (!playerRef.current) {
      setAudioError("Player is initializing, please click again in a moment.");
      return;
    }

    setAudioError(null);

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (e) {
      console.error("Play error:", e);
      setAudioError("Please interact with the player to enable sound.");
    }
  };

  const handleNextTrack = () => {
    const nextIdx = (selectedTrackIndex + 1) % filteredTracks.length;
    setSelectedTrackIndex(nextIdx);
  };

  const handlePrevTrack = () => {
    const prevIdx = (selectedTrackIndex - 1 + filteredTracks.length) % filteredTracks.length;
    setSelectedTrackIndex(prevIdx);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !playerRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const seekTime = ratio * duration;

    try {
      playerRef.current.seekTo(seekTime, true);
      setCurrentTime(seekTime);
    } catch (e) {}
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-3xl border border-gold-400/20 bg-midnight-900/80 backdrop-blur-2xl p-6 sm:p-8 relative overflow-hidden">
      {/* Category Filter Pills & Mode Switch */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          {["All", "Bollywood & India", "International Billboard"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoryFilter(cat);
                setSelectedTrackIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                categoryFilter === cat
                  ? "bg-gold-500/20 border border-gold-400/40 text-gold-300 shadow-[0_0_15px_rgba(223,194,122,0.15)]"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Toggle Video view */}
          <button
            onClick={() => setShowVideo(!showVideo)}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono flex items-center gap-1.5 transition-all ${
              showVideo
                ? "bg-gold-500/20 border-gold-400/40 text-gold-300 shadow-[0_0_15px_rgba(223,194,122,0.2)]"
                : "bg-white/[0.04] border-white/10 text-white/60 hover:text-white"
            }`}
            title="Toggle Original Music Video Display"
          >
            {showVideo ? <Disc className="w-3.5 h-3.5" /> : <Tv className="w-3.5 h-3.5 text-gold-400" />}
            <span>{showVideo ? "Show Vinyl Deck" : "Show Music Video"}</span>
          </button>

          <div className="flex items-center gap-2 text-gold-400/80 text-xs font-mono">
            <Radio className={`w-3.5 h-3.5 ${isPlaying ? "animate-pulse text-gold-300" : "text-white/40"}`} />
            <span>{isPlaying ? "ORIGINAL RECORDING PLAYING" : "ORIGINAL 2007 AUDIO READY"}</span>
          </div>
        </div>
      </div>

      {/* Error / Restriction Notice */}
      {audioError && (
        <div className="mt-4 p-4 rounded-xl bg-gold-500/10 border border-gold-400/30 text-ivory-100 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
            <span className="leading-relaxed">{audioError}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={currentTrack.streamingLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 text-xs font-mono flex items-center gap-1"
            >
              <span>Play on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Main Player Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Column: Visual Deck with Permanently Mounted YouTube Player */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Stable YouTube IFrame Mount (Always stays in DOM to preserve playback across tab switches) */}
          <div
            className={`w-full transition-all duration-500 rounded-2xl overflow-hidden border border-gold-400/30 bg-black shadow-[0_0_40px_rgba(0,0,0,0.9)] ${
              showVideo ? "aspect-video opacity-100 mb-2" : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div id="youtube-player-mount" className="w-full h-full" />
          </div>

          {/* Luxury Vinyl Deck (Visible when showVideo is false) */}
          {!showVideo && (
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center animate-fadeIn">
              {/* Vinyl record disc */}
              <div
                className={`w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#08090E] via-[#141620] to-[#0A0C14] shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] border-4 border-[#1E2235] flex items-center justify-center relative transition-transform duration-500 ${
                  isPlaying ? "animate-spin-slow" : ""
                }`}
                style={{ animationPlayState: isPlaying ? "running" : "paused" }}
              >
                {/* Vinyl grooves */}
                <div className="absolute inset-4 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-8 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-12 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-16 rounded-full border border-white/[0.04]" />

                {/* Vinyl Center Label */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-600 via-rose-400 to-lavender-400 p-1 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-full bg-midnight-950 flex flex-col items-center justify-center text-center p-2">
                    <span className="font-editorial text-[8px] sm:text-[9px] font-bold text-gold-300 uppercase tracking-widest truncate max-w-[80px]">
                      {currentTrack.title}
                    </span>
                    <span className="text-[7px] text-white/60 font-mono mt-0.5">ORIGINAL '07</span>
                    <div className="w-2 h-2 rounded-full bg-white/80 mt-1" />
                  </div>
                </div>
              </div>

              {/* Turntable Tone Arm */}
              <div
                className={`absolute top-0 right-2 w-24 h-28 pointer-events-none transition-transform duration-700 origin-top-right ${
                  isPlaying ? "rotate-6" : "-rotate-12"
                }`}
              >
                <div className="w-3 h-3 rounded-full bg-gold-400 shadow-md ml-auto" />
                <div className="w-1 h-20 bg-gradient-to-b from-gold-400 to-ivory-200 ml-auto mr-1 -rotate-12 origin-top" />
                <div className="w-3 h-5 bg-gold-500 rounded-sm ml-auto mr-0 shadow" />
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white/50">
            <Disc className={`w-3.5 h-3.5 text-gold-400 ${isPlaying ? "animate-spin" : ""}`} />
            <span>ORIGINAL COMMERCIAL RECORDING • {currentTrack.recordLabel}</span>
          </div>
        </div>

        {/* Right Column: Track Information, Seekable Progress & Controls */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300 text-[10px] uppercase font-mono tracking-wider">
                {currentTrack.category}
              </span>
              <span className="text-white/40 text-xs font-mono">• {currentTrack.chartPeak}</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-ivory-100 mt-2">
              {currentTrack.title}
            </h3>
            <p className="text-sm font-medium text-gold-300 mt-0.5">
              {currentTrack.artist} — <span className="text-white/60 font-normal">{currentTrack.album}</span>
            </p>
            <p className="text-xs text-lavender-300/80 font-mono mt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Master Recording • Certified Label: {currentTrack.recordLabel}</span>
            </p>
          </div>

          {/* Lyrics snippet callout card */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border-l-2 border-gold-400 text-xs sm:text-sm text-ivory-200/90 italic font-cormorant leading-relaxed">
            "{currentTrack.lyricSnippet}"
          </div>

          {/* Interactive Seekable Progress Bar */}
          <div className="space-y-1.5">
            <div
              ref={progressBarRef}
              onClick={handleProgressClick}
              className="group relative h-2 w-full rounded-full bg-white/10 cursor-pointer overflow-hidden transition-all hover:h-2.5"
              title="Click to seek"
            >
              <div
                className="h-full bg-gradient-to-r from-gold-500 via-rose-400 to-lavender-400 transition-all duration-100 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
              <span>{formatTime(currentTime)}</span>
              <span>{isBuffering ? "Buffering official audio..." : formatTime(duration)}</span>
            </div>
          </div>

          {/* Primary Controls Bar: Prev, Play/Pause, Next, Volume */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            {/* Playback Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevTrack}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all focus:outline-none"
                aria-label="Previous Track"
                title="Previous Track"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handleTogglePlay}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-rose-400 text-midnight-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(223,194,122,0.3)] hover:scale-105 active:scale-95 transition-all focus:outline-none"
                aria-label={isPlaying ? "Pause Original Song" : "Play Original Song"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Song</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Play Original Song</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNextTrack}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all focus:outline-none"
                aria-label="Next Track"
                title="Next Track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Volume Control Slider */}
            <div className="flex items-center gap-2.5 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
              <button
                onClick={toggleMute}
                className="text-white/60 hover:text-gold-300 transition-colors focus:outline-none"
                title={isMuted ? "Unmute" : "Mute"}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-300" />
                ) : volume < 0.5 ? (
                  <Volume1 className="w-4 h-4 text-gold-300" />
                ) : (
                  <Volume2 className="w-4 h-4 text-gold-400" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 sm:w-20 accent-gold-400 h-1 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Volume Slider"
              />
              <span className="text-[10px] font-mono text-white/40 w-6 text-right">
                {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </div>

          {/* Legitimate Official Streaming Platforms */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-white/40 mr-1">Stream On:</span>
            {currentTrack.streamingLinks.spotify && (
              <a
                href={currentTrack.streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 text-[#1DB954] text-[10px] font-mono flex items-center gap-1 transition-all"
              >
                <span>Spotify</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {currentTrack.streamingLinks.youtube && (
              <a
                href={currentTrack.streamingLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 text-[#FF6666] text-[10px] font-mono flex items-center gap-1 transition-all"
              >
                <span>YouTube Music</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {currentTrack.streamingLinks.appleMusic && (
              <a
                href={currentTrack.streamingLinks.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-[#FA243C]/10 hover:bg-[#FA243C]/20 border border-[#FA243C]/30 text-[#FA5468] text-[10px] font-mono flex items-center gap-1 transition-all"
              >
                <span>Apple Music</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>

          {/* Quick Track Selection Buttons */}
          <div className="pt-2 flex flex-wrap gap-2">
            {filteredTracks.map((track, idx) => (
              <button
                key={track.title}
                onClick={() => {
                  setSelectedTrackIndex(idx);
                }}
                className={`text-[11px] px-3 py-1 rounded-lg border transition-all ${
                  selectedTrackIndex === idx
                    ? "bg-gold-400/20 border-gold-400/50 text-gold-200 font-semibold shadow-[0_0_10px_rgba(223,194,122,0.15)]"
                    : "bg-white/[0.02] border-white/5 text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
