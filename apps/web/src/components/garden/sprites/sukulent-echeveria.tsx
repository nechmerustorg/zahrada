import type { SVGProps } from 'react';

export function SukulentEcheveriaSprite({
  size = 48,
  ...rest
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Outer rosette ring - outline */}
      <rect x="6" y="1" width="4" height="1" fill="#2c3e50" />
      <rect x="4" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="2" height="1" fill="#2c3e50" />
      <rect x="2" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="12" y="3" width="2" height="1" fill="#2c3e50" />
      <rect x="1" y="4" width="1" height="2" fill="#2c3e50" />
      <rect x="14" y="4" width="1" height="2" fill="#2c3e50" />
      <rect x="1" y="6" width="1" height="4" fill="#2c3e50" />
      <rect x="14" y="6" width="1" height="4" fill="#2c3e50" />
      <rect x="1" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="14" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="2" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="12" y="12" width="2" height="1" fill="#2c3e50" />
      <rect x="4" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="10" y="13" width="2" height="1" fill="#2c3e50" />
      <rect x="6" y="14" width="4" height="1" fill="#2c3e50" />
      {/* Outer leaf fill - blue-green */}
      <rect x="6" y="2" width="4" height="1" fill="#7da87d" />
      <rect x="4" y="3" width="8" height="1" fill="#7da87d" />
      <rect x="2" y="4" width="12" height="2" fill="#7da87d" />
      <rect x="2" y="6" width="12" height="4" fill="#7da87d" />
      <rect x="2" y="10" width="12" height="2" fill="#7da87d" />
      <rect x="4" y="12" width="8" height="1" fill="#7da87d" />
      <rect x="6" y="13" width="4" height="1" fill="#7da87d" />
      {/* Leaf separation lines forming rosette segments */}
      <rect x="3" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="12" width="1" height="1" fill="#2c3e50" />
      {/* Inner ring of leaves - lighter green/different shade */}
      <rect x="5" y="5" width="6" height="6" fill="#93c47d" />
      <rect x="6" y="4" width="4" height="1" fill="#93c47d" />
      <rect x="6" y="11" width="4" height="1" fill="#93c47d" />
      {/* Inner ring outline */}
      <rect x="5" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="10" width="1" height="1" fill="#2c3e50" />
      {/* Center bud */}
      <rect x="7" y="7" width="2" height="2" fill="#7da87d" />
      <rect x="7" y="7" width="1" height="1" fill="#ffffff" />
      {/* Pink tips on leaf points */}
      <rect x="7" y="1" width="2" height="1" fill="#e89bb5" />
      <rect x="7" y="14" width="2" height="1" fill="#e89bb5" />
      <rect x="1" y="7" width="1" height="2" fill="#e89bb5" />
      <rect x="14" y="7" width="1" height="2" fill="#e89bb5" />
      {/* Diagonal pink tips */}
      <rect x="2" y="3" width="1" height="1" fill="#e89bb5" />
      <rect x="13" y="3" width="1" height="1" fill="#e89bb5" />
      <rect x="2" y="12" width="1" height="1" fill="#e89bb5" />
      <rect x="13" y="12" width="1" height="1" fill="#e89bb5" />
    </svg>
  );
}
