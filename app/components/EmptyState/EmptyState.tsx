import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import css from "./EmptyState.module.css";

interface EmptyStateProps {
  onClearFilters: () => void;
  onVievAll: () => void;
}
export default function EmptyState({
  onClearFilters,
  onVievAll,
}: EmptyStateProps) {
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <Image src="/image 1.jpg" fill alt="Not found" className={css.image} />
      </div>

      <div className={css.notFound}>
        <h2 className={css.notFoundTitle}>No campers found</h2>

        <p className={css.description}>
          We couldn&apos;t find any campers that match your filters. <br />
          Try adjusting your search or clearing some filters.
        </p>
      </div>

      <div className={css.buttons}>
        <button
          type="button"
          className={css.cleanButton}
          onClick={onClearFilters}
        >
          <IoMdClose className={css.closeIcon} />
          Clear filters
        </button>

        <button
          type="button"
          className={css.allCampersButton}
          onClick={onVievAll}
        >
          View all campers
        </button>
      </div>
    </div>
  );
}
