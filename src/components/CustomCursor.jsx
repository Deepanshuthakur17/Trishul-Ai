'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Enable custom cursor only on fine pointer devices (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setIsFinePointer(false);
      return;
    }
    setIsFinePointer(true);
    document.documentElement.classList.add('custom-cursor-active');

    const onMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isTextInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('[contenteditable="true"]');

      if (isTextInput) {
        setIsText(true);
        setIsHovered(false);
        return;
      }

      setIsText(false);

      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('[data-cursor="hover"]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed top-0 left-0 z-[99999] select-none transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`transition-transform duration-150 ${isClicked ? 'scale-90' : 'scale-100'}`}>
        {isText ? (
          /* ========================================== */
          /* 1. BRAND GOLD TEXT I-BEAM CURSOR          */
          /* ========================================== */
          <div className="-translate-x-1/2 -translate-y-1/2 w-1.5 h-6 bg-gradient-to-b from-[#FFF4CF] via-[#F0D688] to-[#C99A3D] rounded-full border border-[#080808] shadow-[0_0_10px_#D6AD55]" />
        ) : isHovered ? (
          /* ========================================== */
          /* 2. BRAND GOLD POINTING HAND CURSOR FOR BTNS */
          /* ========================================== */
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-translate-x-[7px] drop-shadow-[0_2px_10px_rgba(214,173,85,0.6)]"
          >
            <defs>
              <linearGradient id="trishulGoldHandGrad" x1="0" y1="0" x2="20" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF4CF" />
                <stop offset="45%" stopColor="#F0D688" />
                <stop offset="100%" stopColor="#C99A3D" />
              </linearGradient>
            </defs>
            <path
              d="M7 0.5C6.17 0.5 5.5 1.17 5.5 2V12.2C4.85 11.55 3.9 11.2 3 11.2C1.34 11.2 0 12.54 0 14.2C0 15.35 0.65 16.35 1.6 18.8C3.15 22.8 6.1 26.5 11 26.5C16.5 26.5 20.5 22 20.5 16.5V10C20.5 9.17 19.83 8.5 19 8.5C18.17 8.5 17.5 9.17 17.5 10V11H16.5V8C16.5 7.17 15.83 6.5 15 6.5C14.17 6.5 13.5 7.17 13.5 8V10.5H12.5V7C12.5 6.17 11.83 5.5 11 5.5C10.17 5.5 9.5 6.17 9.5 7V11H8.5V2C8.5 1.17 7.83 0.5 7 0.5Z"
              fill="url(#trishulGoldHandGrad)"
              stroke="#080808"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          /* ========================================== */
          /* 3. BRAND GOLD ARROW POINTER CURSOR         */
          /* ========================================== */
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(214,173,85,0.45)]"
          >
            <defs>
              <linearGradient id="trishulBrandGoldCursor" x1="0" y1="0" x2="16" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFF4CF" />
                <stop offset="45%" stopColor="#F0D688" />
                <stop offset="100%" stopColor="#C99A3D" />
              </linearGradient>
            </defs>
            <path
              d="M0 0V22L5.5 16.5L9.2 24.5L12.5 23L8.8 15L16 15L0 0Z"
              fill="url(#trishulBrandGoldCursor)"
              stroke="#080808"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
