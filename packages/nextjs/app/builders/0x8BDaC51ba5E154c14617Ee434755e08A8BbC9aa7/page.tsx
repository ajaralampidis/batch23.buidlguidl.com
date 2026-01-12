import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import { NextPage } from "next";
import { GithubIcon } from "~~/components/assets/SocialIcons";

const PageOfShrestha: NextPage = () => {
  return (
    <main className="min-h-screen min-w-screen bg-rose-50 dark:bg-slate-900 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-pink-300 dark:bg-pink-900 p-8 ">
        <div className="flex items-center justify-center gap-6 ">
          <Image src="/avatar.png" alt="Shrestha's github pfp" width={96} height={96} className="rounded-full" />

          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white ">SHRESTHA</p>

            <p className="text-sm text-pink-950 dark:text-pink-300">Web3 BUIDLER</p>

            <div className="mt-2 ">
              <Address address="0x8BDaC51ba5E154c14617Ee434755e08A8BbC9aa7" size="sm" />
            </div>
          </div>
        </div>

        <div className="mt-6 text-pink-950 dark:text-pink-300">
          <p>
            Aspiring Blockchain Dev focused on Solidity and Foundry, building and learning through hands-on
            experimentation. Currently Learning about Rust and Solana.
          </p>
        </div>

        <hr className="mt-2 dark:border-slate-900"></hr>

        <div>
          <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">Tech Stack</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {[
              "Solidity",
              "JavaScript",
              "Foundry",
              "EVM",
              "C",
              "C++",
              "Python",
              "Rust (Learning)",
              "SVM (Learning)",
            ].map(tech => (
              <li
                key={tech}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs text-purple-700 dark:bg-purple-900/30 dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-100">Interests</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {["DeFi", "Smart Contract Auditing"].map(interest => (
              <li
                key={interest}
                className="rounded-md bg-purple-50 px-2 py-1 text-xs text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <hr className="dark:border-slate-900"></hr>

        <div className="mt-6 flex gap-4 justify-center items-center">
          <Link
            href="https://github.com/shrestha-das"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black dark:border-white px-4 py-2 text-sm font-medium text-black dark:text-white hover:bg-pink-700 dark:hover:bg-pink-300 hover:text-white dark:hover:text-black"
          >
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageOfShrestha;
