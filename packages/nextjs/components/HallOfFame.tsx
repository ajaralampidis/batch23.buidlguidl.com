"use client";

import { useEffect, useState } from "react";
import { Confetti } from "./Confetti";
import { GraduateCard, JoinBatchCard, SkeletonCard } from "./GraduateCard";
import { useReadContracts } from "wagmi";
import { useDeployedContractInfo, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import styles from "~~/styles/HallOfFame.module.css";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const BLOCKS_BATCH_SIZE = 100_000_000;

export const HallOfFame = () => {
  const { data: batchGraduationNFT, isLoading: isContractLoading } = useDeployedContractInfo("BatchGraduationNFT");

  const {
    data: transferEvents,
    isLoading: isEventsLoading,
    isFetchingNewEvent,
  } = useScaffoldEventHistory({
    contractName: "BatchGraduationNFT",
    eventName: "Transfer",
    filters: { from: ZERO_ADDRESS },
    enabled: !!batchGraduationNFT,
    blocksBatchSize: BLOCKS_BATCH_SIZE,
  });

  const sortedEvents = transferEvents?.slice().sort((a, b) => Number(a.blockNumber - b.blockNumber));

  const contracts = sortedEvents?.map(event => ({
    address: batchGraduationNFT?.address,
    abi: batchGraduationNFT?.abi,
    functionName: "tokenURI",
    args: [event.args.tokenId],
  }));

  const { data: tokenURIs, isLoading: isTokenURIsLoading } = useReadContracts({
    contracts,
  });

  const isLoading = isContractLoading || isEventsLoading || isFetchingNewEvent || isTokenURIsLoading || !transferEvents;

  const [revealedCount, setRevealedCount] = useState(0);
  const totalGraduates = sortedEvents?.length || 0;
  const revealed = revealedCount === totalGraduates;

  useEffect(() => {
    if (revealed && totalGraduates > 0) {
      const element = document.getElementById("join-batch-card");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      const element = document.getElementById(`graduate-card-${revealedCount}`);
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [revealedCount, revealed, totalGraduates]);

  const handleCardLoaded = () => {
    setRevealedCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4 text-center">🏆 Hall of Fame 🏆</h2>
      <div className="sticky top-14 lg:top-0 z-10 w-full mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-base-200 via-base-200/80 to-transparent pointer-events-none" />
        <div className="relative text-xl font-medium flex gap-2 items-baseline justify-center py-4">
          <span className="font-mono text-2xl font-bold text-accent">
            {Math.min(revealedCount + 1, totalGraduates)}
          </span>
          Builders Graduated
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full mb-20">
        {sortedEvents?.map((event, index) => {
          if (index > revealedCount) return null;
          return (
            <div
              id={`graduate-card-${index}`}
              key={`${event.transactionHash}-${event.logIndex}`}
              className={`flex justify-center w-full sm:w-72 ${styles.animateFadeIn}`}
            >
              <Confetti trigger={revealedCount === index} />
              <GraduateCard
                event={event}
                tokenURI={tokenURIs?.[index]?.result as string | undefined}
                onLoaded={index === revealedCount ? handleCardLoaded : undefined}
              />
            </div>
          );
        })}

        <div id="join-batch-card" className={`flex justify-center w-full sm:w-72 ${styles.animateFadeIn}`}>
          {isLoading || !revealed ? <SkeletonCard /> : <JoinBatchCard />}
        </div>
      </div>
    </div>
  );
};
