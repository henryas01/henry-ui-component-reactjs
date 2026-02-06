"use client";
import "./button.css";
import type { ButtonProps } from "./types";

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary "
    : "storybook-button--secondary";
  return (
    <button
      type={type}
      className={[
        className,
        "storybook-button ",
        `storybook-button--${size}`,
        mode,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
