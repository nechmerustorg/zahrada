import type { SVGProps } from 'react';

export function TymianSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Low compact mound - outline */}
      <rect x="3" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="7" width="1" height="5" fill="#2c3e50" />
      <rect x="13" y="7" width="1" height="5" fill="#2c3e50" />
      <rect x="3" y="12" width="10" height="1" fill="#2c3e50" />
      {/* Woody stems peeking */}
      <rect x="5" y="11" width="1" height="1" fill="#6b4423" />
      <rect x="8" y="11" width="1" height="1" fill="#6b4423" />
      <rect x="11" y="11" width="1" height="1" fill="#6b4423" />
      {/* Mound body - dark green */}
      <rect x="3" y="7" width="10" height="5" fill="#38761d" />
      <rect x="4" y="6" width="2" height="1" fill="#38761d" />
      <rect x="6" y="6" width="2" height="1" fill="#38761d" />
      <rect x="8" y="4" width="1" height="2" fill="#38761d" />
      <rect x="9" y="5" width="2" height="1" fill="#38761d" />
      <rect x="11" y="5" width="2" height="1" fill="#38761d" />
      <rect x="5" y="5" width="1" height="1" fill="#38761d" />
      <rect x="7" y="5" width="1" height="1" fill="#38761d" />
      {/* Tiny round leaf highlights - scattered */}
      <rect x="4" y="7" width="1" height="1" fill="#93c47d" />
      <rect x="6" y="6" width="1" height="1" fill="#93c47d" />
      <rect x="8" y="5" width="1" height="1" fill="#93c47d" />
      <rect x="10" y="6" width="1" height="1" fill="#93c47d" />
      <rect x="12" y="7" width="1" height="1" fill="#93c47d" />
      <rect x="3" y="9" width="1" height="1" fill="#93c47d" />
      <rect x="5" y="9" width="1" height="1" fill="#93c47d" />
      <rect x="7" y="8" width="1" height="1" fill="#93c47d" />
      <rect x="9" y="9" width="1" height="1" fill="#93c47d" />
      <rect x="11" y="8" width="1" height="1" fill="#93c47d" />
      <rect x="12" y="10" width="1" height="1" fill="#93c47d" />
      <rect x="4" y="11" width="1" height="1" fill="#93c47d" />
      <rect x="7" y="10" width="1" height="1" fill="#93c47d" />
      <rect x="10" y="11" width="1" height="1" fill="#93c47d" />
      {/* Mid-tone separator dots */}
      <rect x="5" y="8" width="1" height="1" fill="#4a7c2a" />
      <rect x="8" y="7" width="1" height="1" fill="#4a7c2a" />
      <rect x="11" y="9" width="1" height="1" fill="#4a7c2a" />
      <rect x="6" y="10" width="1" height="1" fill="#4a7c2a" />
      <rect x="9" y="11" width="1" height="1" fill="#4a7c2a" />
    </svg>
  );
}
