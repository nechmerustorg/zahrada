import type { SVGProps } from 'react';

export function BramborySprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Potato outline - lumpy oval */}
      <rect x="4" y="3" width="6" height="1" fill="#2c3e50" />
      <rect x="3" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="4" width="2" height="1" fill="#2c3e50" />
      <rect x="2" y="5" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="3" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="8" width="1" height="3" fill="#2c3e50" />
      <rect x="13" y="8" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="3" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="13" width="7" height="1" fill="#2c3e50" />
      {/* Potato body */}
      <rect x="4" y="4" width="6" height="1" fill="#a78a5f" />
      <rect x="3" y="5" width="9" height="2" fill="#a78a5f" />
      <rect x="4" y="7" width="8" height="1" fill="#a78a5f" />
      <rect x="3" y="8" width="10" height="2" fill="#a78a5f" />
      <rect x="3" y="10" width="9" height="1" fill="#a78a5f" />
      <rect x="4" y="11" width="8" height="1" fill="#a78a5f" />
      <rect x="5" y="12" width="7" height="1" fill="#a78a5f" />
      {/* Eyes (dark spots) */}
      <rect x="5" y="6" width="1" height="1" fill="#6b4423" />
      <rect x="9" y="5" width="1" height="1" fill="#6b4423" />
      <rect x="7" y="9" width="1" height="1" fill="#6b4423" />
      <rect x="10" y="10" width="1" height="1" fill="#6b4423" />
      <rect x="5" y="11" width="1" height="1" fill="#6b4423" />
      {/* Highlight */}
      <rect x="4" y="5" width="1" height="1" fill="#d5b886" />
      <rect x="5" y="5" width="2" height="1" fill="#d5b886" />
      <rect x="4" y="6" width="1" height="1" fill="#d5b886" />
    </svg>
  );
}
