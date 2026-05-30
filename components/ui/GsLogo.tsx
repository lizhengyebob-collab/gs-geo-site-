import Image from "next/image";

interface GsLogoProps {
  size?: number;
  className?: string;
}

/**
 * GS GEO logo — tries the PNG first, falls back to the inline SVG mark.
 * Place the original PNG at public/gs-logo.png to use the real logo.
 */
export function GsLogoMark({ size = 36, className = "" }: GsLogoProps) {
  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/gs-logo.png"
        alt="GS GEO Logo"
        width={size}
        height={size}
        className="object-contain"
        onError={(e) => {
          /* hide broken img so the SVG fallback shows */
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
        priority
      />
      {/* Inline SVG fallback — geometric double-line GS badge */}
      <span
        className="absolute inset-0 items-center justify-center"
        style={{ display: "none" }}
        aria-hidden
      >
        <GsLogoSvg size={size} />
      </span>
    </div>
  );
}

export function GsLogoSvg({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer octagon (chamfered corners) */}
      <path
        d="M11 1 H29 L39 11 V29 L29 39 H11 L1 29 V11 Z"
        stroke="white"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Inner octagon — double-line effect */}
      <path
        d="M13 4 H27 L36 13 V27 L27 36 H13 L4 27 V13 Z"
        stroke="white"
        strokeWidth="0.7"
        fill="none"
        opacity="0.45"
      />
      {/* GS monogram */}
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fill="white"
        fontWeight="800"
        fontSize="15"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        GS
      </text>
    </svg>
  );
}
