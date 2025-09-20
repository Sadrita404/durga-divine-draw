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
        {/* Crown - Central flame */}
        <path
          className="draw-path"
          d="M200 20 L185 40 Q200 25 215 40 L200 20 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown - Left flames */}
        <path
          className="draw-path"
          d="M170 30 L160 50 Q170 35 180 50 L170 30 Z M130 40 L120 60 Q130 45 140 60 L130 40 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown - Right flames */}
        <path
          className="draw-path"
          d="M230 30 L220 50 Q230 35 240 50 L230 30 Z M270 40 L260 60 Q270 45 280 60 L270 40 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Crown base with lotus patterns */}
        <path
          className="draw-path"
          d="M120 70 Q140 60 160 65 Q180 55 200 60 Q220 55 240 65 Q260 60 280 70 Q270 80 250 85 Q220 90 200 85 Q180 90 150 85 Q130 80 120 70 Z"
          stroke="hsl(var(--stroke-secondary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Face outline */}
        <path
          className="draw-path"
          d="M150 90 Q145 120 150 150 Q155 200 170 240 Q185 270 200 275 Q215 270 230 240 Q245 200 250 150 Q255 120 250 90 Q240 85 220 85 Q200 80 180 85 Q160 85 150 90 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Left eye */}
        <path
          className="draw-path"
          d="M170 130 Q185 125 195 135 Q185 145 170 140 Q165 135 170 130 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Right eye */}
        <path
          className="draw-path"
          d="M205 135 Q220 125 230 130 Q235 135 230 140 Q215 145 205 135 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Eyebrows */}
        <path
          className="draw-path"
          d="M165 120 Q180 115 195 120 M205 120 Q220 115 235 120"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Nose */}
        <path
          className="draw-path"
          d="M200 150 Q195 165 200 175 Q205 165 200 150 Z"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Nose ring (nath) */}
        <path
          className="draw-path"
          d="M205 170 Q210 175 205 180 Q200 175 205 170"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Lips */}
        <path
          className="draw-path"
          d="M185 200 Q200 210 215 200 Q200 205 185 200"
          stroke="hsl(var(--stroke-primary))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Bindi/forehead ornament */}
        <path
          className="draw-path"
          d="M200 105 Q195 100 200 95 Q205 100 200 105 Z M200 95 L200 90"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Left ear ornament */}
        <path
          className="draw-path"
          d="M140 150 Q130 160 140 170 Q150 160 140 150 Z M130 160 Q125 165 130 170"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Right ear ornament */}
        <path
          className="draw-path"
          d="M260 150 Q270 160 260 170 Q250 160 260 150 Z M270 160 Q275 165 270 170"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Neck ornaments */}
        <path
          className="draw-path"
          d="M170 280 Q200 290 230 280 M175 295 Q200 305 225 295"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Decorative side motifs */}
        <path
          className="draw-path"
          d="M120 200 Q115 210 120 220 Q125 210 120 200 Z M280 200 Q285 210 280 220 Q275 210 280 200 Z"
          stroke="hsl(var(--stroke-secondary))"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* Additional crown details */}
        <path
          className="draw-path"
          d="M160 75 Q165 70 170 75 M180 70 Q185 65 190 70 M210 70 Q215 65 220 70 M230 75 Q235 70 240 75"
          stroke="hsl(var(--stroke-accent))"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default DurgaSVG;