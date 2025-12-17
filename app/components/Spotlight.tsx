'use client';

import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Spotlight() {
  return (
    <GradientHoverText />
  );
}

function GradientHoverText() {
  return (
    <div className="wrap flex items-center justify-center bg-white overflow-hidden px-2 sm:px-4 w-full max-w-[100vw]">
      <h1 className="text-[12vh] sm:text-[20vh] md:text-[30vh] lg:text-[40vh] xl:text-[45vh] font-semibold text-shadow-blue-400 w-full max-w-full">
        <TextHoverEffect text="LOGICGEN" />
      </h1>
    </div>
  );
}