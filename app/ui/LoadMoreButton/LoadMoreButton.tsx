"use client";

import css from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({
  onClick,
  isLoading,
}: LoadMoreButtonProps) {
  return (
    <button className={css.btn} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
}
