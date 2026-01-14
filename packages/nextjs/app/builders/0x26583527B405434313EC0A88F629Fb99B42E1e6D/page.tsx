"use client";

// --- MateoDi9z profile page ---
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

// Social Icons Components
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Replace with your actual wallet address
const BUILDER_ADDRESS = "0x26583527B405434313EC0A88F629Fb99B42E1e6D";

// Personal info placeholders - replace with your actual info
const PROFILE_DATA = {
  name: "Mateo J. Diaz",
  title: "Computer Science Student",
  bio: "Passionate builder exploring the intersection of technology and innovation. Currently speedrunning Ethereum and building the future of decentralized applications.",
  location: "🇦🇷 Argentina",
  status: "🚀 Building in Web3",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/MateoDi9z", icon: GitHubIcon, color: "hover:bg-gray-800" },
    { name: "X", url: "https://x.com/MateDi9z", icon: XIcon, color: "hover:bg-black" },
    { name: "LinkedIn", url: "https://linkedin.com/in/mateojdiaz", icon: LinkedInIcon, color: "hover:bg-blue-600" },
  ],
};

const ProfilePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Matrix-style background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="absolute top-4 right-4 text-green-400/30 text-xs animate-pulse">{">"} SYSTEM_ONLINE</div>
        <div className="absolute bottom-4 left-4 text-green-400/30 text-xs">{"$"} dev@web3:~</div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen py-10 px-5">
        <div className="w-full max-w-4xl">
          {/* Terminal-style Profile Card */}
          <div className="group relative">
            {/* Terminal window */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">mateo_profile.tsx</div>
                <div className="text-gray-500 text-xs">●</div>
              </div>

              {/* Terminal content */}
              <div className="bg-black p-6 text-green-400">
                {/* Terminal prompt style header */}
                <div className="mb-6">
                  <div className="text-left mb-4">
                    <span className="text-blue-400 mr-2">const</span>
                    <span className="text-yellow-400">developer</span> ={"{"} <br />
                    <span className="ml-4 text-gray-400">name:</span>{" "}
                    <span className="text-green-300">&quot;{PROFILE_DATA.name}&quot;</span>,
                    <br />
                    <span className="ml-4 text-gray-400">role:</span>{" "}
                    <span className="text-green-300">&quot;{PROFILE_DATA.title}&quot;</span>,
                    <br />
                    <span className="ml-4 text-gray-400">location:</span>{" "}
                    <span className="text-green-300">&quot;{PROFILE_DATA.location}&quot;</span>,
                    <br />
                    <span className="ml-4 text-gray-400">status:</span>{" "}
                    <span className="text-green-300">&quot;{PROFILE_DATA.status}&quot;</span>,
                    <br />
                    <span className="ml-4 text-gray-400">passion:</span>{" "}
                    <span className="text-green-300">&quot;Building Web3 dApps&quot;</span>
                    <br />
                    {"}"} <br />
                  </div>

                  {/* ASCII Art Avatar */}
                  <div className="text-center mb-4">
                    <div className="inline-block text-lg text-cyan-400 leading-tight">
                      {"    ╭─────────╮"} <br />
                      {"│"} <span className="px-6">{"◕   ◕"}</span> {"│"} <br />
                      {"│"} <span className="px-8">{"∪"}</span> {"│"} <br />
                      {"╰─────────╯"}
                      <br />
                      <span className="text-green-400 text-sm">
                        {"//"} {PROFILE_DATA.name.split(" ")[0]} - Web3 Dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terminal command style wallet */}
                <div className="mb-6">
                  <div className="text-left">
                    <span className="text-gray-500">$ </span>
                    <span className="text-blue-400">web3.eth.getAccount</span>()
                    <br />
                    <span className="text-yellow-400">→</span> <Address address={BUILDER_ADDRESS} format="short" />
                    <span className="ml-2 text-green-400 animate-pulse">●</span>
                    <span className="text-green-400 text-sm ml-1">CONNECTED</span>
                  </div>
                </div>

                {/* Code comment style bio */}
                <div className="mb-6">
                  <div className="text-left">
                    <span className="text-gray-500">{"/*"}</span>
                    <br />
                    <span className="text-gray-400"> * About: {PROFILE_DATA.bio}</span>
                    <br />
                    <span className="text-gray-400"> * Currently: Speedrunning Ethereum & Building dApps</span>
                    <br />
                    <span className="text-gray-400"> * Learning: ScaffoldETH</span>
                    <br />
                    <span className="text-gray-500"> {"*/"}</span>
                  </div>
                </div>

                {/* Skills array with forEach */}
                <div className="mb-6">
                  <div className="text-left border-l-4 border-blue-500 pl-4 bg-gray-900/50 py-3 rounded-r">
                    <span className="text-purple-400">console.log</span>(
                    <span className="text-green-300">&quot;My Skills:&quot;</span>);
                    <br />
                    <span className="text-yellow-400">mySkills</span>
                    {"."}
                    <span className="text-blue-400">forEach</span>(<span className="text-orange-400">skill</span> {"=>"}{" "}
                    <span className="text-purple-400">console.log</span>(
                    <span className="text-green-300">&quot; - &quot;</span> +{" "}
                    <span className="text-orange-400">skill</span>));
                    <br />
                    <br />
                    <span className="text-gray-500">- Full-stack developer</span>
                    <br />
                    <span className="text-gray-500">- Web3 builder</span>
                    <br />
                    <span className="text-gray-500">- Solidity & EVM</span>
                    <br />
                    <span className="text-gray-500">- Scaffold-ETH</span>
                    <br />
                  </div>
                </div>

                {/* Terminal style social links */}
                <div className="mb-6">
                  <div className="text-left">
                    <span className="text-gray-500">$ </span>
                    <span className="text-blue-400">ls</span> <span className="text-yellow-400">-la</span>{" "}
                    <span className="text-gray-400">social_links/</span>
                    <br />
                    <div className="mt-3 space-y-2">
                      {PROFILE_DATA.socialLinks.map(link => {
                        const IconComponent = link.icon;
                        return (
                          <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 hover:bg-gray-800/50 p-2 rounded transition-all duration-200 hover:translate-x-2"
                          >
                            <span className="text-cyan-400">drwxr-xr-x</span>
                            <span className="text-green-400">mateo</span>
                            <span className="text-gray-400">web3</span>
                            <div className="flex items-center gap-2 text-blue-400 group-hover:text-cyan-300">
                              <IconComponent />
                              <span>{link.name.toLowerCase()}_profile</span>
                            </div>
                            <span className="text-gray-500 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              {/* Click to connect */}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Terminal footer */}
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span>Process: building_web3.exe</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-cyan-400">[ENTER]</span> to continue...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
