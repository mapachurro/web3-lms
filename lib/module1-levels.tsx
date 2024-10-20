import Poll from "@/components/UI/Poll";
import { Level } from "@/types/levels";
import Image from "next/image";
import Link from "next/link";
import Quiz from "./module1-level1-quiz";

const BaseOrigins: Level["content"] = [
  {
    title: "Welcome to Base Camp, surfers!",
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Ready to catch some gnarly waves of knowledge?
          <br />
          Let&apos;s paddle out and dive into the world of Base.
        </p>

        <h3 className="text-xl mt-4 mb-2">WTF is Base?</h3>
        <p className="text-lg">
          Imagine Base as Ethereum&apos;s cool, efficient cousin who knows all
          the secret surf spots.
        </p>
        <p className="text-lg">
          Launched in 2023 by the pros at Coinbase, Base is an L2 (Layer 2)
          solution that rides on top of Ethereum, giving you smoother, faster,
          and cheaper transactions.
        </p>
      </div>
    ),
  },
  {
    title: "📈 Riding the Growth Tsunami",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Since its launch, Base has been catching some serious air. Check out
          these gnarly stats:
        </p>
        <Image
          src="/images/module1/base-daily.png"
          alt="base daily transactions chart"
          width={100}
          height={100}
          className="w-full mt-2"
          unoptimized
        />
        <span className="text-sm text-blue-500">
          <Link href="https://basescan.org/chart/tx" target="_blank">
            Source
          </Link>
        </span>

        <ul className="list-disc pl-5 mt-4">
          <li>
            Base consistently processing{" "}
            <span className="text-blue-500">over 4 million transactions</span>{" "}
            daily since the Dencun upgrade.
          </li>
        </ul>
        <p>Whoa! That&apos;s more traffic than a beach on a sunny day!</p>
      </div>
    ),
  },
  {
    title: "🏄‍♂️ Why Base is Rad",
    content: (
      <div className="text-gray-200 text-lg">
        <ol className="list-decimal pl-5">
          <li className="mb-2">
            <strong className="text-blue-500">Scalability:</strong> Base can
            handle more transactions than a beach bar during happy hour.
          </li>
          <li className="mb-2">
            <strong className="text-blue-500">Low fees:</strong> Spend less on
            gas, more on surfboards (or, you know, actual transactions).
          </li>
          <li className="mb-2">
            <strong className="text-blue-500">Ethereum security:</strong>{" "}
            It&apos;s like having a lifeguard from the big leagues watching over
            you.
          </li>
          <li className="mb-2">
            <strong className="text-blue-500">Speed:</strong> Faster than a pro
            surfer on a perfect wave.
          </li>
          <li>
            <strong className="text-blue-500">Diverse Ecosystem:</strong> Over
            250 DeFi protocols riding the Base wave. It&apos;s like an
            all-you-can-eat buffet for crypto surfers!
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "🤝 The Coinbase Connection",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Base is Coinbase&apos;s brainchild, launched with a mission to get
          everyone onchain with utmost convenience.
        </p>
        <p className="mt-4">
          <strong className="text-blue-500">Coinbase:</strong> A
          community-focused crypto exchange which probably has the largest user
          base. It makes it easy for people and institutions to engage with
          crypto assets with a safe & fast process.
        </p>
      </div>
    ),
  },
  {
    title: "🌟 The Base Difference",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          While Ethereum&apos;s like the famous point break everyone knows, Base
          is your secret spot – same great waves, smaller crowds, cheaper
          parking.
        </p>
        <p className="mt-2">
          Even legends need upgrades. To leverage the power of Ethereum by
          making it more secure, fast & 10x cheaper, Base was created.
        </p>
      </div>
    ),
  },
  {
    title: "And guess what?",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Base is now the 2nd largest Ethereum L2 network! In May, it generated
          a whopping $6.1 million in on-chain profit. That&apos;s some serious
          wax on their surfboard!
        </p>
        <div className="mt-4 border border-gray-800 bg-gray-950 p-4 rounded-lg">
          <p className="font-bold">L2 Onchain Profit in May:</p>
          <ol className="list-decimal pl-5 mt-2">
            <li>Base - $6.98M</li>
            <li>Optimism - $1.57M</li>
            <li>Scroll - $1.35M</li>
            <li>Arbitrum - $802k</li>
            <li>Linea - $612k</li>
          </ol>
          <p className="mt-2 text-sm text-gray-400">
            Onchain profit = Revenue from L2 gas fees - Costs of posting batches
            and verifying proofs on L1
          </p>
        </div>
        <p className="mt-4 text-sm text-blue-500">
          <Link
            href="https://twitter.com/0xKofi/status/1797645289307951127"
            target="_blank"
            rel="noopener noreferrer"
          >
            View original tweet by @0xKofi
          </Link>
        </p>
      </div>
    ),
  },
  {
    title: "🏄‍♀️ The Base Beach Club",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Base isn&apos;t just a blockchain, it&apos;s a vibe! The{" "}
          <span className="text-blue-500">&quot;based&quot;</span> culture is
          all about community, creativity, and catching the best waves.
          <br />
          <br />
          From unique NFT markets like Tiny Based Frogs to ruling the SocialFi
          scene with a 46% market share, Base is the coolest beach party in
          town!
        </p>
      </div>
    ),
  },
  {
    title: "🤔 Do you think Base can become the NVIDIA of DeFi?",
    content: <Poll />,
  },
  {
    title: "Ready to hang ten with your newfound knowledge? Catch this wave!",
    content: <Quiz />,
  },
  {
    title: "Bonus Insight",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          While Base is making a big splash with its growing number of daily
          transactions (we&apos;re talking millions, surfer!), what really sets
          it apart is how it leverages Ethereum&apos;s strength while solving
          some of its challenges.
          <br />
          It&apos;s not about replacing Ethereum, but enhancing it – like adding
          a perfect offshore wind to already great surfing conditions!
        </p>
      </div>
    ),
  },
  {
    title: "Whoa!",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Did you see how much faster and cheaper that was on Base? Pretty rad,
          right?
        </p>
      </div>
    ),
  },
  {
    title: "Level Up! 🏄‍♂️🌟",
    content: (
      <div className="text-gray-200 text-lg">
        <p>
          Congratulations, Beach Wanderer! You&apos;ve completed your first
          level and earned 20 seashells.
          <br />
        </p>
        <p className="mt-2">
          You&apos;re ready to paddle out to deeper waters.
        </p>
        <p className="mt-2">
          Next up: &quot;Getting Started with Base&quot; - where we&apos;ll show
          you how to grab your board (wallet) and catch your first Base wave!
        </p>
        <p className="mt-2 text-blue-500">Ready to keep surfing?</p>
      </div>
    ),
  },
];

