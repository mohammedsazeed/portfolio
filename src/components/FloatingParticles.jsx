import { useEffect, useRef, useCallback } from "react";

const COLORS = ["#6c63ff", "#e563ff", "#63ffd9", "#a78bfa", "#f472b6", "#818cf8", "#34d399"];
const CONNECTION_DIST = 150;
const MOUSE_REPEL = 130;

function hex(c) {
  return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
}

export default function FloatingParticles({ count = 90 }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const animRef = useRef(null);

  const initParticles = useCallback((w, h) => {
    return Array.from({ length: count }, () => {
      const vx = (Math.random() - 0.5) * 0.7;
      const vy = (Math.random() - 0.5) * 0.7;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx, vy,
        bvx: vx, bvy: vy,
        size: 1.5 + Math.random() * 2.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.5 + Math.random() * 0.4,
      };
    });
  }, [count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width || window.innerWidth;
      h = rect.height || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = initParticles(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pts = particlesRef.current;

      for (const p of pts) {
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_REPEL && d > 0) {
          p.vx += (dx / d) * 0.3;
          p.vy += (dy / d) * 0.3;
        }
        p.vx += (p.bvx - p.vx) * 0.015;
        p.vy += (p.bvy - p.vy) * 0.015;
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = dx * dx + dy * dy;
          if (dist < CONNECTION_DIST * CONNECTION_DIST) {
            const d = Math.sqrt(dist);
            const alpha = (1 - d / CONNECTION_DIST) * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(168,139,250,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of pts) {
        const [r, g, b] = hex(p.color);
        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity * 0.15})`;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="floating-particles"
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
