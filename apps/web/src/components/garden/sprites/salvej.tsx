import type { SVGProps } from 'react';

export function SalvejSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
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
      <rect x="7" y="10" width="2" height="4" fill="#6b4423" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Upper-left oval leaf outline */}
      <rect x="3" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="2" y="4" width="1" height="3" fill="#2c3e50" />
      <rect x="5" y="4" width="1" height="3" fill="#2c3e50" />
      <rect x="3" y="7" width="2" height="1" fill="#2c3e50" />
      {/* Upper-left oval leaf fill */}
      <rect x="3" y="4" width="2" height="3" fill="#7da87d" />
      <rect x="3" y="5" width="1" height="1" fill="#93c47d" />
      {/* Upper-right oval leaf outline */}
      <rect x="11" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="4" width="1" height="3" fill="#2c3e50" />
      <rect x="13" y="4" width="1" height="3" fill="#2c3e50" />
      <rect x="11" y="7" width="2" height="1" fill="#2c3e50" />
      {/* Upper-right oval leaf fill */}
      <rect x="11" y="4" width="2" height="3" fill="#7da87d" />
      <rect x="11" y="5" width="1" height="1" fill="#93c47d" />
      {/* Center top leaf outline */}
      <rect x="7" y="1" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="2" width="1" height="3" fill="#2c3e50" />
      <rect x="9" y="2" width="1" height="3" fill="#2c3e50" />
      <rect x="7" y="5" width="2" height="1" fill="#2c3e50" />
      {/* Center top leaf fill */}
      <rect x="7" y="2" width="2" height="3" fill="#7da87d" />
      <rect x="7" y="3" width="1" height="1" fill="#93c47d" />
      {/* Lower-left oval leaf outline */}
      <rect x="4" y="8" width="2" height="1" fill="#2c3e50" />
      <rect x="3" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="6" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="4" y="11" width="2" height="1" fill="#2c3e50" />
      {/* Lower-left leaf fill */}
      <rect x="4" y="9" width="2" height="2" fill="#7da87d" />
      <rect x="4" y="9" width="1" height="1" fill="#93c47d" />
      {/* Lower-right oval leaf outline */}
      <rect x="10" y="8" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="10" y="11" width="2" height="1" fill="#2c3e50" />
      {/* Lower-right leaf fill */}
      <rect x="10" y="9" width="2" height="2" fill="#7da87d" />
      <rect x="10" y="9" width="1" height="1" fill="#93c47d" />
    </svg>
  );
}
