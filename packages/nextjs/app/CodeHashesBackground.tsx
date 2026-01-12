import GET_BUILDERS_PLACEHOLDER from "./GET_BUILDERS_PLACEHOLDER";
import { InfiniteHorizontalScroll } from "~~/components/InfiniteHorizontalScroll";
import Repeater from "~~/components/Repeater";

async function getBuilders(): Promise<{ address: string; checkInTxHash: string; checkInContract: string }[]> {
  return GET_BUILDERS_PLACEHOLDER.data.builders.map(builder => {
    return {
      address: builder.address,
      checkInTxHash: builder.checkIns[0].transactionHash,
      checkInContract: builder.checkIns[0].checkInContract,
    };
  });
}

export const CodeHashesBackground = async () => {
  const builders: any[] = await getBuilders();
  return (
    <div className="absolute r-0 l-0 w-full h-full b-0 t-0 dark:bg-gray-950 bg-gray-300 overflow-hidden -z-10">
      <Repeater
        containerClasses="absolute r-0 l-0 w-full h-full b-0 t-0 dark:bg-gray-950 bg-gray-300 overflow-hidden"
        containerStyle={{
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)",
        }}
      >
        <div
          className={`dark:text-green-900/50 text-green-100/75 font-mono ${builders.length ? "animate-fade-in-home" : ""}`}
        >
          {builders.map((builder, index) => {
            const text = `Builder:${builder.address} checkIn hash:${builder.checkInTxHash} contract:${builder.checkInContract}`;
            return (
              <InfiniteHorizontalScroll
                key={builder.address}
                delay={`-${Math.random() * 100}s`}
                direction={index % 2 === 0 ? "normal" : "reverse"}
              >
                <div className="whitespace-nowrap select-none pointer-events-none flex items-center leading-tight">
                  <span className="pl-2">
                    {/* Repeating text so that covers full-width for very big screens */}
                    {text} {text} {text} {text} {text}
                  </span>
                </div>
              </InfiniteHorizontalScroll>
            );
          })}
        </div>
      </Repeater>
      <div className="relative h-full w-full bg-transparent">
        <div className="w-full h-32 bg-gradient-to-t from-green-600/45 dark:from-green-600/70 blur-3xl via-transparent to-transparent opacity-40 animate-gradient-up pointer-events-none" />
      </div>
    </div>
  );
};
