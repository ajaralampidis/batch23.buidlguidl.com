import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import { NextPage } from "next";

const BituzinPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col pt-6 sm:pt-10 px-2 sm:px-5 min-h-screen bg-base-100 text-gray-800 dark:text-gray-200">
      <div className="w-full max-w-md sm:max-w-xl border border-gray-600 shadow-[4px_4px_0_#666] bg-[#c0c0c0] dark:bg-[#1a1a1a] rounded-sm font-[Tahoma,Geneva,Verdana,sans-serif] mx-auto">
        <div className="flex items-center justify-between bg-gradient-to-r from-[#0066cc] to-[#004499] dark:from-[#1e3a8a] dark:to-[#1e40af] text-white px-3 py-1 border-b border-gray-600 rounded-t-sm">
          <span className="font-bold text-xs tracking-wide">bituzin.exe</span>
          <span className="text-xs font-bold font-mono">[X]</span>
        </div>

        <div className="p-4 sm:p-8">
          <div className="text-center mb-8">
            <Image
              src="/bituzin_profile.webp"
              alt="Bituzin"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
              priority={true}
            />
            <h1 className="text-4xl font-bold mb-2">I&apos;m bituzin</h1>
            <div className="inline-block px-4 py-1 rounded font-semibold text-base mb-2 bg-[#d0d0d0] dark:bg-[#2a2a2a] text-[#0066cc] dark:text-[#60a5fa] border border-gray-600">
              Promising web3 builder & open source fan
            </div>
          </div>

          <div className="mb-6 leading-relaxed">
            <p className="mb-3">
              Hey builders! I&apos;m trying to join your crew – hope we can build something cool on Ethereum together!
              🚀
            </p>
            <p>
              After hours, I click around in Remix, hunt bugs, sometimes deploy, and sometimes just pretend I know what
              I&apos;m doing. If you want to chat or code together – just ping me!
            </p>
          </div>

          <div className="mb-6 max-w-md mx-auto border border-gray-600 bg-[#d8d8d8] dark:bg-[#252525] rounded-sm p-4">
            <div className="mb-2 text-sm text-center text-gray-700 dark:text-gray-300">
              This is my address (if you want to send me some ETH)
            </div>
            <div className="flex justify-center mb-2">
              <Address address="0x1495d3a454eB1301a0b4530176099456639ef110" />
            </div>
            <div className="text-center text-xs mt-3 pt-2 border-t border-gray-500 text-gray-600 dark:text-gray-400">
              * Every donation is welcome – even a test one! I promise not to spend it all on gas... probably. 😉
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com/bituzin" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GitHub
            </a>
            <a
              href="https://twitter.com/bituzin2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Twitter
            </a>
            <a href="mailto:bituzin2@gmail.com" className="btn btn-primary">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BituzinPage;
