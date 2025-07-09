import React from "react";

export const CoffeeCupIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0-2h-2c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M4 16.83V8c0-1.11.89-2 2-2h8c1.11 0 2 .89 2 2v8.83c0 .62-.28 1.2-.77 1.58l-3.47 2.73c-.44.35-1.08.35-1.52 0l-3.47-2.73c-.49-.38-.77-.96-.77-1.58" />
    <path d="M7 10v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1m4 0v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1" />
  </svg>
);
