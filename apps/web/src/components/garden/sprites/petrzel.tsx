import type { SVGProps } from 'react';

export function PetrzelSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Outline - frilly top */}
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="1" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="4" width="1" height="1" fill="#2c3e50" />
      {/* Outline - body */}
      <rect x="2" y="5" width="1" height="4" fill="#2c3e50" />
      <rect x="13" y="5" width="1" height="4" fill="#2c3e50" />
      <rect x="3" y="9" width="2" height="1" fill="#2c3e50" />
      <rect x="11" y="9" width="2" height="1" fill="#2c3e50" />
      <rect x="5" y="10" width="6" height="1" fill="#2c3e50" />
      {/* Stem */}
      <rect x="7" y="11" width="2" height="3" fill="#4a7c2a" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Body - dark green base */}
      <rect x="3" y="4" width="10" height="5" fill="#38761d" />
      <rect x="4" y="3" width="2" height="1" fill="#38761d" />
      <rect x="7" y="2" width="2" height="1" fill="#38761d" />
      <rect x="10" y="3" width="2" height="1" fill="#38761d" />
      <rect x="5" y="9" width="6" height="1" fill="#38761d" />
      {/* Frilly light-green clumps */}
      <rect x="4" y="4" width="2" height="1" fill="#93c47d" />
      <rect x="7" y="3" width="2" height="1" fill="#93c47d" />
      <rect x="10" y="4" width="2" height="1" fill="#93c47d" />
      <rect x="3" y="6" width="2" height="1" fill="#93c47d" />
      <rect x="11" y="6" width="2" height="1" fill="#93c47d" />
      <rect x="6" y="7" width="1" height="1" fill="#93c47d" />
      <rect x="9" y="7" width="1" height="1" fill="#93c47d" />
      {/* Mid-tone frill dots */}
      <rect x="7" y="5" width="2" height="1" fill="#4a7c2a" />
      <rect x="5" y="6" width="1" height="1" fill="#4a7c2a" />
      <rect x="10" y="6" width="1" height="1" fill="#4a7c2a" />
      <rect x="7" y="7" width="2" height="1" fill="#4a7c2a" />
      <rect x="6" y="8" width="4" height="1" fill="#4a7c2a" />
    </svg>
  );
}