export const ComingSoon = [
  {
    title: "Coming Soon",
    content: <div className="text-gray-200"></div>,
  },
];

export const welcomeLevels: Level[] = [
  {
    id: "1",
    title: "Catch Your First Wave",
    description: "WTF is Blockchain? Crypto? Web3?",
    content: [
      {
        title: "Welcome surfers!",
        content: (
          <div className="text-gray-200">
            <p className="text-lg">Catch Your First Wave</p>

            <h3 className="text-xl mt-4 mb-2">WTF is Blockchain?</h3>
            <p className="text-lg">
              Think of blockchain like a giant, shared notebook. When you write
              ✏️ something in it, everyone can see it, and no one can erase it.
            </p>
            <p className="text-lg">
              It&apos;s used to keep track of things like money or who owns
              what, without needing a central authority to manage it.
            </p>
          </div>
        ),
      },
      {
        title: "Blockchain, Crypto, and Web3",
        content: (
          <div className="text-gray-200">
            <h3 className="text-xl mt-4 mb-2">How are they different?</h3>

            <p className="text-lg mb-4">
              Imagine you&apos;re at a beach with three different types of
              waves. Let&apos;s dive in and see how they&apos;re different!
            </p>

            <h4 className="text-lg font-bold mb-2">
              🌊 Blockchain: The Big Wave
            </h4>
            <p className="text-lg mb-4">
              Blockchain is like the big wave that carries everything. It&apos;s
              the technology that makes the other two possible. Remember our
              giant shared notebook? That&apos;s blockchain!
            </p>
          </div>
        ),
      },
      {
        title: "🏄‍♂️ Cryptocurrency: Riding the Wave",
        content: (
          <div className="text-gray-200">
            <p className="text-lg mb-4">
              Crypto is like riding the blockchain wave. It&apos;s digital money
              that uses blockchain technology. Bitcoin, for example, is the most
              famous surfer on this wave. It&apos;s exciting because it can
              change how we handle money - from paying bills to buying coffee!
            </p>
          </div>
        ),
      },
      {
        title: "🏖️ Web3: The Entire Beach Experience",
        content: (
          <div className="text-gray-200">
            <p className="text-lg mb-4">
              Web3 is like the whole beach experience. It&apos;s a vision of a
              new internet built on blockchain technology. It includes
              cryptocurrencies, but also things like decentralized apps and
              digital ownership.
            </p>
          </div>
        ),
      },
      {
        title: "",
        content: (
          <div className="text-gray-200">
            <p className="text-lg italic mt-6">
              Just as the digital world has transformed how we communicate,
              watch, learn, and shop, blockchain, crypto, and Web3 are set to
              revolutionize how we handle money and interact online. It&apos;s a
              whole new world of possibilities!
            </p>
            <p className="text-lg mt-2">
              Let&apos;s go more deeper into the next level!
            </p>
          </div>
        ),
      },
    ],
    shells: 10,
  },
  {
    id: "2",
    title: "Surfing Across Shores",
    description: "Let's go Crosschain",
    content: [
      {
        title: "Introduction to Crosschain",
        content: (
          <div className="text-gray-200">
            <p className="mb-4">
              Imagine you&apos;re a surfer who loves to ride waves on different
              beaches. Each beach is like a different blockchain, with its own
              unique waves (transactions) and surfboards (tokens).
            </p>
            <p className="mb-4">
              Crosschain technology is like having a magical surfboard that lets
              you ride waves between these different beaches without ever
              leaving the water!
            </p>
            <h3 className="text-xl font-bold mb-2">Why is this important?</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                It allows you to use your assets across different blockchains
              </li>
              <li>
                You can take advantage of features unique to each blockchain
              </li>
              <li>It helps connect the entire blockchain ecosystem</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Meet Base: The Ultimate Surf Spot",
        content: (
          <div className="text-gray-200">
            <p className="mb-4">
              Base is like a brand new, cutting-edge surf park built on top of
              Ethereum&apos;s ocean. It&apos;s designed to make using blockchain
              easier, faster, and cheaper for everyone.
            </p>
            <h3 className="text-xl font-bold mb-2">What makes Base special?</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                It&apos;s a Layer 2 solution, meaning it&apos;s built on top of
                Ethereum for improved speed and lower costs
              </li>
              <li>
                It&apos;s backed by Coinbase, a major player in the crypto world
              </li>
              <li>
                It aims to make Web3 accessible to everyone, just like a
                beginner-friendly surf spot
              </li>
            </ul>
            <p className="mb-4">
              Think of Base as the perfect learning ground for new surfers in
              the blockchain world!
            </p>
          </div>
        ),
      },
      {
        title: "And guess what?",
        content: (
          <div className="text-gray-200 text-lg">
            <p>
              Base is now the 2nd largest Ethereum L2 network! In May, it
              generated a whopping $6.1 million in on-chain profit. That&apos;s
              some serious wax on their surfboard!
            </p>
            <div className="mt-4 border border-gray-800 bg-gray-950 p-4 rounded-lg">
              <p className="font-bold">L2 Onchain Profit in May:</p>
              <ol className="list-decimal pl-5 mt-2">
                <li>Base - $6.98M</li>
                <li>Optimism - $1.57M</li>
                <li>Scroll - $1.35M</li>
                <li>Arbitrum - $802k</li>
                <li>Linea - $612k</li>
              </ol>
              <p className="mt-2 text-sm text-gray-400">
                Onchain profit = Revenue from L2 gas fees - Costs of posting
                batches and verifying proofs on L1
              </p>
            </div>
            <p className="mt-4 text-sm text-blue-500">
              <Link
                href="https://twitter.com/0xKofi/status/1797645289307951127"
                target="_blank"
                rel="noopener noreferrer"
              >
                View original tweet by @0xKofi
              </Link>
            </p>
          </div>
        ),
      },
      {
        title: "WTF are these Layers in a blockchain",
        content: (
          <div className="text-gray-200">
            <p className="text-lg mt-2">
              Let&apos;s go more deeper into the next level!
            </p>
          </div>
        ),
      },
    ],
    shells: 10,
  },
  {
    id: "3",
    title: "Riding the Waves",
    description: "Layers Explained. L1? L2? even L3? Oh my god!",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const nftLevels: Level[] = [
  {
    id: "4",
    title: "Digital Treasure Hunt",
    description: "Intro to NFTs vs. Fungible Tokens",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "5",
    title: "Crafting Your Unique Surfboard",
    description: "What is Minting NFTs",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "6",
    title: "Trading Rare Seashells",
    description: "NFT Marketplaces and Floors",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const defiLevels: Level[] = [
  {
    id: "7",
    title: "Ocean of Opportunities",
    description: "Intro to DeFi",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "8",
    title: "Tide Pools of Liquidity",
    description: "Liquidity Pools",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "9",
    title: "Catching the Yield Wave",
    description: "What is Yield Farming",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const devLevels: Level[] = [
  {
    id: "10",
    title: "Building Sandcastles in the Cloud",
    description: "What are Smart Contracts?",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "11",
    title: "Coding the Perfect Wave",
    description: "What are DApps and how to develop them",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "12",
    title: "Underwater Architecture",
    description: "Blockchain Protocols",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const daoLevels: Level[] = [
  {
    id: "13",
    title: "Surfers' Community Council",
    description: "Intro to DAOs",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "14",
    title: "Voting with Your Surfboard",
    description: "Governance Tokens",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "15",
    title: "Shaping the Future of Surfing",
    description: "Proposal Systems",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const socialLevels: Level[] = [
  {
    id: "16",
    title: "Riding the Viral Wave",
    description: "Web3 Social Platforms",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "17",
    title: "Surf Tribe Connections",
    description: "Decentralized Identities",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "18",
    title: "Beach Party Invites",
    description: "Token-Gated Communities",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const metaverseLevels: Level[] = [
  {
    id: "19",
    title: "Virtual Surf Simulator",
    description: "Intro to Metaverse",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "20",
    title: "Building Your Dream Beach",
    description: "Virtual Real Estate",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "21",
    title: "Surf Across Realities",
    description: "Interoperability",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const walletLevels: Level[] = [
  {
    id: "22",
    title: "Intro to wallets",
    description: "Wallets and Security",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "23",
    title: "Spotting Shark Fins",
    description: "Scam Prevention",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
  {
    id: "24",
    title: "Safe Surfing Guide",
    description: "Best Practices",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];

export const vibesLevels: Level[] = [
  {
    id: "25",
    title: "Speak Like a Local",
    description: "Common Web3 Terms to become cultural",
    content: [
      {
        title: "Coming Soon",
        content: <div className="text-gray-200"></div>,
      },
      // More content steps...
    ],
    shells: 10,
  },
];
