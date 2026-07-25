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
    <>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.reviewer_name}</p>
          <p>{review.comment}</p>
          <p>{review.reviewer_rating}</p>
        </div>
      ))}
    </>
  );
}
