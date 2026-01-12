"use client";

import React, { CSSProperties, ReactElement, useEffect, useRef, useState } from "react";

interface RepeaterProps {
  containerClasses?: string;
  containerStyle?: CSSProperties;
  children: ReactElement;
}

const Repeater: React.FC<RepeaterProps> = ({ containerClasses = "", containerStyle, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [repeatCount, setRepeatCount] = useState(0);
  const [childHeight, setChildHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
        console.log("containerRef.current.clientHeight", containerRef.current.clientHeight);
      }
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.clientHeight);
    }
  }, [children]);

  useEffect(() => {
    if (childHeight > 0 && containerHeight > 0) {
      setRepeatCount(Math.ceil(containerHeight / childHeight));
    }
  }, [childHeight, containerHeight]);
  return (
    <div ref={containerRef} className={containerClasses} style={containerStyle}>
      {/* Hidden child for measuring */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          height: "auto",
          overflow: "visible",
          whiteSpace: "nowrap",
        }}
      >
        <div ref={childRef}>{children}</div>
      </div>

      {/* Render repeated children */}
      {Array.from({ length: repeatCount }).map((_, idx) => React.cloneElement(children, { key: idx }))}
    </div>
  );
};

export default Repeater;
