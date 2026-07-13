import { useMemo } from "react";

type Props = { count?: number; className?: string };

export function StarField({ count = 120, className = "" }: Props) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.4,
        delay: Math.random() * 6,
        duration: 2 + Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.7,
      })),
    [count],
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-ivory"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 4}px rgba(255,240,200,0.8)`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      <style>{`@keyframes twinkle{0%,100%{opacity:.15;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}`}</style>
    </div>
  );
}