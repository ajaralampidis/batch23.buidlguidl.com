"use client";

import Image from "next/image";
import { Address, Balance } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { Address as AddressType } from "viem";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const GithubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const builderData = {
  name: "Asir Shahriar Roudra",
  country: "Dhaka, Bangladesh",
  profileImage: "/builders/0xA1F881691f1C687E23DAe139C4Ec243480420EDD.jpg",
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

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="badge badge-outline badge-sm hover:badge-primary transition-colors cursor-default">{tech}</span>
);
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
