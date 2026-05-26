import type { SVGProps } from 'react';

export function MonsteraSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Leaf outline - heart-ish top, pointed bottom */}
      <rect x="6" y="1" width="4" height="1" fill="#2c3e50" />
      <rect x="4" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="3" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="4" width="1" height="4" fill="#2c3e50" />
      <rect x="13" y="4" width="1" height="4" fill="#2c3e50" />
      <rect x="3" y="8" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="8" width="1" height="2" fill="#2c3e50" />
      <rect x="4" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="13" width="2" height="1" fill="#2c3e50" />
      {/* Leaf body - dark green fill */}
      <rect x="6" y="2" width="4" height="1" fill="#38761d" />
      <rect x="4" y="3" width="8" height="1" fill="#38761d" />
      <rect x="3" y="4" width="10" height="4" fill="#38761d" />
      <rect x="4" y="8" width="8" height="2" fill="#38761d" />
      <rect x="5" y="10" width="6" height="1" fill="#38761d" />
      <rect x="6" y="11" width="4" height="1" fill="#38761d" />
      <rect x="7" y="12" width="2" height="1" fill="#38761d" />
      {/* Fenestrations / splits on left side */}
      <rect x="2" y="5" width="3" height="1" fill="#2c3e50" />
      <rect x="3" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="8" width="3" height="1" fill="#2c3e50" />
      <rect x="3" y="9" width="1" height="1" fill="#2c3e50" />
      {/* Fenestrations / splits on right side */}
      <rect x="11" y="5" width="3" height="1" fill="#2c3e50" />
      <rect x="12" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="8" width="3" height="1" fill="#2c3e50" />
      <rect x="12" y="9" width="1" height="1" fill="#2c3e50" />
      {/* Round hole in the middle */}
      <rect x="7" y="6" width="2" height="2" fill="#2c3e50" />
      {/* Central vein */}
      <rect x="8" y="4" width="1" height="2" fill="#2c3e50" />
      <rect x="8" y="9" width="1" height="3" fill="#2c3e50" />
      {/* Light highlights */}
      <rect x="5" y="4" width="2" height="1" fill="#93c47d" />
      <rect x="10" y="7" width="2" height="1" fill="#93c47d" />
      <rect x="6" y="10" width="1" height="1" fill="#93c47d" />
    </svg>
  );
}
