import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  props?: any;
  additionalStyles?: string;
  type?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  link?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
}

const buttonStyles =
  "relative inline-flex items-center text-white border bg-black rounded-full";

const OutlineButton = ({
  children,
  type,
  onClick,
  link,
  openInNewTab,
  additionalStyles,
  disabled = false,
  ...props
}: ButtonProps) => {
  return type === "link" ? (
    <a
      href={link}
      {...props}
      target={openInNewTab ? "_blank" : ""}
      rel={openInNewTab ? "noopener noreferrer" : ""}
      className={`${buttonStyles} ${additionalStyles} cursor-pointer`}
    >
      {children}
    </a>
  ) : (
    <div className="btn-holder">
      <button
        type={type ? "button" : "submit"}
        {...props}
        onClick={onClick}
        disabled={disabled}
        className={`${buttonStyles} ${additionalStyles}`}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

export default OutlineButton;
