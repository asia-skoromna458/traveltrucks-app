import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";
import { Review } from "@/app/types/camper";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className={css.container}>
      <h2 className={css.title}>Reviews</h2>

      {reviews.map(({ id, reviewer_name, reviewer_rating, comment }) => (
        <article key={id} className={css.review}>
          <div className={css.userInfo}>
            <div className={css.avatar}>{reviewer_name[0].toUpperCase()}</div>

            <div>
              <p className={css.name}>{reviewer_name}</p>

              <div className={css.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index + 1 <= reviewer_rating ? css.starActive : css.star
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <p className={css.comment}>{comment}</p>
        </article>
      ))}
    </section>
  );
}
