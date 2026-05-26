import type { SVGProps } from 'react';

export function MrkevSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Green tops - fronds */}
      <rect x="5" y="1" width="1" height="2" fill="#38761d" />
      <rect x="7" y="1" width="1" height="3" fill="#38761d" />
      <rect x="9" y="1" width="1" height="2" fill="#38761d" />
      <rect x="4" y="2" width="1" height="2" fill="#93c47d" />
      <rect x="6" y="2" width="1" height="2" fill="#93c47d" />
      <rect x="8" y="2" width="1" height="2" fill="#93c47d" />
      <rect x="10" y="2" width="1" height="2" fill="#93c47d" />
      <rect x="5" y="3" width="1" height="1" fill="#93c47d" />
      <rect x="9" y="3" width="1" height="1" fill="#93c47d" />
      <rect x="3" y="4" width="1" height="1" fill="#38761d" />
      <rect x="11" y="4" width="1" height="1" fill="#38761d" />
      <rect x="4" y="4" width="7" height="1" fill="#38761d" />
      {/* Carrot outline - tapering */}
      <rect x="3" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="6" width="1" height="2" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="2" fill="#2c3e50" />
      <rect x="4" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="11" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="13" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="13" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="14" width="1" height="1" fill="#2c3e50" />
      {/* Carrot body - orange */}
      <rect x="4" y="5" width="7" height="3" fill="#e67e22" />
      <rect x="5" y="8" width="5" height="2" fill="#e67e22" />
      <rect x="6" y="10" width="3" height="2" fill="#e67e22" />
      <rect x="7" y="12" width="1" height="2" fill="#e67e22" />
      {/* Highlight */}
      <rect x="5" y="6" width="1" height="2" fill="#f4d03f" />
      <rect x="6" y="9" width="1" height="1" fill="#f4d03f" />
      {/* Ridge marks */}
      <rect x="6" y="7" width="1" height="1" fill="#8b5a2b" />
      <rect x="8" y="7" width="1" height="1" fill="#8b5a2b" />
      <rect x="7" y="11" width="1" height="1" fill="#8b5a2b" />
    </svg>
  );
}
