import Poll from "@/components/UI/Poll";
import { Level } from "@/types/levels";
import Image from "next/image";
import Link from "next/link";

const BaseOrigins = [
  {
    title: "Welcome to Base Camp, surfers!",
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Ready to catch some gnarly waves of knowledge?
          <br />
          Let's paddle out and dive into the world of Base.
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
  // {
  //   title: "Quick terms",
  //   content: (
  //     <div className="text-gray-200">
  //       <h3 className="text-xl font-bold mb-2">Skip if you already know</h3>
  //       <ul className="list-disc pl-5">
  //         <li>
  //           <strong>L2 (Layer 2):</strong> A blockchain layer working on top of
  //           another blockchain layer to make the process user friendly. Base (an
  //           L2) works on top of Ethereum (an L1).
  //         </li>
  //         <li>
  //           <strong>Dencun Upgrade:</strong> A recent Ethereum update that made
  //           Layer 2 solutions like Base even more efficient.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  // },
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
        <p>Whoa! That's more traffic than a beach on a sunny day!</p>
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
            <strong className="text-blue-500">Ethereum security:</strong> It's
            like having a lifeguard from the big leagues watching over you.
          </li>
          <li className="mb-2">
            <strong className="text-blue-500">Speed:</strong> Faster than a pro
            surfer on a perfect wave.
          </li>
          <li>
            <strong className="text-blue-500">Diverse Ecosystem:</strong> Over
            250 DeFi protocols riding the Base wave. It's like an
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
          Base is Coinbase's brainchild, launched with a mission to get everyone
          onchain with utmost convenience.
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
          While Ethereum's like the famous point break everyone knows, Base is
          your secret spot – same great waves, smaller crowds, cheaper parking.
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
          a whopping $6.1 million in on-chain profit. That's some serious wax on
          their surfboard!
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
          Base isn't just a blockchain, it's a vibe! The{" "}
          <span className="text-blue-500">"based"</span> culture is all about
          community, creativity, and catching the best waves.
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
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Which of these statements best describes why Base is making waves in
          the crypto ocean?
        </p>
        <ol
          className="list-disc pl-5 text-md"
          style={{ listStyle: "inside", listStyleType: "decimal" }}
        >
          <li className="mt-2">It's the only Layer 2 solution for Ethereum</li>
          <li className="mt-2">It offers its own native cryptocurrency</li>
          <li className="mt-2">
            It combines Ethereum's security with improved scalability and lower
            fees
          </li>
          <li className="mt-2">It's completely independent of Ethereum</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Level Complete",
    content: (
      <div className="text-gray-200">
        <h3 className="text-xl font-bold mb-2">🏄‍♂️🌟 Level Up!</h3>
        <p>
          Congratulations, Beach Wanderer! You've completed your first level and
          earned your first seashell. You're ready to paddle out to deeper
          waters.
        </p>
        <p>
          Next up: "Getting Started with Base" - where we'll show you how to
          grab your board (wallet) and catch your first Base wave!
        </p>
      </div>
    ),
  },
];

export const levels: Level[] = [
  {
    id: "1",
    title: "Base Origins",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: BaseOrigins,
    quiz: [
      {
        question: "What is Base?",
        options: [
          "A cryptocurrency exchange",
          "A Layer 1 blockchain",
          "A Layer 2 solution for Ethereum",
          "A type of crypto wallet",
        ],
        answer: "A Layer 2 solution for Ethereum",
      },
    ],
  },
  {
    id: "2",
    title: "Getting Started with Base",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: BaseOrigins,
    quiz: [
      {
        question: "In the highway analogy, what does Base represent?",
        options: [
          "A new, separate highway",
          "Express lanes on top of the existing highway",
          "A traffic light system",
          "A carpool lane",
        ],
        answer: "Express lanes on top of the existing highway",
      },
    ],
  },
  {
    id: "3",
    title: "Navigating Base's Ecosystem",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: BaseOrigins,
    quiz: [
      {
        question: "What problem do Layer 2 solutions address?",
        options: [
          "Lack of decentralization",
          "Poor security",
          "Scalability issues",
          "Lack of cryptocurrencies",
        ],
        answer: "Scalability issues",
      },
    ],
  },
  {
    id: "4",
    title: "Base Architecture and Future",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: BaseOrigins,
    quiz: [
      {
        question: "What problem do Layer 2 solutions address?",
        options: [
          "Lack of decentralization",
          "Poor security",
          "Scalability issues",
          "Lack of cryptocurrencies",
        ],
        answer: "Scalability issues",
      },
    ],
  },
];
