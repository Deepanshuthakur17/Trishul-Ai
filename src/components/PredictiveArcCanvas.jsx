'use client';

import { useEffect, useRef } from "react";
import {
  createPredictiveArcRenderer,
  PREDICTIVE_ARC_DEFAULTS,
} from "./predictiveArcRenderer";

export function PredictiveArcCanvas({ className = "", mode = "dark", speed = 1, hue = 0, saturation = 1, brightness = 1, ...props }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const optionsRef = useRef({ ...PREDICTIVE_ARC_DEFAULTS, mode, speed, hue, saturation, brightness, ...props });
  optionsRef.current = { ...PREDICTIVE_ARC_DEFAULTS, mode, speed, hue, saturation, brightness, ...props };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;
    const renderer = createPredictiveArcRenderer(canvas, () => optionsRef.current);
    if (!renderer) return undefined;
    let frame = 0;
    let visible = true;
    const resize = () => {
      const bounds = host.getBoundingClientRect();
      renderer.resize(bounds.width, bounds.height);
      renderer.render();
    };
    const tick = () => {
      renderer.render();
      frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !frame) frame = requestAnimationFrame(tick);
      if (!visible && frame) cancelAnimationFrame(frame), (frame = 0);
    });
    const visibility = () => {
      if (document.hidden && frame) cancelAnimationFrame(frame), (frame = 0);
      else if (!document.hidden && visible && !frame) frame = requestAnimationFrame(tick);
    };
    observer.observe(host);
    intersection.observe(host);
    document.addEventListener("visibilitychange", visibility);
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      data-mode={optionsRef.current.mode}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          filter: `hue-rotate(${optionsRef.current.hue}deg) saturate(${optionsRef.current.saturation})`,
        }}
      />
    </div>
  );
}

export default PredictiveArcCanvas;
