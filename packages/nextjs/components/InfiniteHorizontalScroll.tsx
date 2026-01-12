import { CSSProperties, ReactNode } from "react";

type InfiniteHorizontalScrollProps = {
  children: ReactNode | ReactNode[];
  duration?: string; // e.g. '6000s', '10s'
  timing?: string; // e.g. 'linear', 'ease-in-out'
  iteration?: string; // e.g. 'infinite', '1'
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  delay?: string;
  className?: string;
  style?: CSSProperties;
};

export const InfiniteHorizontalScroll = ({
  children,
  duration = "300s",
  timing = "linear",
  iteration = "infinite",
  direction = "normal",
  delay = "0s",
  className = "",
  style = {},
}: InfiniteHorizontalScrollProps) => {
  const cssVars: CSSProperties = {
    "--animate-marquee-duration": duration,
    "--animate-marquee-timing": timing,
    "--animate-marquee-iteration": iteration,
    "--animate-marquee-direction": direction,
    "--animate-marquee-delay": delay,
  } as CSSProperties;

  return (
    <div className={`w-full relative flex overflow-x-hidden ${className}`} style={{ ...cssVars, ...style }}>
      <div className="animate-marquee whitespace-nowrap">{children}</div>
      <div className="animate-marquee whitespace-nowrap" aria-hidden="true">
        {children}
      </div>
    </div>
  );
};
