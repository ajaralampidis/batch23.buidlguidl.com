import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const Devdanny: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-8">
          <span className="block text-4xl font-bold">Builder Profile</span>
        </h1>

        <div className="bg-base-100 border-base-300 border shadow-md rounded-3xl p-8 max-w-xl w-full flex flex-col items-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image src="/builders/devdanny.jpg" width={400} height={400} alt="devdanny-avatar" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">Dev Danny</h2>

          <div className="mb-4">
            <Address address="0x2A5F12879DFC3897c827643F0a6fDdCb10E88fEa" />
          </div>

          <p className="text-center text-lg italic text-base-content/80">
            &quot;Full-stack explorer and BuidlGuidl Batch #23 member. Passionate about Software Engineering,
            Blockchain, smart contract security, and clean UI.&quot;
          </p>

          <div className="divider">Links</div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/Verifieddanny"
              target="_blank"
              rel="noreferrer noreferrer"
              className="btn btn-primary btn-sm rounded-full"
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/dannyclassi_c"
              target="_blank"
              rel="noreferrer noreferrer"
              className="btn btn-secondary btn-sm rounded-full"
            >
              Twitter
            </Link>
            <Link
              href="https://speedrunethereum.com/builders/0x2A5F12879DFC3897c827643F0a6fDdCb10E88fEa"
              target="_blank"
              rel="noreferrer noreferrer"
              className="btn btn-accent btn-sm rounded-full"
            >
              BuidlGuidl
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devdanny;
