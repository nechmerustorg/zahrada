import type { SVGProps } from 'react';

export function RuzeSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Flower outline */}
      <rect x="6" y="1" width="4" height="1" fill="#2c3e50" />
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="11" y="3" width="1" height="3" fill="#2c3e50" />
      <rect x="5" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="7" width="4" height="1" fill="#2c3e50" />
      {/* Flower body - pink petals */}
      <rect x="6" y="2" width="4" height="1" fill="#e8a5b8" />
      <rect x="5" y="3" width="6" height="3" fill="#e8a5b8" />
      <rect x="6" y="6" width="4" height="1" fill="#e8a5b8" />
      {/* Flower center - darker pink/red */}
      <rect x="7" y="3" width="2" height="2" fill="#cc3333" />
      <rect x="7" y="4" width="1" height="1" fill="#e8a5b8" />
      {/* Petal highlights */}
      <rect x="6" y="3" width="1" height="1" fill="#ffffff" />
      <rect x="9" y="5" width="1" height="1" fill="#ffffff" />
      {/* Stem */}
      <rect x="8" y="8" width="1" height="7" fill="#38761d" />
      <rect x="7" y="8" width="1" height="7" fill="#2c3e50" />
      <rect x="9" y="8" width="1" height="7" fill="#2c3e50" />
      {/* Thorns */}
      <rect x="6" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="13" width="1" height="1" fill="#2c3e50" />
      {/* Left leaf */}
      <rect x="3" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="2" y="11" width="1" height="2" fill="#2c3e50" />
      <rect x="3" y="13" width="1" height="1" fill="#2c3e50" />
      <rect x="4" y="11" width="1" height="2" fill="#2c3e50" />
      <rect x="3" y="11" width="1" height="2" fill="#38761d" />
      <rect x="4" y="12" width="1" height="1" fill="#93c47d" />
      {/* Right leaf */}
      <rect x="12" y="9" width="1" height="1" fill="#2c3e50" />
      <rect x="13" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="10" width="1" height="2" fill="#38761d" />
      <rect x="11" y="11" width="1" height="1" fill="#93c47d" />
    </svg>
  );
}
