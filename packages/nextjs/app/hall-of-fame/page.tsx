import { NextPage } from "next";
import { HallOfFame } from "~~/components/HallOfFame";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Hall of Fame",
  description: "Celebrate the graduates of Batch 23",
});

const HallOfFamePage: NextPage = async () => {
  return <HallOfFame />;
};

export default HallOfFamePage;
