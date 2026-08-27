import React, { useState, useEffect } from 'react';
import { Shield, Crosshair, Terminal, Zap, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

const bootLogs = [
  'INITIALIZING SYSTEM...',
  'LOADING PROFILE...',
  'LOADING LOADOUT...',
  'LOADING MISSIONS...',
  'CONNECTING TO SERVER...',
  'SYSTEM READY'
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    soundManager.playBootBeep(650);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 14) + 6;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentStep = Math.min(
      Math.floor((progress / 100) * bootLogs.length),
      bootLogs.length - 1
    );
    if (currentStep !== logIndex) {
      setLogIndex(currentStep);
      soundManager.playBootBeep(700 + currentStep * 150);
    }

    if (progress >= 100 && !isDone) {
      setIsDone(true);
      soundManager.playConfirm();
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, logIndex, isDone, onComplete]);

  const handleSkip = () => {
    soundManager.playClick();
    if (onComplete) onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080A0B] text-white select-none overflow-hidden">
      {/* Background tactical elements */}
      <div className="absolute inset-0 tactical-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 tactical-scanline pointer-events-none opacity-40" />

      {/* Atmospheric ambient glow */}
      <div className="absolute w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Tactical Center Console */}
      <div className="relative w-full max-w-md mx-4 p-8 bg-[#101214]/90 border border-zinc-700/80 hud-bracket shadow-2xl backdrop-blur-md">
        
        {/* Top Header telemetry */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-amber-500 font-bold tracking-wider">TACTICAL BOOT SEQUENCE</span>
          </div>
          <span className="tracking-widest">SEC_ID // PRT-DEV</span>
        </div>

        {/* Crosshair / Logo */}
        <div className="my-8 flex flex-col items-center justify-center text-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 border border-amber-500/40 rounded-full border-dashed animate-[spin_6s_linear_infinite]" />
            <div className="absolute -inset-2 border border-zinc-800 rounded-full" />
            <div className="absolute inset-2 bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-full flex items-center justify-center">
              <Crosshair className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
          </div>
          <h1 className="mt-4 font-display font-black text-xl sm:text-2xl tracking-[0.16em] text-white text-glow-orange uppercase">
            PARTH NAGARKAR
          </h1>
          <p className="text-[11px] font-mono text-zinc-400 tracking-widest mt-1 uppercase">
            SOFTWARE ENGINEER // FULL-STACK DEVELOPER
          </p>
        </div>

        {/* Terminal log stream */}
        <div className="h-16 bg-[#080A0B]/80 border border-zinc-800/80 rounded p-3 mb-6 font-mono text-xs flex flex-col justify-center">
          <div className="flex items-center gap-2 text-amber-400">
            <Terminal className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-bold tracking-wider uppercase">
              {bootLogs[logIndex]}
            </span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 flex justify-between">
            <span>MEM: 0x4FF82A</span>
            <span>STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Tactical Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-zinc-400 uppercase tracking-wider">SYSTEM DEPLOYMENT</span>
            <span className="text-amber-500 font-bold tracking-widest">{progress}%</span>
          </div>

          <div className="w-full h-3 bg-[#080A0B] border border-zinc-700/80 p-0.5 rounded-sm overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 transition-all duration-150 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Skip button with exact text [ SKIP ] */}
        <div className="mt-6 flex justify-between items-center pt-4 border-t border-zinc-800/60">
          <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
            [SERVER LINK: ACTIVE]
          </span>
          <button
            onClick={handleSkip}
            onMouseEnter={() => soundManager.playHover()}
            className="text-xs font-mono text-zinc-300 hover:text-amber-400 px-4 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-amber-500/80 rounded-xs transition-all uppercase tracking-wider font-bold cursor-pointer"
          >
            [ SKIP ]
          </button>
        </div>
      </div>
    </div>
  );
}
