import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  additionalStyles?: string;
  type?: "submit" | "button" | "reset";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  link?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
}

const buttonStyles = `
  relative inline-flex items-center justify-center
  rounded-full font-polysans text-white
  bg-gradient-to-b from-[#90B5FF] to-[#0055FF]
  shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_0_3px_rgba(0,85,255,0.3),0_0_0_6px_rgba(0,85,255,0.1)]
  hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_0_0_3px_rgba(0,85,255,0.4),0_0_0_6px_rgba(0,85,255,0.2)]
  transition-all duration-300 ease-in-out
`;

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  link,
  openInNewTab,
  additionalStyles = "",
  disabled = false,
  ...props
}) => {
  const combinedStyles = `${buttonStyles} ${additionalStyles}`;

  if (link) {
    return (
      <Link
        href={link}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={combinedStyles}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedStyles} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
