'use client';

import { useEffect, useRef } from 'react';

export default function GalaxyBackground({
  starSpeed = 0.5,
  density = 1,
  hueShift = 45, // Warm gold shift
  speed = 1,
  glowIntensity = 0.3,
  saturation = 0.8,
  mouseRepulsion = true,
  repulsionStrength = 2,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  transparent = true,
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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create star particles
    const starCount = Math.floor(240 * density);
    const stars = Array.from({ length: starCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const maxDim = Math.max(width, height);
      const dist = Math.random() * maxDim * 0.75;
      return {
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        origX: width / 2 + Math.cos(angle) * dist,
        origY: height / 2 + Math.sin(angle) * dist,
        radius: Math.random() * 2 + 0.8,
        angle: angle,
        orbitRadius: dist,
        speed: (Math.random() * 0.002 + 0.0005) * speed * starSpeed,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        color: `hsl(${hueShift + Math.random() * 20}, ${saturation * 100}%, ${70 + Math.random() * 20}%)`,
      };
    });

    let currentRotation = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      currentRotation += 0.001 * rotationSpeed;
      const centerX = width / 2;
      const centerY = height / 2;

      stars.forEach((star) => {
        star.angle += star.speed;
        let px = centerX + Math.cos(star.angle + currentRotation) * star.orbitRadius;
        let py = centerY + Math.sin(star.angle + currentRotation) * star.orbitRadius;

        // Mouse Repulsion effect
        if (mouseRepulsion) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 140;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 35 * repulsionStrength;
            px += (dx / dist) * force;
            py += (dy / dist) * force;
          }
        }

        // Twinkle factor
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = 1 - twinkleIntensity + Math.sin(star.twinklePhase) * twinkleIntensity;
        const alpha = Math.max(0.1, Math.min(1, twinkle));

        // Glow halo
        if (glowIntensity > 0) {
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, star.radius * 3.5);
          gradient.addColorStop(0, star.color.replace('hsl', 'hsla').replace('%)', `%, ${alpha * glowIntensity})`));
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, star.radius * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core star point
        ctx.fillStyle = star.color.replace('hsl', 'hsla').replace('%)', `%, ${alpha})`);
        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [starSpeed, density, hueShift, speed, glowIntensity, saturation, mouseRepulsion, repulsionStrength, twinkleIntensity, rotationSpeed]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
