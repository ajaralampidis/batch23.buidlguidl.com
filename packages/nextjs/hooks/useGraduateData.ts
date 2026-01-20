import { useDeployedContractInfo, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const useGraduateData = (tokenId: number) => {
  const { isLoading: isContractLoading } = useDeployedContractInfo("BatchGraduationNFT");

  const {
    data: owner,
    isError: isOwnerError,
    isLoading: isOwnerLoading,
  } = useScaffoldReadContract({
    contractName: "BatchGraduationNFT",
    functionName: "ownerOf",
    args: [BigInt(tokenId)],
    query: {
      retry: false,
    },
  });

  const { data: tokenURI } = useScaffoldReadContract({
    contractName: "BatchGraduationNFT",
    functionName: "tokenURI",
    args: [BigInt(tokenId)],
    query: {
      enabled: !!owner,
    },
  });

  const isReady = !isContractLoading && !isOwnerLoading;
  const isFinished = isReady && (isOwnerError || !owner);
  const isValid = isReady && !!owner;

  return {
    owner,
    tokenURI,
    isFinished,
    isValid,
    isLoading: !isReady,
  };
};
