import type { SVGProps } from 'react';

export function JahodaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Small white flower (top-left) */}
      <rect x="2" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="1" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="1" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="2" width="3" height="3" fill="#ffffff" />
      <rect x="3" y="3" width="1" height="1" fill="#e74c3c" />
      {/* Green sepals (crown) outline */}
      <rect x="7" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="4" width="1" height="1" fill="#2c3e50" />
      {/* Sepals fill */}
      <rect x="7" y="4" width="5" height="1" fill="#38761d" />
      <rect x="8" y="3" width="1" height="1" fill="#38761d" />
      <rect x="10" y="3" width="1" height="1" fill="#38761d" />
      <rect x="8" y="4" width="1" height="1" fill="#93c47d" />
      <rect x="10" y="4" width="1" height="1" fill="#93c47d" />
      {/* Strawberry heart outline */}
      <rect x="5" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="6" width="1" height="3" fill="#2c3e50" />
      <rect x="14" y="6" width="1" height="3" fill="#2c3e50" />
      <rect x="5" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="13" y="9" width="1" height="2" fill="#2c3e50" />
      <rect x="6" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="13" width="3" height="1" fill="#2c3e50" />
      <rect x="9" y="14" width="1" height="0" fill="#2c3e50" />
      {/* Strawberry red fill */}
      <rect x="5" y="6" width="9" height="3" fill="#e74c3c" />
      <rect x="6" y="5" width="7" height="1" fill="#e74c3c" />
      <rect x="6" y="9" width="7" height="2" fill="#e74c3c" />
      <rect x="7" y="11" width="5" height="1" fill="#e74c3c" />
      <rect x="8" y="12" width="3" height="1" fill="#e74c3c" />
      {/* Top notch (heart shape) */}
      <rect x="9" y="5" width="1" height="1" fill="#38761d" />
      {/* White seed dots */}
      <rect x="6" y="6" width="1" height="1" fill="#ffffff" />
      <rect x="10" y="6" width="1" height="1" fill="#ffffff" />
      <rect x="8" y="7" width="1" height="1" fill="#ffffff" />
      <rect x="12" y="7" width="1" height="1" fill="#ffffff" />
      <rect x="6" y="8" width="1" height="1" fill="#ffffff" />
      <rect x="10" y="8" width="1" height="1" fill="#ffffff" />
      <rect x="8" y="9" width="1" height="1" fill="#ffffff" />
      <rect x="12" y="9" width="1" height="1" fill="#ffffff" />
      <rect x="9" y="11" width="1" height="1" fill="#ffffff" />
      {/* Darker red shading bottom */}
      <rect x="7" y="12" width="1" height="1" fill="#cc3333" />
      <rect x="11" y="12" width="1" height="1" fill="#cc3333" />
    </svg>
  );
}
