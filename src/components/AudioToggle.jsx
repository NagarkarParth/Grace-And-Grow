import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function AudioToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    soundManager.initSoundPreference();
    setMuted(soundManager.getIsMuted());
  }, []);

  const toggleSound = () => {
    const nextState = !muted;
    setMuted(nextState);
    soundManager.setMuted(nextState);
    if (!nextState) {
      soundManager.playConfirm();
    }
  };

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => soundManager.playHover()}
      aria-label={muted ? 'Enable Tactical Audio' : 'Mute Tactical Audio'}
      className="group relative flex items-center gap-2 px-3 py-1.5 bg-[#151719]/90 border border-zinc-700/60 hover:border-amber-500/80 rounded transition-all duration-200 text-xs font-mono text-zinc-300 hover:text-amber-400"
      title={muted ? 'Sound FX Muted (Click to enable)' : 'Sound FX Active (Click to mute)'}
    >
      <span className="relative flex h-2 w-2">
        {!muted ? (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </>
        ) : (
          <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-600"></span>
        )}
      </span>

      {muted ? (
        <VolumeX className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
      )}

      <span className="hidden sm:inline uppercase tracking-wider text-[10px]">
        {muted ? 'COMMS: OFF' : 'COMMS: ON'}
      </span>
    </button>
  );
}
