import React from 'react';

const DurgaSVG = () => {
  return (
    <div className="durga-svg-container festive-gradient-bg">
      <svg
        className="svg-glow"
        width="400"
        height="500"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central third eye/bindi - teardrop shape */}
        <path
          className="draw-path"
          d="M200 60 Q190 70 200 85 Q210 70 200 60 Z"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Inner circle of third eye */}
        <circle
          className="draw-path"
          cx="200"
          cy="72"
          r="6"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown - Central pointed element */}
        <path
          className="draw-path"
          d="M200 30 L190 55 Q200 45 210 55 L200 30 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown - Left wing element */}
        <path
          className="draw-path"
          d="M150 45 Q160 35 180 45 Q170 55 155 60 Q145 55 150 45 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown - Right wing element */}
        <path
          className="draw-path"
          d="M250 45 Q240 35 220 45 Q230 55 245 60 Q255 55 250 45 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Face outline - more oval and geometric */}
        <path
          className="draw-path"
          d="M160 90 Q155 130 160 170 Q165 220 180 260 Q190 280 200 285 Q210 280 220 260 Q235 220 240 170 Q245 130 240 90 Q220 85 200 85 Q180 85 160 90 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Left eye - almond shape with red outline */}
        <path
          className="draw-path"
          d="M165 130 Q155 135 160 145 Q170 155 185 150 Q195 145 190 135 Q180 125 165 130 Z"
          stroke="hsl(0 85% 60%)"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Left eye pupil */}
        <circle
          className="draw-path"
          cx="177"
          cy="140"
          r="4"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Right eye - almond shape with red outline */}
        <path
          className="draw-path"
          d="M235 130 Q245 135 240 145 Q230 155 215 150 Q205 145 210 135 Q220 125 235 130 Z"
          stroke="hsl(0 85% 60%)"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Right eye pupil */}
        <circle
          className="draw-path"
          cx="223"
          cy="140"
          r="4"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Eyebrows - more geometric */}
        <path
          className="draw-path"
          d="M160 120 Q175 115 190 118 M210 118 Q225 115 240 120"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Nose - simplified geometric shape */}
        <path
          className="draw-path"
          d="M200 165 L195 185 Q200 190 205 185 L200 165 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Nose ring (nath) - more prominent */}
        <circle
          className="draw-path"
          cx="208"
          cy="185"
          r="5"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Lips - red color like in reference */}
        <path
          className="draw-path"
          d="M185 215 Q200 225 215 215 Q205 220 200 222 Q195 220 185 215"
          stroke="hsl(0 85% 60%)"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Chin detail */}
        <path
          className="draw-path"
          d="M200 250 Q195 255 200 260 Q205 255 200 250"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Crown decorative elements */}
        <path
          className="draw-path"
          d="M170 65 Q175 60 180 65 M220 65 Q225 60 230 65"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Side decorative elements - simplified */}
        <path
          className="draw-path"
          d="M140 160 Q135 165 140 170 Q145 165 140 160 M260 160 Q265 165 260 170 Q255 165 260 160"
          stroke="hsl(var(--stroke-secondary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Additional eye details - eyelashes/lining */}
        <path
          className="draw-path"
          d="M160 135 Q170 130 185 135 M215 135 Q230 130 240 135"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Crown base line */}
        <path
          className="draw-path"
          d="M140 75 Q160 70 180 75 Q200 70 220 75 Q240 70 260 75"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default DurgaSVG;