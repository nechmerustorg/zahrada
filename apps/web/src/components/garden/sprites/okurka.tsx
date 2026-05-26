import type { SVGProps } from 'react';

export function OkurkaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
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
      <rect x="9" y="1" width="1" height="2" fill="#38761d" />
      <rect x="10" y="2" width="2" height="1" fill="#93c47d" />
      {/* Cucumber outline - diagonal long oval */}
      <rect x="8" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="13" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="13" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="14" width="5" height="1" fill="#2c3e50" />
      {/* Cucumber body */}
      <rect x="7" y="4" width="2" height="1" fill="#38761d" />
      <rect x="6" y="5" width="3" height="1" fill="#38761d" />
      <rect x="5" y="6" width="4" height="1" fill="#38761d" />
      <rect x="4" y="7" width="5" height="7" fill="#38761d" />
      {/* Light stripes */}
      <rect x="5" y="8" width="1" height="1" fill="#93c47d" />
      <rect x="5" y="11" width="1" height="1" fill="#93c47d" />
      <rect x="7" y="9" width="1" height="1" fill="#93c47d" />
      <rect x="7" y="12" width="1" height="1" fill="#93c47d" />
      <rect x="6" y="13" width="1" height="1" fill="#93c47d" />
    </svg>
  );
}
