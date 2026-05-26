import type { SVGProps } from 'react';

export function SalatSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Top-down ruffled lettuce head */}
      {/* Outer ruffle outline - bumpy circle */}
      <rect x="5" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="3" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="7" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="11" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="2" y="4" width="1" height="2" fill="#2c3e50" />
      <rect x="13" y="4" width="1" height="2" fill="#2c3e50" />
      <rect x="2" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="1" y="7" width="1" height="3" fill="#2c3e50" />
      <rect x="14" y="7" width="1" height="3" fill="#2c3e50" />
      <rect x="2" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="11" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="5" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="7" y="14" width="2" height="1" fill="#2c3e50" />
      {/* Outer leaves - dark green */}
      <rect x="5" y="3" width="2" height="1" fill="#38761d" />
      <rect x="9" y="3" width="2" height="1" fill="#38761d" />
      <rect x="3" y="4" width="10" height="1" fill="#38761d" />
      <rect x="3" y="5" width="10" height="1" fill="#38761d" />
      <rect x="2" y="7" width="1" height="3" fill="#38761d" />
      <rect x="13" y="7" width="1" height="3" fill="#38761d" />
      <rect x="3" y="11" width="10" height="1" fill="#38761d" />
      <rect x="5" y="12" width="6" height="1" fill="#38761d" />
      <rect x="7" y="13" width="2" height="1" fill="#38761d" />
      {/* Inner lettuce - lighter green core */}
      <rect x="4" y="6" width="8" height="5" fill="#38761d" />
      <rect x="3" y="6" width="10" height="1" fill="#38761d" />
      <rect x="3" y="10" width="10" height="1" fill="#38761d" />
      {/* Light green inner ruffles */}
      <rect x="5" y="6" width="6" height="1" fill="#93c47d" />
      <rect x="4" y="7" width="2" height="2" fill="#93c47d" />
      <rect x="10" y="7" width="2" height="2" fill="#93c47d" />
      <rect x="6" y="8" width="4" height="1" fill="#93c47d" />
      <rect x="5" y="9" width="6" height="1" fill="#93c47d" />
      <rect x="5" y="10" width="6" height="1" fill="#38761d" />
      {/* Center vein */}
      <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
      <rect x="7" y="8" width="2" height="1" fill="#93c47d" />
    </svg>
  );
}
