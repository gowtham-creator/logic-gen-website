'use client';

import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Spotlight() {
  return (
    <GradientHoverText />
  );
}

function GradientHoverText() {
  return (
    <div className="wrap flex items-center justify-center bg-white">
      <h1 className="text-[45vh] font-semibold text-shadow-blue-400">
        <TextHoverEffect text="LOGICGEN" />
      </h1>
    </div>
  );
}