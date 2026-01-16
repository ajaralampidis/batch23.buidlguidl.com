"use client";

import { useEffect, useRef, useState } from "react";
import { Confetti } from "./Confetti";
import { GraduateCard, JoinBatchCard, SkeletonCard } from "./GraduateCard";
import { useGraduateData } from "~~/hooks/useGraduateData";
import styles from "~~/styles/HallOfFame.module.css";

const ANIMATION_DELAY_MS = 1000;

interface RecursiveGraduateLoaderProps {
  tokenId: number;
  onLoaded: () => void;
}

export const RecursiveGraduateLoader = ({ tokenId, onLoaded }: RecursiveGraduateLoaderProps) => {
  const [showNext, setShowNext] = useState(false);
  const { owner, tokenURI, isFinished, isValid, isLoading } = useGraduateData(tokenId);
  const hasLoaded = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  useEffect(() => {
    if (!isValid) return;

    if (!hasLoaded.current) {
      hasLoaded.current = true;
      onLoaded();
    }

    const timer = setTimeout(() => setShowNext(true), ANIMATION_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isValid, onLoaded]);

  if (isFinished) {
    return (
      <div id="join-batch-card" className={`flex justify-center w-full sm:w-72 ${styles.animateFadeIn}`}>
        <JoinBatchCard />
      </div>
    );
  }

  const cardContent = isLoading ? (
    <SkeletonCard />
  ) : (
    <>
      <Confetti trigger={true} />
      <GraduateCard owner={owner as string} tokenURI={tokenURI} />
    </>
  );

  return (
    <>
      <div ref={cardRef} className={`flex justify-center w-full sm:w-72 ${styles.animateFadeIn}`}>
        {cardContent}
      </div>
      {showNext && <RecursiveGraduateLoader tokenId={tokenId + 1} onLoaded={onLoaded} />}
    </>
  );
};
