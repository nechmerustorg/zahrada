import type { SVGProps } from 'react';

export function MalinaSprite({ size = 48, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {/* Leaf at top-left - outline */}
      <rect x="2" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="1" width="2" height="1" fill="#2c3e50" />
      <rect x="5" y="2" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="3" width="1" height="1" fill="#2c3e50" />
      <rect x="1" y="3" width="1" height="2" fill="#2c3e50" />
      <rect x="2" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="3" y="6" width="2" height="1" fill="#2c3e50" />
      <rect x="5" y="5" width="1" height="1" fill="#2c3e50" />
      {/* Leaf fill */}
      <rect x="2" y="3" width="4" height="2" fill="#38761d" />
      <rect x="3" y="2" width="2" height="1" fill="#38761d" />
      <rect x="3" y="5" width="2" height="1" fill="#38761d" />
      <rect x="3" y="3" width="1" height="1" fill="#93c47d" />
      <rect x="4" y="4" width="1" height="1" fill="#4a7c2a" />
      {/* Stem connecting leaf to berry */}
      <rect x="6" y="4" width="1" height="2" fill="#4a7c2a" />
      {/* Berry outline - rounded cluster shape */}
      <rect x="7" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="3" width="3" height="1" fill="#2c3e50" />
      <rect x="11" y="4" width="1" height="1" fill="#2c3e50" />
      <rect x="6" y="5" width="1" height="1" fill="#2c3e50" />
      <rect x="12" y="5" width="1" height="2" fill="#2c3e50" />
      <rect x="5" y="6" width="1" height="4" fill="#2c3e50" />
      <rect x="13" y="7" width="1" height="3" fill="#2c3e50" />
      <rect x="6" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="12" y="10" width="1" height="2" fill="#2c3e50" />
      <rect x="7" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="12" width="1" height="1" fill="#2c3e50" />
      <rect x="8" y="13" width="3" height="1" fill="#2c3e50" />
      {/* Berry main red fill */}
      <rect x="7" y="5" width="5" height="7" fill="#cc3333" />
      <rect x="8" y="4" width="3" height="1" fill="#cc3333" />
      <rect x="6" y="6" width="1" height="4" fill="#cc3333" />
      <rect x="12" y="7" width="1" height="3" fill="#cc3333" />
      <rect x="7" y="12" width="4" height="1" fill="#cc3333" />
      <rect x="8" y="13" width="3" height="1" fill="#e74c3c" />
      {/* Drupelet separations - 2x2 cells with dark border, lighter highlights */}
      {/* Top row drupelets */}
      <rect x="8" y="5" width="1" height="1" fill="#e74c3c" />
      <rect x="10" y="5" width="1" height="1" fill="#e74c3c" />
      <rect x="9" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="7" y="6" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="6" width="1" height="1" fill="#2c3e50" />
      {/* Middle row drupelets */}
      <rect x="6" y="7" width="1" height="1" fill="#e74c3c" />
      <rect x="8" y="7" width="1" height="1" fill="#e74c3c" />
      <rect x="10" y="7" width="1" height="1" fill="#e74c3c" />
      <rect x="12" y="7" width="1" height="1" fill="#e74c3c" />
      <rect x="7" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="8" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="8" width="1" height="1" fill="#2c3e50" />
      {/* Lower middle drupelets */}
      <rect x="6" y="9" width="1" height="1" fill="#e74c3c" />
      <rect x="8" y="9" width="1" height="1" fill="#e74c3c" />
      <rect x="10" y="9" width="1" height="1" fill="#e74c3c" />
      <rect x="12" y="9" width="1" height="1" fill="#e74c3c" />
      <rect x="7" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="9" y="10" width="1" height="1" fill="#2c3e50" />
      <rect x="11" y="10" width="1" height="1" fill="#2c3e50" />
      {/* Bottom drupelets */}
      <rect x="8" y="11" width="1" height="1" fill="#e74c3c" />
      <rect x="10" y="11" width="1" height="1" fill="#e74c3c" />
      <rect x="9" y="12" width="1" height="1" fill="#2c3e50" />
    </svg>
  );
}
