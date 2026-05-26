import type { SVGProps } from 'react';

export function LevanduleSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Left spike - flower outline */}
      <rect x="2" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="1" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="5" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="2" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="7" width="1" height="1" fill="#2c3e50" />
      {/* Left spike body */}
      <rect x="3" y="2" width="1" height="1" fill="#a18bcf" />
      <rect x="2" y="3" width="3" height="3" fill="#a18bcf" />
      <rect x="3" y="6" width="1" height="1" fill="#a18bcf" />
      {/* Left flower dots */}
      <rect x="3" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="2" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="4" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="3" y="5" width="1" height="1" fill="#7d6ca8" />
      {/* Middle (tallest) spike - outline */}
      <rect x="7" y="1" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="1" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="2" width="1" height="4" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="4" fill="#2c3e50" />
      <rect x="7" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="7" width="1" height="1" fill="#2c3e50" />
      {/* Middle spike body */}
      <rect x="8" y="1" width="1" height="1" fill="#a18bcf" />
      <rect x="7" y="2" width="3" height="4" fill="#a18bcf" />
      <rect x="8" y="6" width="1" height="1" fill="#a18bcf" />
      {/* Middle flower dots */}
      <rect x="8" y="2" width="1" height="1" fill="#7d6ca8" />
      <rect x="7" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="9" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="8" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="7" y="5" width="1" height="1" fill="#7d6ca8" />
      <rect x="9" y="5" width="1" height="1" fill="#7d6ca8" />
      {/* Right spike outline */}
      <rect x="11" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="14" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="7" width="1" height="1" fill="#2c3e50" />
      {/* Right spike body */}
      <rect x="12" y="2" width="1" height="1" fill="#a18bcf" />
      <rect x="11" y="3" width="3" height="3" fill="#a18bcf" />
      <rect x="12" y="6" width="1" height="1" fill="#a18bcf" />
      {/* Right flower dots */}
      <rect x="12" y="3" width="1" height="1" fill="#7d6ca8" />
      <rect x="11" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="13" y="4" width="1" height="1" fill="#7d6ca8" />
      <rect x="12" y="5" width="1" height="1" fill="#7d6ca8" />
      {/* Stems (silver-green) */}
      <rect x="3" y="8" width="1" height="6" fill="#93c47d" />
      <rect x="8" y="8" width="1" height="6" fill="#93c47d" />
      <rect x="12" y="8" width="1" height="6" fill="#93c47d" />
      {/* Stem outlines */}
      <rect x="3" y="14" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="14" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="14" width="1" height="1" fill="#2c3e50" />
      {/* Base soil leaves */}
      <rect x="2" y="14" width="1" height="1" fill="#38761d" />
      <rect x="4" y="14" width="1" height="1" fill="#38761d" />
      <rect x="7" y="14" width="1" height="1" fill="#38761d" />
      <rect x="9" y="14" width="1" height="1" fill="#38761d" />
      <rect x="11" y="14" width="1" height="1" fill="#38761d" />
      <rect x="13" y="14" width="1" height="1" fill="#38761d" />
    </svg>
  );
}
