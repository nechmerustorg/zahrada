import type { SVGProps } from 'react';

export function RajceSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
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
      <rect x="7" y="2" width="2" height="2" fill="#38761d" />
      {/* Leaves on top */}
      <rect x="5" y="4" width="2" height="1" fill="#38761d" />
      <rect x="6" y="3" width="1" height="1" fill="#38761d" />
      <rect x="9" y="4" width="2" height="1" fill="#38761d" />
      <rect x="9" y="3" width="1" height="1" fill="#38761d" />
      <rect x="7" y="4" width="2" height="1" fill="#93c47d" />
      {/* Tomato outline */}
      <rect x="5" y="5" width="6" height="1" fill="#2c3e50" />
      <rect x="4" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="5" fill="#2c3e50" />
      <rect x="12" y="7" width="1" height="5" fill="#2c3e50" />
      <rect x="4" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="13" width="6" height="1" fill="#2c3e50" />
      {/* Tomato body */}
      <rect x="5" y="6" width="6" height="1" fill="#cc3333" />
      <rect x="4" y="7" width="8" height="5" fill="#cc3333" />
      <rect x="5" y="12" width="6" height="1" fill="#cc3333" />
      {/* Highlight */}
      <rect x="5" y="7" width="2" height="1" fill="#ffffff" />
      <rect x="5" y="8" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}
