import type { SVGProps } from 'react';

export function RibizSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Bush outline */}
      <rect x="5" y="2" width="6" height="1" fill="#2c3e50" />
      <rect x="4" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="4" width="1" height="6" fill="#2c3e50" />
      <rect x="12" y="4" width="1" height="6" fill="#2c3e50" />
      <rect x="4" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="11" width="2" height="1" fill="#2c3e50" />
      <rect x="9" y="11" width="2" height="1" fill="#2c3e50" />
      {/* Bush body - dark green */}
      <rect x="5" y="3" width="6" height="1" fill="#38761d" />
      <rect x="4" y="4" width="8" height="6" fill="#38761d" />
      <rect x="5" y="10" width="6" height="1" fill="#38761d" />
      {/* Light highlights */}
      <rect x="5" y="4" width="2" height="2" fill="#93c47d" />
      <rect x="8" y="3" width="2" height="2" fill="#93c47d" />
      <rect x="9" y="6" width="2" height="2" fill="#93c47d" />
      <rect x="4" y="7" width="2" height="2" fill="#93c47d" />
      {/* Berry clusters hanging below */}
      {/* Cluster 1 - left */}
      <rect x="4" y="11" width="1" height="1" fill="#e74c3c" />
      <rect x="5" y="12" width="1" height="1" fill="#e74c3c" />
      <rect x="4" y="13" width="1" height="1" fill="#e74c3c" />
      <rect x="4" y="14" width="1" height="1" fill="#2c3e50" />
      <rect x="5" y="13" width="1" height="1" fill="#2c3e50" />
      {/* Cluster 2 - middle */}
      <rect x="7" y="12" width="2" height="1" fill="#e74c3c" />
      <rect x="8" y="13" width="1" height="1" fill="#e74c3c" />
      <rect x="7" y="14" width="1" height="1" fill="#e74c3c" />
      <rect x="7" y="15" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="14" width="1" height="1" fill="#2c3e50" />
      {/* Cluster 3 - right */}
      <rect x="11" y="11" width="1" height="1" fill="#e74c3c" />
      <rect x="10" y="12" width="1" height="1" fill="#e74c3c" />
      <rect x="11" y="13" width="1" height="1" fill="#e74c3c" />
      <rect x="11" y="14" width="1" height="1" fill="#2c3e50" />
      <rect x="10" y="13" width="1" height="1" fill="#2c3e50" />
      {/* Berry highlights */}
      <rect x="4" y="11" width="1" height="1" fill="#e74c3c" />
      <rect x="8" y="12" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}
