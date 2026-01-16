"use client";

import { useEffect, useState } from "react";
import styles from "~~/styles/HallOfFame.module.css";

const CONFIG = {
  colors: ["#6366f1", "#22c55e", "#f59e0b", "#ec4899", "#3b82f6", "#8b5cf6"],
  pieceCount: 30,
  maxDelay: 0.3,
  duration: { min: 1, maxExtra: 1 },
  size: { min: 6, maxExtra: 6 },
  cleanupDelayMs: 2500,
};

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  shape: "circle" | "square";
}

export const Confetti = ({ trigger }: { trigger: boolean }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!trigger) return;

    const newPieces: ConfettiPiece[] = Array.from({ length: CONFIG.pieceCount }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
      delay: Math.random() * CONFIG.maxDelay,
      duration: CONFIG.duration.min + Math.random() * CONFIG.duration.maxExtra,
      size: CONFIG.size.min + Math.random() * CONFIG.size.maxExtra,
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));

    setPieces(newPieces);

    const timeout = setTimeout(() => {
      setPieces([]);
    }, CONFIG.cleanupDelayMs);

    return () => clearTimeout(timeout);
  }, [trigger]);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className={`absolute ${styles.animateConfetti}`}
          style={{
            left: `${piece.x}%`,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: piece.shape === "circle" ? "50%" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
