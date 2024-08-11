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

export const levels: Level[] = [
  {
    id: "1",
    title: "Base Origins",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: BaseOrigins,
  },
  {
    id: "2",
    title: "Getting Started with Base",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: ComingSoon,
  },
  {
    id: "3",
    title: "Navigating Base's Ecosystem",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: ComingSoon,
  },
  {
    id: "4",
    title: "Base Architecture and Future",
    description:
      "Discover the foundations of Base and its relationship with Ethereum.",
    content: ComingSoon,
  },
];
