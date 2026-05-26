import type { SVGProps } from 'react';

export function PaprikaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
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
      <rect x="7" y="1" width="2" height="2" fill="#38761d" />
      <rect x="6" y="2" width="1" height="1" fill="#38761d" />
      <rect x="9" y="2" width="1" height="1" fill="#38761d" />
      {/* Calyx (green top) */}
      <rect x="5" y="3" width="6" height="1" fill="#38761d" />
      <rect x="4" y="4" width="1" height="1" fill="#38761d" />
      <rect x="11" y="4" width="1" height="1" fill="#38761d" />
      <rect x="5" y="4" width="6" height="1" fill="#93c47d" />
      {/* Pepper outline */}
      <rect x="3" y="5" width="1" height="7" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="7" fill="#2c3e50" />
      <rect x="4" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="7" y="14" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="13" width="4" height="1" fill="#2c3e50" />
      {/* Pepper body - red */}
      <rect x="4" y="5" width="8" height="7" fill="#cc3333" />
      <rect x="5" y="12" width="6" height="1" fill="#cc3333" />
      <rect x="7" y="13" width="2" height="1" fill="#cc3333" />
      {/* Highlight */}
      <rect x="5" y="6" width="1" height="3" fill="#ffffff" />
      <rect x="6" y="6" width="1" height="1" fill="#ffffff" />
      {/* Bottom lobe shadow lines */}
      <rect x="7" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="12" width="1" height="1" fill="#2c3e50" />
    </svg>
  );
}
