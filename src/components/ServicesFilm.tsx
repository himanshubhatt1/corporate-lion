"use client";

import { useState } from "react";
import { servicesVideoSource } from "../data/services";
import { asset } from "../lib/assets";

export function ServicesFilm() {
  const [playing, setPlaying] = useState(false);
  return <div className="services-film">
    {playing && servicesVideoSource ? <video controls autoPlay playsInline src={servicesVideoSource} aria-label="Building Opportunities for a Better Tomorrow" /> : <>
      <img src={asset("services/story-poster.webp")} alt="Building Opportunities for a Better Tomorrow — sunset over a city skyline" width={1320} height={596} loading="lazy" />
      <button type="button" className="services-film__play" disabled={!servicesVideoSource} onClick={() => setPlaying(true)} aria-label={servicesVideoSource ? "Play Building Opportunities for a Better Tomorrow" : "Building Opportunities for a Better Tomorrow — video not yet available"} title={servicesVideoSource ? "Play our story" : "Video source has not been added yet"} />
    </>}
  </div>;
}
