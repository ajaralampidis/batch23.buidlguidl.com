import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import styles from "~~/styles/HallOfFame.module.css";

const CARD_BASE_CLASS = "card w-full bg-base-100 shadow-xl border border-base-300 h-96";
const IPFS_GATEWAY = "https://ipfs.io/ipfs/";
const REVEAL_DELAY_MS = 1000;
const FALLBACK_TIMEOUT_MS = 5000;
const IMAGE_SIZE = 224;

const toHttpUrl = (uri: string) => uri.replace("ipfs://", IPFS_GATEWAY);

export const SkeletonCard = () => (
  <div className={`${CARD_BASE_CLASS}`}>
    <div className="px-4 pt-4 flex justify-center">
      <div className="w-56 h-56 bg-base-200 rounded-full flex items-center justify-center">
        <span className="loading loading-spinner w-16 h-16 text-base-content/30"></span>
      </div>
    </div>
    <div className="card-body items-center text-center">
      <div className="h-6 w-40 bg-base-200 rounded mt-2 animate-pulse"></div>
      <div className="h-8 w-28 bg-base-200 rounded-full mt-4 animate-pulse"></div>
    </div>
  </div>
);

export const JoinBatchCard = () => (
  <a
    href="https://buidlguidl.com/batches"
    target="_blank"
    rel="noopener noreferrer"
    className={`${CARD_BASE_CLASS} hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col items-center p-0 group cursor-pointer`}
  >
    <div className="px-4 pt-4 w-full flex justify-center mb-6">
      <div className="w-56 h-56 rounded-full bg-base-200 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-content transition-colors">
        <svg
          className="w-16 h-16 text-base-content/40 group-hover:text-accent-content"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    </div>

    <div className="card-body items-center text-center p-0 mt-0">
      <h2 className="text-xl">Find yourself here!</h2>
      <h3 className="text-xl font-bold">Join Next Batch</h3>
    </div>
  </a>
);

export const GraduateCard = ({
  event,
  tokenURI,
  onLoaded,
}: {
  event: any;
  tokenURI?: string;
  onLoaded?: () => void;
}) => {
  const [metadata, setMetadata] = useState<{ image?: string; name?: string } | null>(null);
  const [isReady, setIsReady] = useState(false);
  const onLoadedCalled = useRef(false);

  const matchLoaded = useCallback(() => {
    if (!onLoadedCalled.current) {
      onLoadedCalled.current = true;
      onLoaded?.();
    }
  }, [onLoaded]);

  useEffect(() => {
    let mounted = true;

    const fetchAndPreload = async () => {
      if (!tokenURI) {
        if (mounted) {
          setIsReady(true);
          setTimeout(matchLoaded, REVEAL_DELAY_MS);
        }
        return;
      }

      try {
        const json = await (await fetch(toHttpUrl(tokenURI))).json();
        if (!mounted) return;
        setMetadata(json);

        if (json?.image) {
          const img = new globalThis.Image();
          img.src = toHttpUrl(json.image);
          await new Promise(resolve => {
            img.onload = img.onerror = resolve;
          });
        }
      } catch (e) {
        console.error("Error fetching metadata:", e);
      }

      if (mounted) {
        setIsReady(true);
        setTimeout(matchLoaded, REVEAL_DELAY_MS);
      }
    };

    const timeout = setTimeout(() => {
      if (mounted) {
        setIsReady(true);
        matchLoaded();
      }
    }, FALLBACK_TIMEOUT_MS);

    fetchAndPreload();

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, [tokenURI, matchLoaded]);

  if (!isReady && !metadata) return <SkeletonCard />;

  return (
    <div className={`${CARD_BASE_CLASS} hover:shadow-2xl transition-all duration-200 ${styles.animateFadeIn}`}>
      <figure className="px-4 pt-4 flex justify-center">
        {metadata?.image ? (
          <Image
            src={toHttpUrl(metadata.image)}
            className="rounded-full object-cover"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            alt="Graduate NFT"
          />
        ) : (
          <div className="w-56 h-56 bg-base-200 rounded-full flex items-center justify-center animate-pulse"></div>
        )}
      </figure>
      <div className="card-body items-center text-center">
        <div className="mt-2">
          <Address address={event.args.to} />
        </div>
        <div className="card-actions mt-4">
          <Link href={`/builders/${event.args.to}`} className="btn btn-sm btn-outline btn-accent">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
