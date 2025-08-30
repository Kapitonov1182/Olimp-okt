import * as React from "react";
import { LucideProps } from "lucide-react";

export const VK = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = "currentColor", size = 28, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke={color}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g transform="scale(0.9) translate(1.2,1.2)">
        <path d="M19.9 13c-.4-.5-.3-.7 0-1.1 0 0 3.2-4.4 3.5-5.9.2-.5 0-.9-.8-.9h-2.6c-.7 0-1 .3-1.1.7 0 0-1.3 3.2-3.2 5.3-.6.6-.9.8-1.2.8-.2 0-.4-.2-.4-.7V6.3c0-.7-.2-.9-.7-.9H9.2c-.4 0-.7.3-.7.6 0 .6.9.8 1 2.5v3.8c0 .8-.1 1-.5 1-.9 0-3.1-3.2-4.3-6.9-.3-.7-.5-1-1.2-1H1.8c-.7 0-.9.3-.9.7 0 .7.9 4.1 4.1 8.6 2.2 3.1 5.2 4.7 8 4.7 1.7 0 1.9-.4 1.9-1v-2.3c0-.7.2-.9.7-.9.4 0 1.1.2 2.6 1.7 1.8 1.7 2.1 2.5 3.1 2.5h2.6c.7 0 1.1-.4.9-1.1-.5-1.5-3.9-4.7-4-4.9z" />
      </g>
    </svg>
  )
);

VK.displayName = "VK";

export const RubleSign = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 32, color = "currentColor", ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={color}
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        ₽
      </text>
    </svg>
  )
);

RubleSign.displayName = "RubleSign";
