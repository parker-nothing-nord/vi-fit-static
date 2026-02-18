export default function ViLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun rays - top half and sides */}
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {/* Top center ray */}
        <line x1="100" y1="20" x2="100" y2="35" />
        {/* Top right rays */}
        <line x1="145" y1="30" x2="135" y2="42" />
        <line x1="170" y1="55" x2="158" y2="65" />
        {/* Right side ray */}
        <line x1="180" y1="100" x2="165" y2="100" />
        {/* Top left rays */}
        <line x1="30" y1="55" x2="42" y2="65" />
        <line x1="55" y1="30" x2="65" y2="42" />
        {/* Left side ray */}
        <line x1="20" y1="100" x2="35" y2="100" />
      </g>

      {/* Circle */}
      <circle
        cx="100"
        cy="100"
        r="45"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Vi text */}
      <text
        x="100"
        y="115"
        fontSize="48"
        fontWeight="400"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="serif"
      >
        vi
      </text>
    </svg>
  );
}

