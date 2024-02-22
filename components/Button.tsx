import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="py-2 px-4 bg-white font-bold text-2xl rounded-lg hover:scale-110 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
