"use client";

import { useEffect, useRef, useState } from "react";
import { videos } from "../data/home";
import { asset } from "../lib/assets";

export function ClientStories() {
  const grid = useRef<HTMLDivElement>(null);
  const sectionVisible = useRef(true);
  const players = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const section = grid.current?.closest("section");
    if (!section) return;
    const elements = players.current.filter((player): player is HTMLVideoElement => player !== null);
    const pauseVideos = () => {
      elements.forEach(player => player.pause());
      setActive(null);
    };
    const observer = new IntersectionObserver(([entry]) => {
      sectionVisible.current = entry.isIntersecting && entry.intersectionRatio > 0;
      if (!sectionVisible.current) pauseVideos();
    }, { threshold: 0 });
    observer.observe(section);
    const onVisibilityChange = () => {
      if (document.hidden) pauseVideos();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      elements.forEach(player => player.pause());
    };
  }, []);

  function activate(index: number) {
    // A delayed play request must not restart audio after the visitor scrolls away.
    if (!sectionVisible.current || document.hidden) {
      players.current[index]?.pause();
      return;
    }
    players.current.forEach((player, other) => {
      if (other !== index) player?.pause();
    });
    setActive(index);
    setError(null);
  }

  async function play(index: number) {
    try {
      await players.current[index]?.play();
    } catch (error) {
      if (!sectionVisible.current || document.hidden || (error instanceof DOMException && error.name === "AbortError")) return;
      setError(index);
    }
  }

  // Keep className stable: ScrollAnimator adds is-visible directly to each card.
  return <div className="video-grid" ref={grid}>
    {videos.map((story, index) => <article
      className={`video-card${story.video ? " video-card--playable" : ""}`}
      data-playing={active === index}
      data-reveal="image" style={{ transitionDelay: `${index * 90}ms` }} key={story.title}>
      {story.video ? <>
        <video ref={element => { players.current[index] = element; }} src={asset(story.video)}
          poster={asset(story.image)} preload="none" playsInline controls={active === index} aria-label={story.title}
          onPlay={() => activate(index)} onEnded={() => setActive(null)} onError={() => setError(index)} />
        {active !== index && <button type="button" className="video-card__play" aria-label={`Play ${story.title}`} onClick={() => play(index)}><span /></button>}
      </> : <>
        <img src={asset(story.image)} alt={story.title} loading="lazy" />
        <a className="video-card__play" href="/videos" aria-label={`Explore videos: ${story.title}`}><span /></a>
      </>}
      <div className="video-card__caption">
        <span>{story.client}</span>
        <h3>&quot;{story.title}&quot;</h3>
      </div>
      {error === index && <p className="video-card__error" role="status">Unable to play this video. Please try again.</p>}
    </article>)}
  </div>;
}
