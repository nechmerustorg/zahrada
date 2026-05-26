import type { SVGProps } from 'react';

export function HrusenSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Trunk */}
      <rect x="7" y="11" width="2" height="4" fill="#6b4423" />
      <rect x="7" y="11" width="1" height="4" fill="#8b5a2b" />
      <rect x="6" y="15" width="4" height="1" fill="#2c3e50" />
      <rect x="6" y="11" width="1" height="4" fill="#2c3e50" />
      <rect x="9" y="11" width="1" height="4" fill="#2c3e50" />
      {/* Crown outline (narrower/taller, pointed top) */}
      <rect x="7" y="0" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="1" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="1" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="3" width="1" height="2" fill="#2c3e50" />
      <rect x="11" y="3" width="1" height="2" fill="#2c3e50" />
      <rect x="3" y="5" width="1" height="5" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="5" fill="#2c3e50" />
      <rect x="4" y="10" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="10" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="11" width="1" height="1" fill="#2c3e50" />
      {/* Crown - dark green body */}
      <rect x="7" y="1" width="2" height="1" fill="#38761d" />
      <rect x="6" y="2" width="4" height="1" fill="#38761d" />
      <rect x="5" y="3" width="6" height="2" fill="#38761d" />
      <rect x="4" y="5" width="8" height="5" fill="#38761d" />
      <rect x="6" y="10" width="4" height="1" fill="#38761d" />
      {/* Light green highlights */}
      <rect x="7" y="2" width="1" height="1" fill="#93c47d" />
      <rect x="5" y="4" width="2" height="2" fill="#93c47d" />
      <rect x="9" y="6" width="2" height="2" fill="#93c47d" />
      <rect x="4" y="7" width="1" height="2" fill="#93c47d" />
      {/* Pear fruit (egg shape, yellow-green) */}
      <rect x="7" y="6" width="1" height="1" fill="#c2db4c" />
      <rect x="6" y="7" width="2" height="2" fill="#c2db4c" />
      <rect x="7" y="9" width="1" height="1" fill="#c2db4c" />
    </svg>
  );
}
