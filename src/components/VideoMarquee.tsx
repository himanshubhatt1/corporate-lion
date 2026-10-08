"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/assets";
import { videoCategories, type LibraryVideo, type VideoCategory } from "../data/video-library";

function VideoCard({ video, variant, active, duplicate, onActivate, onDeactivate }: {
  video: LibraryVideo; variant: "portrait" | "landscape"; active: boolean; duplicate: boolean;
  onActivate: () => void; onDeactivate: () => void;
}) {
  const player = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const element = player.current;
    let cancelled = false;
    setMessage("");
    if (active && element && video.source) {
      element.muted = true;
      element.play().catch(() => { if (!cancelled) setMessage("Tap to play video"); });
    } else {
      element?.pause();
      setPlaying(false);
    }
    return () => { cancelled = true; element?.pause(); };
  }, [active, video.source]);

  function togglePlayback() {
    if (!video.source) { setMessage("Video coming soon"); return; }
    const element = player.current;
    if (!element) return;
    if (element.paused) element.play().catch(() => setMessage("This video could not be loaded."));
    else element.pause();
  }

  return <article className={`library-video library-video--${variant}${playing ? " is-playing" : ""}`} onPointerEnter={event => { if (event.pointerType !== "touch") onActivate(); }} onPointerLeave={event => { if (event.pointerType !== "touch") onDeactivate(); }}>
    <div className="library-video__visual">
      <img src={asset(video.poster)} alt="" loading="lazy" draggable={false} />
      {video.source && <video ref={player} src={active ? video.source : undefined} poster={asset(video.poster)} muted playsInline loop preload="none" onPlaying={() => { setPlaying(true); setMessage(""); }} onPause={() => setPlaying(false)} onError={() => { setPlaying(false); setMessage("This video could not be loaded."); }} />}
      {video.duration && <span className="library-video__duration">{video.duration}</span>}
    </div>
    <div className="library-video__copy">
      {variant === "portrait" && <span className="library-video__eyebrow">Inside Corporate Lion</span>}
      <h3>{variant === "portrait" && video.title === "See the spaces. Feel the possibilities." ? <>See the spaces.<br />Feel the possibilities.</> : video.title}</h3><p>{video.description}</p>
    </div>
    <button type="button" className="library-video__trigger" tabIndex={duplicate ? -1 : 0} aria-label={`${playing ? "Pause" : "Play"} ${video.title}${!video.source ? " — coming soon" : ""}`} onFocus={onActivate} onBlur={onDeactivate} onClick={togglePlayback}>
      <span className="library-video__play" aria-hidden="true">{playing ? <span className="library-video__pause-icon" /> : <svg viewBox="0 0 24 24"><path d="m7 3 15 9L7 21Z" /></svg>}</span>
    </button>
    {message && <span className="library-video__message" role={duplicate ? undefined : "status"}>{message}</span>}
  </article>;
}

