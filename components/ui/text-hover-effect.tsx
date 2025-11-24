"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  automatic?: boolean;
};

export const TextHoverEffect: React.FC<TextHoverEffectProps> = ({
  text,
  duration = 0.4,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (!svgRef.current || !hovered) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cxPercentage = ((cursor.x - rect.left) / rect.width) * 100;
    const cyPercentage = ((cursor.y - rect.top) / rect.height) * 100;

    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor, hovered]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1240 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none w-full h-full min-h-[40vh]"
    >
      <defs>
        {/* Gradient for the text fill */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        {/* Motion-powered radial gradient mask */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          initial={{ cx: "50%", cy: "50%", r: "0%" }}
          animate={{
            cx: maskPosition.cx,
            cy: maskPosition.cy,
            // when leaving, radius animates down to 0 instead of snapping
            r: hovered ? "40%" : "0%",
          }}
          transition={{
            duration,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="1200"
            height="400"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Stroke layer (currently strokeWidth 0, kept as you wrote it) */}
      <motion.text
        // x="50%"
        // y="50%"
        x="0"
        y="50%"
        textAnchor="start"
        textLength="1200"
        lengthAdjust="spacingAndGlyphs"
        dominantBaseline="middle"
        strokeWidth={0}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={1}
        className="fill-gray-100 stroke-neutral-900 dark:stroke-neutral-100"
        style={{
          fontSize: "220px",
        }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Gradient fill revealed by hover spotlight */}
      <motion.text
        x="0"
        y="50%"
        textAnchor="start"
        textLength="1200"
        lengthAdjust="spacingAndGlyphs"
        dominantBaseline="middle"
        fill="url(#textGradient)"
        stroke="none"
        style={{
          fontSize: "220px",
          paintOrder: "stroke",
        }}
        mask="url(#textMask)"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{
          // slightly longer + softer fade so it doesn’t “snap” off
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};
