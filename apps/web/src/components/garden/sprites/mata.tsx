import type { SVGProps } from 'react';

export function MataSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Central stem */}
      <rect x="7" y="2" width="2" height="12" fill="#4a7c2a" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Top tip outline */}
      <rect x="7" y="1" width="2" height="1" fill="#2c3e50" />
      {/* Top leaf pair - pointed */}
      <rect x="6" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="5" width="1" height="1" fill="#2c3e50" />
      {/* Top leaf bodies */}
      <rect x="6" y="4" width="1" height="1" fill="#93c47d" />
      <rect x="9" y="4" width="1" height="1" fill="#93c47d" />
      {/* Middle leaf pair - larger pointed */}
      <rect x="4" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="7" width="1" height="2" fill="#2c3e50" />
      <rect x="4" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="6" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="6" width="2" height="1" fill="#2c3e50" />
      {/* Middle leaf fills */}
      <rect x="4" y="7" width="3" height="2" fill="#38761d" />
      <rect x="9" y="7" width="3" height="2" fill="#38761d" />
      <rect x="5" y="9" width="2" height="1" fill="#38761d" />
      <rect x="9" y="9" width="2" height="1" fill="#38761d" />
      {/* Highlights on leaves */}
      <rect x="5" y="7" width="1" height="1" fill="#93c47d" />
      <rect x="10" y="7" width="1" height="1" fill="#93c47d" />
      {/* Serrated edges hint */}
      <rect x="4" y="6" width="1" height="0" fill="#38761d" />
      {/* Lower stem bracts */}
      <rect x="6" y="11" width="1" height="1" fill="#38761d" />
      <rect x="9" y="11" width="1" height="1" fill="#38761d" />
      <rect x="5" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="12" width="1" height="1" fill="#2c3e50" />
    </svg>
  );
}