export function VideoMarquee({ id, title, accent, videos, variant }: { id: string; title: string; accent: string; videos: LibraryVideo[]; variant: "portrait" | "landscape" }) {
  const [category, setCategory] = useState<VideoCategory>("Project Walkthroughs");
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const motion = useRef({ paused: false, hovered: false, focused: false, touching: false, visible: false, reduced: false });
  const selected = videos.filter(video => category === "All" || video.category === category);
  // Each repetition is wider than a viewport, including categories with one video.
  const sequence = Array.from({ length: selected.length ? Math.ceil(8 / selected.length) : 0 }, () => selected).flat();

  useEffect(() => {
    motion.current.paused = paused;
  }, [paused]);

  useEffect(() => {
    const element = viewport.current!;
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => { motion.current.reduced = query.matches; setReducedMotion(query.matches); };
    updateMotion();
    query.addEventListener("change", updateMotion);
    const observer = new IntersectionObserver(([entry]) => {
      motion.current.visible = entry.isIntersecting;
      setVisible(entry.isIntersecting && !document.hidden);
    }, { threshold: 0 });
    observer.observe(element);
    const visibility = () => setVisible(!document.hidden && motion.current.visible);
    document.addEventListener("visibilitychange", visibility);
    return () => { query.removeEventListener("change", updateMotion); observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  useEffect(() => {
    const element = viewport.current!;
    let frame = 0;
    let previous = 0;
    let distance = 0;
    let position = 0;
    const measure = () => {
      const next = group.current?.getBoundingClientRect().width ?? 0;
      const relative = distance ? (element.scrollLeft % distance) / distance : .08;
      distance = next;
      position = distance * (1 + relative);
      element.scrollLeft = position;
    };
    const resize = new ResizeObserver(measure);
    resize.observe(group.current!);
    measure();
    const animate = (time: number) => {
      const delta = previous ? Math.min(time - previous, 40) : 0;
      previous = time;
      const state = motion.current;
      const stopped = state.paused || state.hovered || state.focused || state.touching || state.reduced || !state.visible || document.hidden;
      if (!stopped && distance) {
        // Keep a fractional position so slow movement remains smooth at high refresh rates.
        if (Math.abs(element.scrollLeft - position) > 2) position = element.scrollLeft;
        position += delta * (variant === "portrait" ? .035 : .028);
        if (position >= distance * 2) position -= distance;
        if (position < distance) position += distance;
        element.scrollLeft = position;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); };
  }, [category, variant]);

  function changeCategory(next: VideoCategory) { setActive(null); setCategory(next); }
  function move(direction: number) {
    setPaused(true);
    const width = viewport.current?.querySelector("article")?.getBoundingClientRect().width ?? 300;
    viewport.current?.scrollBy({ left: direction * (width + 30), behavior: reducedMotion ? "instant" : "smooth" });
  }

  return <section className={`videos-section videos-section--${variant}`} aria-labelledby={`${id}-title`}>
    <div className="videos-section__heading"><h2 id={`${id}-title`}>{title} <span>{accent}</span></h2><p>Stay updated with our newest content on real estate, business opportunities and more.</p></div>
    <div className="videos-filters" role="group" aria-label={`${title} ${accent} categories`}>
      {videoCategories.map(value => <button type="button" key={value} aria-pressed={category === value} onClick={() => changeCategory(value)}>{value}</button>)}
    </div>
    <div className="videos-marquee" id={`${id}-row`} ref={viewport} aria-label={`${category} videos`} onPointerEnter={event => { if (event.pointerType !== "touch") motion.current.hovered = true; }} onPointerLeave={() => { motion.current.hovered = false; setActive(null); }} onPointerDown={event => { if (event.pointerType === "touch") { motion.current.touching = true; setPaused(true); } }} onPointerUp={() => { motion.current.touching = false; }} onPointerCancel={() => { motion.current.touching = false; }} onFocusCapture={() => { motion.current.focused = true; }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) { motion.current.focused = false; setActive(null); } }}>
      <div className="videos-marquee__track">
        {[0, 1, 2].map(copy => <div className="videos-marquee__group" ref={copy === 1 ? group : undefined} key={`${category}-${copy}`} aria-hidden={copy !== 1 ? true : undefined}>
          {sequence.map((video, index) => {
            const key = `${copy}-${index}-${video.id}`;
            return <VideoCard key={key} video={video} variant={variant} duplicate={copy !== 1 || index >= selected.length} active={active === key && visible} onActivate={() => setActive(key)} onDeactivate={() => setActive(current => current === key ? null : current)} />;
          })}
        </div>)}
      </div>
    </div>
    <div className="videos-motion-controls" aria-label={`${title} ${accent} scroll controls`}>
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${title.toLowerCase()} videos`}>←</button>
      <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused || reducedMotion} aria-controls={`${id}-row`} disabled={reducedMotion}>{reducedMotion ? "Manual scrolling" : paused ? "Resume scrolling" : "Pause scrolling"}</button>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${title.toLowerCase()} videos`}>→</button>
    </div>
  </section>;
}
