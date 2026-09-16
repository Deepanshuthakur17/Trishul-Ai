'use client';

import { useEffect, useRef } from 'react';

export default function FloatingLinesBackground({
  linesGradient = ['#F0D58A', '#D6AD55', '#C99A3D'],
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const lineCount = 12;
    let time = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * mouseDamping;
      mouse.y += (mouse.targetY - mouse.y) * mouseDamping;

      ctx.clearRect(0, 0, width, height);
      time += 0.008 * animationSpeed;

      // Parallax shift calculation
      const parallaxX = parallax ? (mouse.x - width / 2) * parallaxStrength : 0;
      const parallaxY = parallax ? (mouse.y - height / 2) * parallaxStrength : 0;

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();

        const baseRatio = i / lineCount;
        const baseY = height * 0.2 + baseRatio * height * 0.6 + parallaxY * (i * 0.1);
        const amplitude = 35 + i * 4;
        const frequency = 0.003 + i * 0.0005;

        // Gradient line stroke
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, linesGradient[0]);
        grad.addColorStop(0.5, linesGradient[1] || linesGradient[0]);
        grad.addColorStop(1, linesGradient[2] || linesGradient[0]);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 + (i % 3) * 0.5;
        ctx.globalAlpha = 0.25 + (i % 4) * 0.08;

        ctx.moveTo(0, baseY);

        const steps = 60;
        for (let j = 0; j <= steps; j++) {
          const x = (width / steps) * j + parallaxX * (i * 0.05);
          let y = baseY + Math.sin(x * frequency + time + i) * amplitude;

          // Interactive Bend Effect
          if (interactive) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.hypot(dx, dy);
            const radius = bendRadius * 30;
            if (dist < radius) {
              const factor = (1 - dist / radius) * bendStrength * 40;
              y += (dy / dist) * factor;
            }
          }

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [linesGradient, animationSpeed, interactive, bendRadius, bendStrength, mouseDamping, parallax, parallaxStrength]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
