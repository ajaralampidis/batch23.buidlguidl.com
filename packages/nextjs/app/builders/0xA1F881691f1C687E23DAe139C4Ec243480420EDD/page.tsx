import Image from "next/image";
import { Address, Balance } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { Address as AddressType } from "viem";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { TechBadge } from "~~/components/TechBadge";
import { GithubIcon, LinkedInIcon } from "~~/components/assets/SocialIcons";

const builderData = {
  name: "Asir Shahriar Roudra",
  country: "Dhaka, Bangladesh",
  profileImage: "/builders/0xA1F881691f1C687E23DAe139C4Ec243480420EDD.webp",
  github: "https://github.com/roudra323",
  linkedin: "https://linkedin.com/in/roudra323",
  email: "asirroudra@gmail.com",
  bio: "Passionate blockchain developer building the future of decentralized applications. Always learning and contributing to the Ethereum ecosystem.",
  techStack: {
    "Blockchain & Web3": [
      "Solidity",
      "Hardhat",
      "Foundry",
      "Ethers.js",
      "Wagmi",
      "Viem",
      "RainbowKit",
      "OpenZeppelin",
      "Chainlink",
      "ERC Standards",
      "DeFi Protocols",
      "ZK-SNARKs",
    ],
    Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Microservices"],
    "Database & Storage": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "IPFS/Pinata", "The Graph"],
    "DevOps & Tools": ["Git", "Docker", "CI/CD", "Vercel", "Linux"],
    Languages: ["TypeScript", "JavaScript", "Python", "Golang", "Java", "C/C++"],
  },
};

const address = "0xA1F881691f1C687E23DAe139C4Ec243480420EDD" as AddressType;

const Roudra323Page: NextPage = () => {
  return (
    <div className="flex items-center flex-col grow pt-10 pb-8">
      <div className="px-5 w-full max-w-4xl">
        {/* Profile Card */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={builderData.profileImage}
                  alt={builderData.name}
                  fill
                  className="rounded-full object-cover border-4 border-base-100 shadow-lg"
                />
              </div>
              <h1 className="text-3xl font-bold">{builderData.name}</h1>
              {builderData.country && (
                <div className="flex items-center gap-1 mt-2 text-base-content/70">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{builderData.country}</span>
                </div>
              )}
              {/* Social Links - Compact in header */}
              <div className="flex gap-3 mt-4">
                {builderData.github && (
                  <a
                    href={builderData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                    title="GitHub"
                  >
                    <GithubIcon />
                  </a>
                )}
                {builderData.linkedin && (
                  <a
                    href={builderData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                    title="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {builderData.email && (
                  <a
                    href={`mailto:${builderData.email}`}
                    className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
                    title="Email"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 lg:px-8 py-6 space-y-6">
            {/* About Section */}
            <div>
              <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-3">About</h3>
              <p className="text-base-content/80 leading-relaxed">{builderData.bio}</p>
            </div>

            {/* Wallet Section */}
            <div className="bg-base-200/50 rounded-2xl p-4">
              <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-3">Wallet</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <Address address={address} format="long" onlyEnsOrAddress />
                <div className="flex items-center gap-2 bg-base-100 px-3 py-1.5 rounded-lg">
                  <span className="text-sm text-base-content/60">Balance:</span>
                  <Balance address={address} />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider my-2"></div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-4">Tech Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(builderData.techStack).map(([category, technologies]) => (
                  <div key={category} className="bg-base-200/30 rounded-xl p-4">
                    <h4 className="font-semibold text-sm mb-3 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map(tech => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roudra323Page;
