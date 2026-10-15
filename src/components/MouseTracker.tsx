import { useEffect, useRef, useState } from 'react';

export function MouseTracker() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Update ambient background spotlight variables
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // Immediate position update for center precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]')
        );
        setIsHovered(clickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth lerp animation loop for outer ring
    const animate = () => {
      // Smooth lerp (0.15 factor for smooth gliding trailing effect)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (isTouch) {
    return null;
  }

  return (
    <>
      {/* Ambient soft glow spotlight following cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.08), transparent 75%)`,
        }}
      />

      {/* Trailing smooth ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-primary/60 transition-[opacity,width,height,background-color] duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovered ? 44 : 28,
          height: isHovered ? 44 : 28,
          marginTop: isHovered ? -22 : -14,
          marginLeft: isHovered ? -22 : -14,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.03)',
          boxShadow: isHovered ? '0 0 16px rgba(59, 130, 246, 0.35)' : 'none',
          willChange: 'transform',
        }}
      />

      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.9)] transition-opacity duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          marginTop: isHovered ? -3 : -2,
          marginLeft: isHovered ? -3 : -2,
          willChange: 'transform',
        }}
      />
    </>
  );
}
