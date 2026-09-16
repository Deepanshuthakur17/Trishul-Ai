export const PREDICTIVE_ARC_DEFAULTS = {
  mode: "dark",
  speed: 1,
  spacing: 5,
  dotSize: 6,
  archHeight: 0.7,
  thickness: 1,
  brightness: 1,
  hue: 0,
  saturation: 1,
};

function resolveMode(mode) {
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

export function createPredictiveArcRenderer(canvas, getOptions) {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return null;
  let width = 1;
  let height = 1;
  let time = 0;

  const resize = (nextWidth, nextHeight) => {
    width = Math.max(1, nextWidth);
    height = Math.max(1, nextHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const render = () => {
    const options = getOptions();
    const mode = resolveMode(options.mode);
    const isLight = mode === "light";
    context.fillStyle = isLight ? "#eef1f6" : "#040405";
    context.fillRect(0, 0, width, height);
    time += 0.015 * (options.speed || 1);

    const centerX = width / 2;
    const archPeakY = height * 0.35;
    const archWidth = width * 1.5;
    const archHeight = height * (options.archHeight || 0.7);
    context.globalCompositeOperation = isLight ? "source-over" : "lighter";

    const spacing = options.spacing || 5;
    const thicknessMult = options.thickness || 1;
    const dotSize = options.dotSize || 6;
    const brightness = options.brightness || 1;

    for (let x = 0; x < width; x += spacing) {
      const normX = (x - centerX) / (archWidth / 2);
      const curveY = archPeakY + normX * normX * archHeight;
      for (let y = 0; y < height; y += spacing) {
        const distanceToCurve = Math.abs(y - curveY);
        const thickness = (140 + (1 - Math.abs(normX)) * 80) * thicknessMult;
        if (distanceToCurve >= thickness) continue;
        let intensity = 1 - distanceToCurve / thickness;
        const waveX = Math.sin(x * 0.015 + time);
        const waveY = Math.cos(y * 0.02 + time);
        intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
        intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
        if (intensity <= 0.02) continue;

        let r, g, b;
        if (isLight) {
          r = Math.min(255, 48 * intensity + 70 * Math.pow(intensity, 3));
          g = Math.min(255, 28 * intensity + 45 * Math.pow(intensity, 4));
          b = Math.min(255, 120 * intensity + 110 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 90 * coreBoost);
            g = Math.min(255, g + 70 * coreBoost);
            b = Math.min(255, b + 110 * coreBoost);
          }
        } else {
          // Warm golden/amber option or rich glowing violet
          r = Math.min(255, 110 * intensity + 140 * Math.pow(intensity, 3));
          g = Math.min(255, 75 * intensity + 110 * Math.pow(intensity, 4));
          b = Math.min(255, 30 * intensity + 70 * Math.pow(intensity, 2));
          if (intensity > 0.7) {
            const coreBoost = (intensity - 0.7) * 3.3;
            r = Math.min(255, r + 140 * coreBoost);
            g = Math.min(255, g + 130 * coreBoost);
            b = Math.min(255, b + 90 * coreBoost);
          }
        }
        context.fillStyle = `rgb(${Math.floor(r * brightness)}, ${Math.floor(g * brightness)}, ${Math.floor(b * brightness)})`;
        context.fillRect(x, y, dotSize * intensity, dotSize * intensity);
      }
    }
    context.globalCompositeOperation = "source-over";
  };

  return { resize, render };
}
