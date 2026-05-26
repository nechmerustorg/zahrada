import type { SVGProps } from 'react';

export function CibuleSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Green tops */}
      <rect x="6" y="1" width="1" height="4" fill="#38761d" />
      <rect x="8" y="1" width="1" height="4" fill="#38761d" />
      <rect x="7" y="2" width="1" height="3" fill="#93c47d" />
      <rect x="9" y="2" width="1" height="3" fill="#93c47d" />
      {/* Bulb outline - round */}
      <rect x="5" y="5" width="6" height="1" fill="#2c3e50" />
      <rect x="4" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="8" width="1" height="3" fill="#2c3e50" />
      <rect x="12" y="8" width="1" height="3" fill="#2c3e50" />
      <rect x="4" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Bulb body */}
      <rect x="5" y="6" width="6" height="1" fill="#d5b886" />
      <rect x="4" y="7" width="8" height="4" fill="#d5b886" />
      <rect x="5" y="11" width="6" height="1" fill="#d5b886" />
      <rect x="7" y="12" width="2" height="1" fill="#d5b886" />
      {/* Papery skin layers - vertical curves */}
      <rect x="6" y="7" width="1" height="4" fill="#f4d03f" />
      <rect x="9" y="7" width="1" height="4" fill="#f4d03f" />
      <rect x="5" y="8" width="1" height="2" fill="#f4d03f" />
      <rect x="10" y="8" width="1" height="2" fill="#f4d03f" />
      {/* Highlight */}
      <rect x="5" y="7" width="1" height="1" fill="#ffffff" />
      <rect x="4" y="8" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}
