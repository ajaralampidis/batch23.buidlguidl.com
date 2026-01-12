"use client";

import { useQuery } from "@tanstack/react-query";
import { createPublicClient, http, parseAbi } from "viem";
import { base } from "viem/chains";

const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

const TALENT_BUILDER_SCORE_ADDRESS = "0xBBFeDA7c4d8d9Df752542b03CdD715F790B32D0B";
const TALENT_BUILDER_SCORE_ABI = parseAbi(["function getScoreByAddress(address wallet) view returns (uint256)"]);

export const useTalentBuilderScore = (address: string) => {
  return useQuery({
    queryKey: ["talentBuilderScore", address],
    queryFn: async () => {
      return publicClient.readContract({
        address: TALENT_BUILDER_SCORE_ADDRESS,
        abi: TALENT_BUILDER_SCORE_ABI,
        functionName: "getScoreByAddress",
        args: [address],
      });
    },
    enabled: !!address,
    staleTime: Infinity,
    retry: false,
  });
};
