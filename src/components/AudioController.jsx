"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const FALLBACK_AUDIO = "/audio/upside-down-fallback.mp3";

export default function AudioController() {
  const audioUrl = process.env.NEXT_PUBLIC_AUDIO_URL && process.env.NEXT_PUBLIC_AUDIO_URL.trim() !== ""
    ? process.env.NEXT_PUBLIC_AUDIO_URL
    : FALLBACK_AUDIO;
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.25);
  const [showVol, setShowVol] = useState(false);

  useEffect(() => {
    const choice = sessionStorage.getItem("auktave-audio-choice");
    if (!choice) {
      setPlaying(false);
      setMuted(true);
      return;
    }

    const savedPlaying = sessionStorage.getItem("auktave-audio-playing");
    const savedMuted = sessionStorage.getItem("auktave-audio-muted");
    const savedVol = parseFloat(sessionStorage.getItem("auktave-audio-volume") || "0.25");
    if (savedPlaying !== null) setPlaying(savedPlaying === "1");
    if (savedMuted !== null) setMuted(savedMuted === "1");
    setVolume(isNaN(savedVol) ? 0.25 : savedVol);
  }, []);

  useEffect(() => {
    const handleChoice = (event) => {
      const choice = event?.detail || sessionStorage.getItem("auktave-audio-choice");
      if (choice === "on") {
        setMuted(false);
        setPlaying(true);
      } else {
        setPlaying(false);
        setMuted(true);
      }
    };

    window.addEventListener("auktave-audio-choice", handleChoice);
    return () => window.removeEventListener("auktave-audio-choice", handleChoice);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = volume;
    ref.current.muted = muted;
    if (playing) {
      ref.current.play().catch(() => setPlaying(false));
    } else {
      ref.current.pause();
    }
    const choice = sessionStorage.getItem("auktave-audio-choice");
    if (!choice) return;
    sessionStorage.setItem("auktave-audio-playing", playing ? "1" : "0");
    sessionStorage.setItem("auktave-audio-muted", muted ? "1" : "0");
    sessionStorage.setItem("auktave-audio-volume", String(volume));
  }, [playing, muted, volume]);

  return (
    <>
      <audio ref={ref} src={audioUrl} loop preload="auto" data-testid="bg-audio" />
      <div
        onMouseEnter={() => setShowVol(true)}
        onMouseLeave={() => setShowVol(false)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-ink/90 backdrop-blur-md border border-ember/30 px-3 py-2"
        data-testid="audio-controller"
      >
        <button
          onClick={() => { setPlaying((p) => !p); if (!playing) setMuted(false); }}
          aria-label={playing ? "Pause music" : "Play music"}
          className="w-8 h-8 flex items-center justify-center hover:text-signal transition-colors"
          data-testid="audio-play-toggle"
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div
          className="flex items-center gap-2"
        >
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="w-8 h-8 flex items-center justify-center hover:text-signal transition-colors"
            data-testid="audio-mute-toggle"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${showVol ? "w-20" : "w-0"}`}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 accent-signal"
              aria-label="Volume"
              data-testid="audio-volume-slider"
            />
          </div>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/50 hidden sm:block">
          {playing ? "TUNED" : "STATIC"}
        </span>
      </div>
    </>
  );
}
