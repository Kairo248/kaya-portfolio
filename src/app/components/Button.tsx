import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", children, ...props }: Props) {
  const base = "rounded-md px-6 py-2.5 font-bold transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider";
  const primary = "bg-gradient-to-r from-red-600 to-yellow-500 text-white hover:from-red-700 hover:to-yellow-600 transform hover:scale-105 border-2 border-yellow-500/50";
  const ghost = "bg-slate-800 text-yellow-500 border-2 border-yellow-500 hover:bg-slate-700";
  return (
    <button className={`${base} ${variant === "primary" ? primary : ghost} ${className}`} {...props} style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
      {children}
    </button>
  );
}
