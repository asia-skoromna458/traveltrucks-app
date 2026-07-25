import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

interface ReviewsProps {
  reviews: {
    id: string;
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
    createdAt: string;
  }[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={css.container}>
      <h2 className={css.reviews}>Reviews</h2>

      {reviews.map((review) => (
        <div key={review.id} className={css.review}>
          <div className={css.userInfo}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className={css.name}>{review.reviewer_name}</p>

              <div className={css.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= review.reviewer_rating ? css.starActive : css.star
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
