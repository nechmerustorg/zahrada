import type { SVGProps } from 'react';

export function PazitkaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Purple flower ball (top of one blade) - outline */}
      <rect x="7" y="1" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="2" width="1" height="2" fill="#2c3e50" />
      <rect x="9" y="2" width="1" height="2" fill="#2c3e50" />
      <rect x="7" y="4" width="2" height="1" fill="#2c3e50" />
      {/* Purple flower ball fill */}
      <rect x="7" y="2" width="2" height="2" fill="#8b6fb5" />
      <rect x="7" y="2" width="1" height="1" fill="#ffffff" />
      {/* Blade 1 (center, under flower) */}
      <rect x="7" y="5" width="2" height="9" fill="#4a7c2a" />
      <rect x="7" y="5" width="1" height="9" fill="#2c3e50" />
      <rect x="8" y="5" width="1" height="1" fill="#93c47d" />
      {/* Blade 2 (far left) */}
      <rect x="2" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="6" width="1" height="8" fill="#2c3e50" />
      <rect x="3" y="6" width="1" height="8" fill="#38761d" />
      <rect x="3" y="6" width="1" height="2" fill="#93c47d" />
      {/* Blade 3 (left-mid) */}
      <rect x="4" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="5" width="1" height="9" fill="#2c3e50" />
      <rect x="5" y="5" width="1" height="9" fill="#4a7c2a" />
      <rect x="5" y="5" width="1" height="2" fill="#93c47d" />
      {/* Blade 4 (right-mid) */}
      <rect x="10" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="5" width="1" height="9" fill="#38761d" />
      <rect x="11" y="5" width="1" height="9" fill="#2c3e50" />
      <rect x="10" y="5" width="1" height="2" fill="#93c47d" />
      {/* Blade 5 (far right) */}
      <rect x="13" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="6" width="1" height="8" fill="#38761d" />
      <rect x="13" y="6" width="1" height="8" fill="#2c3e50" />
      <rect x="12" y="6" width="1" height="2" fill="#93c47d" />
      {/* Ground line */}
      <rect x="2" y="13" width="12" height="1" fill="#2c3e50" />
    </svg>
  );
}
