import { updateShells } from "@/utils/updateShells";
import { usePrivy } from "@privy-io/react-auth";
import React, { useState } from "react";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const correctAnswer = "c";

  const { user } = usePrivy();

  const handleAnswerSelect = (answer: any) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (user) {
      updateShells(user?.id, 10);
    }
  };

  return (
    <div className="text-gray-200">
      <p className="text-lg mb-4">
        Which of these statements best describes why Base is making waves in the
        crypto ocean?
      </p>
      <ol className="list-none pl-0 space-y-2">
        {["a", "b", "c", "d"].map((option, index) => (
          <li
            key={option}
            className={`pl-8 relative cursor-pointer p-2 rounded-lg ${
              selectedAnswer === option
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-900"
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            <span className="absolute left-2">{option})</span>
            <span>
              &nbsp; &nbsp; &nbsp;
              {
                [
                  "It's the only Layer 2 solution for Ethereum",
                  "It offers its own native cryptocurrency",
                  "It combines Ethereum's security with improved scalability and lower fees",
                  "It's completely independent of Ethereum",
                ][index]
              }
            </span>
          </li>
        ))}
      </ol>
      {showFeedback && (
        <div className="mt-6">
          {selectedAnswer === correctAnswer ? (
            <p className="text-gray-200 text-lg">
              Gnarly, dude! You're catching on fast! Base indeed combines
              Ethereum's robust security with the sweet perks of improved
              scalability and lower transaction fees. It's like getting the best
              of both worlds – big wave thrills with beginner-friendly
              conditions!
            </p>
          ) : (
            <p className="text-gray-200 text-lg">
              Wipeout! No worries, even the best surfers miss a wave sometimes.
              The correct answer is c) Base combines Ethereum's security with
              improved scalability and lower fees. It's like Ethereum's cool
              cousin who found a way to throw an awesome beach party without
              breaking the bank!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
