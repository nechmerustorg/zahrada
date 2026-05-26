import type { SVGProps } from 'react';

export function BazalkaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Stem */}
      <rect x="7" y="11" width="2" height="3" fill="#6b4423" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Outline - top leaf cluster */}
      <rect x="6" y="1" width="4" height="1" fill="#2c3e50" />
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="1" fill="#2c3e50" />
      {/* Outline - left bush */}
      <rect x="2" y="4" width="1" height="6" fill="#2c3e50" />
      <rect x="3" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="10" width="2" height="1" fill="#2c3e50" />
      {/* Outline - right bush */}
      <rect x="13" y="4" width="1" height="6" fill="#2c3e50" />
      <rect x="12" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="2" height="1" fill="#2c3e50" />
      {/* Outline - middle dip */}
      <rect x="4" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="11" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="11" width="2" height="1" fill="#2c3e50" />
      {/* Dark green leaf body */}
      <rect x="3" y="4" width="10" height="6" fill="#38761d" />
      <rect x="4" y="3" width="8" height="1" fill="#38761d" />
      <rect x="6" y="2" width="4" height="1" fill="#38761d" />
      {/* Light green highlights - rounded leaves */}
      <rect x="4" y="4" width="2" height="2" fill="#93c47d" />
      <rect x="8" y="3" width="2" height="2" fill="#93c47d" />
      <rect x="10" y="6" width="2" height="2" fill="#93c47d" />
      <rect x="5" y="7" width="2" height="2" fill="#93c47d" />
      {/* Mid tone separators */}
      <rect x="7" y="5" width="1" height="1" fill="#4a7c2a" />
      <rect x="3" y="9" width="1" height="1" fill="#4a7c2a" />
      <rect x="12" y="9" width="1" height="1" fill="#4a7c2a" />
    </svg>
  );
}
