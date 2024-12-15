import React from "react";

interface BlinkingTextProps {
  text: string;
  className?: string;
}

export function BlinkingText({ text, className = "" }: BlinkingTextProps) {
  return <span className={`blink ${className}`}>{text}</span>;
}
