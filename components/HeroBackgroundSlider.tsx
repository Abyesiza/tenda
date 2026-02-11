"use client";

import { useState, useEffect } from "react";

const DEFAULT_HERO_IMAGES = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"];
const SLIDE_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 1200;

type HeroBackgroundSliderProps = {
  images?: string[];
  onSlideChange?: (index: number) => void;
};

export default function HeroBackgroundSlider({ images = DEFAULT_HERO_IMAGES, onSlideChange }: HeroBackgroundSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

  return (
    <div className="hero-bg-slider" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className="hero-bg-slide"
          data-active={index === activeIndex}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.42) 45%, rgba(255, 255, 255, 0.38) 100%), url(${src})`,
            transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
