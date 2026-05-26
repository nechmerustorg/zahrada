import type { SVGProps } from 'react';

export function HortenzieSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Bloom outline - round ball */}
      <rect x="5" y="1" width="6" height="1" fill="#2c3e50" />
      <rect x="4" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="3" width="1" height="5" fill="#2c3e50" />
      <rect x="12" y="3" width="1" height="5" fill="#2c3e50" />
      <rect x="4" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="9" width="6" height="1" fill="#2c3e50" />
      {/* Bloom body - purple base */}
      <rect x="5" y="2" width="6" height="1" fill="#a18bcf" />
      <rect x="4" y="3" width="8" height="5" fill="#a18bcf" />
      <rect x="5" y="8" width="6" height="1" fill="#a18bcf" />
      {/* Flower clusters - lighter dots (4-flower pattern) */}
      <rect x="5" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="7" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="9" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="6" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="8" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="10" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="5" y="5" width="1" height="1" fill="#7d6ca8" />
      <rect x="7" y="5" width="1" height="1" fill="#7d6ca8" />
      <rect x="9" y="5" width="1" height="1" fill="#7d6ca8" />
      <rect x="6" y="6" width="1" height="1" fill="#7d6ca8" />
      <rect x="8" y="6" width="1" height="1" fill="#7d6ca8" />
      <rect x="10" y="6" width="1" height="1" fill="#7d6ca8" />
      <rect x="5" y="7" width="1" height="1" fill="#7d6ca8" />
      <rect x="7" y="7" width="1" height="1" fill="#7d6ca8" />
      <rect x="9" y="7" width="1" height="1" fill="#7d6ca8" />
      {/* Highlights */}
      <rect x="4" y="4" width="1" height="1" fill="#ffffff" />
      <rect x="8" y="3" width="1" height="1" fill="#ffffff" />
      {/* Leaves underneath */}
      <rect x="2" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="1" y="11" width="1" height="2" fill="#2c3e50" />
      <rect x="14" y="11" width="1" height="2" fill="#2c3e50" />
      <rect x="2" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="12" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="4" y="10" width="8" height="1" fill="#2c3e50" />
      <rect x="4" y="13" width="8" height="1" fill="#2c3e50" />
      <rect x="2" y="11" width="11" height="2" fill="#38761d" />
      {/* leaf highlights */}
      <rect x="3" y="11" width="2" height="1" fill="#93c47d" />
      <rect x="8" y="12" width="2" height="1" fill="#93c47d" />
      {/* leaf vein */}
      <rect x="7" y="11" width="1" height="2" fill="#2c3e50" />
    </svg>
  );
}
