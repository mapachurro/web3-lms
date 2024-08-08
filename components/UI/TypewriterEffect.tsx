import React, { useState, useEffect } from "react";
import Link from "next/link";

const TypewriterEffect: React.FC<{ text: string; speed: number }> = ({
  text,
  speed,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  const formatText = (content: string) => {
    const sections = content
      .split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|###.*)/g)
      .filter(Boolean);

    return sections.map((section, index) => {
      if (section.startsWith("**") && section.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-lg mb-1">
            {section.slice(2, -2)}
          </strong>
        );
      } else if (section.startsWith("[") && section.includes("](")) {
        const [linkText, linkUrl] = section.slice(1, -1).split("](");
        return (
          <Link
            key={index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {linkText}
          </Link>
        );
      } else if (section.startsWith("###")) {
        return (
          <h3 key={index} className="font-bold text-xl mt-4 mb-2">
            {section.slice(3).trim()}
          </h3>
        );
      } else {
        const paragraphs = section.split("\n").filter((p) => p.trim() !== "");
        return paragraphs.map((paragraph, pIndex) => (
          <p key={`${index}-${pIndex}`} className="mb-2">
            {paragraph}
          </p>
        ));
      }
    });
  };

  return (
    <div className="text-md break-words">
      {isComplete ? formatText(text) : formatText(displayedText)}
    </div>
  );
};

export default TypewriterEffect;
