"use client";

import React from "react";

const Input = (propriete) => {
  return (
    <input
      className="placeholder:text-slate-700 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      placeholder={propriete.placeholder}
      type={propriete.type}
    />
  );
};

export default Input;