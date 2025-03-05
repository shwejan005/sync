"use client";

import { useState, useEffect, useRef } from "react";

const lerp = (a, b, t) => a + (b - a) * t;

const Cursor = () => {
  const trailCount = 5;
  // Keep trail positions in a ref to avoid state updates on every frame.
  const trailPositionsRef = useRef(Array(trailCount).fill({ x: 0, y: 0 }));
  const mousePosRef = useRef({ x: 0, y: 0 });
  const cursorRefs = useRef([]);

  // States for click, hover, and hidden – these update less frequently.
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
      // Update hover state if the target is interactive.
      const target = e.target;
      const interactiveElement = target.closest("a, button, .interactive");
      setHovering(!!interactiveElement);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      // First element follows the mouse directly.
      trailPositionsRef.current[0] = { ...mousePosRef.current };

      // Smoothly interpolate subsequent positions.
      for (let i = 1; i < trailCount; i++) {
        const prev = trailPositionsRef.current[i - 1];
        const current = trailPositionsRef.current[i];
        trailPositionsRef.current[i] = {
          x: lerp(current.x, prev.x, 0.2),
          y: lerp(current.y, prev.y, 0.2)
        };
      }

      // Directly update each DOM element’s style.
      cursorRefs.current.forEach((el, i) => {
        if (el) {
          const size = 24 - i * 0.8;
          const opacity = 1 - i / trailCount;
          // Determine scale based on click/hover.
          const scale = clicked ? 1.5 : hovering ? 0.8 : 1;
          el.style.transform = `translate(${trailPositionsRef.current[i].x - size/2}px, ${trailPositionsRef.current[i].y - size/2}px) scale(${scale})`;
          el.style.opacity = hidden ? 0 : opacity;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [clicked, hovering, hidden]); // These dependencies update less frequently.

  return (
    <>
      {Array.from({ length: trailCount }).map((_, i) => {
        const size = 24 - i * 0.8;
        const color =
          i % 2 === 0
            ? "hsl(var(--primary) / 0.8)"
            : "hsl(var(--secondary) / 0.8)";
        return (
          <div
            key={i}
            ref={(el) => (cursorRefs.current[i] = el)}
            className="fixed rounded-full pointer-events-none z-[99999] backdrop-blur-sm"
            style={{
              height: `${size}px`,
              width: `${size}px`,
              backgroundColor: color,
              // Transition styles here are kept minimal since we update directly.
              transition: "transform 50ms linear, opacity 150ms ease",
              willChange: "transform"
            }}
          />
        );
      })}
    </>
  );
};

export default Cursor;
