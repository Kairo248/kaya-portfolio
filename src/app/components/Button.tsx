import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", children, ...props }: Props) {
  const base = "rounded-2xl px-4 py-2 font-medium transition shadow";
  const primary = "bg-white/12 border border-white/20 backdrop-blur-md hover:bg-white/20";
  const ghost = "bg-transparent border border-white/10 hover:bg-white/6";
  return (
    <button className={`${base} ${variant === "primary" ? primary : ghost} ${className}`} {...props}>
      {children}
    </button>
  );
}
