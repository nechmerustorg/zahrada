import type { SVGProps } from 'react';

export function RozmarynSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Central vertical stem */}
      <rect x="7" y="1" width="2" height="13" fill="#6b4423" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="7" y="1" width="2" height="1" fill="#2c3e50" />
      {/* Needle row 1 (top) - outline */}
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="3" width="1" height="1" fill="#2c3e50" />
      {/* Needle row 1 fill */}
      <rect x="6" y="2" width="1" height="2" fill="#38761d" />
      <rect x="9" y="2" width="1" height="2" fill="#38761d" />
      <rect x="6" y="2" width="1" height="1" fill="#93c47d" />
      <rect x="9" y="2" width="1" height="1" fill="#93c47d" />
      {/* Needle row 2 - longer */}
      <rect x="3" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="4" width="3" height="2" fill="#38761d" />
      <rect x="9" y="4" width="3" height="2" fill="#38761d" />
      <rect x="4" y="4" width="1" height="1" fill="#93c47d" />
      <rect x="11" y="4" width="1" height="1" fill="#93c47d" />
      {/* Needle row 3 */}
      <rect x="2" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="7" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="6" width="4" height="2" fill="#38761d" />
      <rect x="9" y="6" width="4" height="2" fill="#38761d" />
      <rect x="3" y="6" width="1" height="1" fill="#93c47d" />
      <rect x="12" y="6" width="1" height="1" fill="#93c47d" />
      <rect x="5" y="7" width="1" height="1" fill="#4a7c2a" />
      <rect x="10" y="7" width="1" height="1" fill="#4a7c2a" />
      {/* Needle row 4 */}
      <rect x="3" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="8" width="3" height="2" fill="#38761d" />
      <rect x="9" y="8" width="3" height="2" fill="#38761d" />
      <rect x="4" y="8" width="1" height="1" fill="#93c47d" />
      <rect x="11" y="8" width="1" height="1" fill="#93c47d" />
      {/* Needle row 5 */}
      <rect x="4" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="10" width="2" height="2" fill="#38761d" />
      <rect x="9" y="10" width="2" height="2" fill="#38761d" />
      <rect x="5" y="10" width="1" height="1" fill="#93c47d" />
      <rect x="10" y="10" width="1" height="1" fill="#93c47d" />
    </svg>
  );
}
