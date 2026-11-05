import { cn } from "@/lib/utils";

const nodes = [
  { id: 0, x: 300, y: 300, r: 9, hub: true },
  { id: 1, x: 150, y: 170, r: 5 },
  { id: 2, x: 330, y: 90, r: 6 },
  { id: 3, x: 480, y: 190, r: 5 },
  { id: 4, x: 510, y: 360, r: 6 },
  { id: 5, x: 380, y: 500, r: 5 },
  { id: 6, x: 190, y: 460, r: 6 },
  { id: 7, x: 85, y: 320, r: 4 },
  { id: 8, x: 440, y: 270, r: 4 },
  { id: 9, x: 215, y: 255, r: 4 },
];

const links: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 1],
  [0, 8], [0, 9], [8, 3], [9, 1],
];

/** Decorative abstract connectivity graphic. Hidden from assistive tech. */
export function NetworkGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <radialGradient id="ls-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9B6DFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9B6DFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ls-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7138C8" />
          <stop offset="100%" stopColor="#9B6DFF" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="300" r="280" fill="url(#ls-glow)" />
      {[110, 190, 270].map((r) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          stroke="#9B6DFF"
          strokeOpacity="0.18"
          strokeDasharray="2 8"
        />
      ))}

      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#ls-line)"
          strokeOpacity={a === 0 ? 0.55 : 0.28}
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="animate-flow-line"
          style={{ animationDelay: `${i * -0.3}s` }}
        />
      ))}

      {nodes.map((n) => (
        <g key={n.id}>
          {n.hub && (
            <circle cx={n.x} cy={n.y} r={n.r * 3} fill="#9B6DFF" fillOpacity="0.15" />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hub ? "#7138C8" : "#ffffff"}
            stroke="#9B6DFF"
            strokeWidth="1.5"
            className="animate-pulse-node"
            style={{
              transformOrigin: `${n.x}px ${n.y}px`,
              animationDelay: `${n.id * -0.45}s`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
