"use client";

import { useCallback, useState } from "react";
import { RecursiveGraduateLoader } from "./RecursiveGraduateLoader";

const START_TOKEN_ID = 1;

export const HallOfFame = () => {
  const [totalLoaded, setTotalLoaded] = useState(0);

  const handleCardLoaded = useCallback(() => {
    setTotalLoaded(prev => prev + 1);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 w-full max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">🏆 Hall of Fame 🏆</h2>
      <div className="sticky top-14 lg:top-0 z-10 w-full mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-base-200 via-base-200/80 to-transparent pointer-events-none" />
        <div className="relative text-xl font-medium flex gap-2 items-baseline justify-center py-4">
          <span className="font-mono text-2xl font-bold text-accent">{Math.max(0, totalLoaded)}</span>
          Builders Graduated
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full mb-20">
        <RecursiveGraduateLoader tokenId={START_TOKEN_ID} onLoaded={handleCardLoaded} />
      </div>
    </div>
  );
};
