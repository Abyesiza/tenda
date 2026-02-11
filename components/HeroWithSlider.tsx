"use client";

import { useState } from "react";
import HeroBackgroundSlider from "./HeroBackgroundSlider";

export type HeroTheme = "dark" | "light";

type HeroWithSliderProps = {
  images: string[];
  themes: HeroTheme[];
  children: React.ReactNode;
};

export default function HeroWithSlider({ images, themes, children }: HeroWithSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = themes[activeIndex] ?? "dark";

  return (
    <>
      <HeroBackgroundSlider images={images} onSlideChange={setActiveIndex} />
      <div className={`container hero-theme-${theme}`}>{children}</div>
    </>
  );
}
