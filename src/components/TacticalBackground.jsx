import React, { useEffect, useRef } from 'react';

export default function TacticalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for tactical radar mesh
    const particleCount = Math.min(Math.floor((width * height) / 32000), 40);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.8 ? '#F59E0B' : '#52525B',
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle tactical grid lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle tactical vectors
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.strokeStyle = '#F59E0B';
            ctx.globalAlpha = (1 - dist / 130) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Subtle top-right HUD radar sweep
      const radarCenterX = width - 90;
      const radarCenterY = 90;
      if (width > 768) {
        ctx.globalAlpha = 0.08;
        ctx.strokeStyle = '#F59E0B';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(radarCenterX, radarCenterY, 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(radarCenterX, radarCenterY, 25, 0, Math.PI * 2);
        ctx.stroke();

        radarAngle += 0.015;
        ctx.beginPath();
        ctx.moveTo(radarCenterX, radarCenterY);
        ctx.lineTo(
          radarCenterX + Math.cos(radarAngle) * 50,
          radarCenterY + Math.sin(radarAngle) * 50
        );
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background dark gradients */}
      <div className="absolute inset-0 bg-[#080A0B]" />
      
      {/* Ambient tactical lighting blooms */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[130px]" />

      {/* Dynamic Tactical Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-60" />

      {/* Scanline CRT overlay */}
      <div className="absolute inset-0 tactical-scanline pointer-events-none opacity-40" />

      {/* Subtle Tactical HUD Coordinates Overlay */}
      <div className="hidden lg:flex justify-between absolute bottom-4 left-6 right-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none">
        <span>LOC: 28.6139° N, 77.2090° E // SECTOR_INDIA</span>
        <span>SYS_STATUS: OPTIMAL // ENCRYPTION: ACTIVE</span>
        <span>HUD_VERSION: 3.7.0_TACTICAL</span>
      </div>
    </div>
  );
}
