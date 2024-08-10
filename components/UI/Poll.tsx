import { updateShells } from "@/utils/updateShells";
import { usePrivy } from "@privy-io/react-auth";
import React, { useState } from "react";

const PollOption = ({ text, isSelected, onSelect }: any) => (
  <li
    className={`cursor-pointer p-2 rounded-lg transition-colors duration-200 ${
      isSelected ? "bg-blue-500 text-white" : "hover:text-white"
    }`}
    onClick={onSelect}
  >
    {isSelected ? "✓ " : "○ "}
    {text}
  </li>
);

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const options = [
    "Absolutely! It's the next big wave",
    "Maybe, but it needs to prove itself",
    "Nah, other L2s will outperform it",
  ];

  const { user } = usePrivy();

  const handleVote = (index: any) => {
    if (!hasVoted) {
      setSelectedOption(index);
      if (user) {
        updateShells(user?.id, 10);
      }
      setHasVoted(true);
    }
  };

  return (
    <div className="text-gray-200 text-lg">
      <ul className="space-y-2">
        {options.map((option, index) => (
          <PollOption
            key={index}
            text={option}
            isSelected={selectedOption === index}
            onSelect={() => handleVote(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Poll;
