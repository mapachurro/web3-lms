export const levels = [
  {
    id: "1",
    title: "Base Origins",
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Base, the child of Coinbase was launched in 2023 with only one aim of
          getting people onchain with utmost convenience. Okay, enough
          description. Let me actually make you understand these terms:
        </p>

        <p className="text-lg mt-4 itatic">Other chains be like:</p>
        <img
          src="/images/module1/level1.jpg"
          alt="level1"
          className="w-3/12 mt-2"
        />
        <p className="text-lg mt-4">
          Haha, just a joke, no offense to other chains. But I hope you got my
          point
        </p>
        <p className="text-lg mt-4">
          Just like open source is accessible to everyone, Base is open to the
          whole decentralized ecosystem and not just to Coinbase. Innovation is
          the aim here.
        </p>
        <p className="text-lg mt-4">
          WELL, CONGRATULATIONS ON PASSING LEVEL 1🥳
        </p>
        <p className="text-lg mt-4">
          WAIT, you thought you would escape without a test?😈
        </p>
      </div>
    ),
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
      {
        question: "Who created Base?",
        options: ["Ethereum Foundation", "Coinbase", "Binance", "Solana Labs"],
        answer: "Coinbase",
      },
      {
        question: "What technology does Base use?",
        options: [
          "Sharding",
          "Plasma",
          "Optimistic Rollups",
          "Zero-Knowledge Proofs",
        ],
        answer: "Optimistic Rollups",
      },
      {
        question: "What are the main benefits of Base? (Select all that apply)",
        options: [
          "Faster transactions",
          "Lower fees",
          "Ethereum's security",
          "Exclusive to Coinbase users",
        ],
        answer: ["Faster transactions", "Lower fees", "Ethereum's security"],
      },
      {
        question: "What is Base's main goal?",
        options: [
          "To replace Ethereum",
          "To bring the next billion users to crypto",
          "To create a new cryptocurrency",
          "To compete with Bitcoin",
        ],
        answer: "To bring the next billion users to crypto",
      },
    ],
  },
  {
    id: "2",
    title: "Getting Started with Base",
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Now let&apos;s jump more into the technical problem of L1s. Layer 1
          blockchain like Ethereum are extensively utilized and hence, get
          exhausted. This exhaustion causes congestion which eventually leads to
          slow down the whole process, making it expensive. This affects
          Scalability.
        </p>
        <p className="text-lg mt-2">
          While Scalability has always been an issue in the blockchain
          ecosystem, solutions like Base, an L2, have to jump in.
        </p>
        <p className="text-lg mt-4">
          Layer 1 is like a traffic jammed only highway to commute. As
          there&apos;s only one road to travel, there will be congestion
          creating frustration among everyone while sacrificing their time &
          fuel.
          <br />
          Now, think of L2 as an alternative road, like an express highway. Same
          work, more efficient.
        </p>
        <p className="text-lg mt-4">So, Base solves the blockchain trilemma:</p>
        <ol className="text-lg mt-4 list-decimal ml-4">
          <li className="text-lg mt-2">
            <strong>Security:</strong> As Base works on top of Ethereum, we get
            the best of worlds ie. Ethereum&apos;s security.
          </li>
          <li className="text-lg mt-2">
            <strong>Scalability:</strong> By diverting the flow from Mainnet
            [Ethereum] to the “side” chain [Base] to process the information, we
            are scaling the flow, that too way too quicker.
          </li>
          <li className="text-lg mt-2">
            <strong>Decentralization:</strong> The most basic yet intricate
            detail which enhances the transparency & fairness providing equal
            information to everyone.
          </li>
        </ol>
        <p className="text-lg mt-2">
          All of the above possibilities are achieved because of “Optimistic
          Roll-Ups”. Yeah, the fun named tech. (a lesson, don&apos;t judge a
          book by it&apos;s cover)
        </p>
        <p className="text-lg mt-2">
          The &quot;optimistic&quot; nature refers to the fact that transactions
          are presumed valid until proven otherwise, avoiding the need to
          generate expensive cryptographic proofs for every transaction. And
          once confirmed, they rolled like sushi, back to Ethereum.
        </p>
        <p className="text-lg mt-4">So, here&apos;s another test for you!</p>
        <img
          src="/images/module1/level2.jpg"
          alt="level1"
          className="w-3/12 mt-2"
        />
      </div>
    ),
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
      {
        question: "How does Base improve Ethereum's performance?",
        options: [
          "By replacing Ethereum entirely",
          "By processing transactions off-chain and bundling results",
          "By adding more miners to the network",
          "By reducing the total number of transactions",
        ],
        answer: "By processing transactions off-chain and bundling results",
      },
      {
        question: "What is an Optimistic Rollup?",
        options: [
          "A type of sushi",
          "A consensus mechanism",
          "A Layer 2 scaling solution that assumes transactions are valid by default",
          "A new type of cryptocurrency",
        ],
        answer:
          "A Layer 2 scaling solution that assumes transactions are valid by default",
      },
      {
        question: "Which of these is NOT a benefit of using Base?",
        options: [
          "Lower transaction fees",
          "Faster transactions",
          "Improved security over Ethereum",
          "Higher transaction throughput",
        ],
        answer: "Improved security over Ethereum",
      },
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
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Now let&apos;s jump more into the technical problem of L1s. Layer 1
          blockchain like Ethereum are extensively utilized and hence, get
          exhausted. This exhaustion causes congestion which eventually leads to
          slow down the whole process, making it expensive. This affects
          Scalability.
        </p>
      </div>
    ),
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
    content: (
      <div className="text-gray-200">
        <p className="text-lg">
          Now let&apos;s jump more into the technical problem of L1s. Layer 1
          blockchain like Ethereum are extensively utilized and hence, get
          exhausted. This exhaustion causes congestion which eventually leads to
          slow down the whole process, making it expensive. This affects
          Scalability.
        </p>
      </div>
    ),
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
