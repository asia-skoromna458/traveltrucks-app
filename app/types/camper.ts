export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  transmission: string;
  engine: string;

  amenities: string[];

  coverImage: string;
  createdAt: string;
  updatedAt: string;
  totalReviews: number;
   gallery: {
    id: string;
    thumb: string;
    original: string;
  }[];
}
// types/review.ts

export interface Review {
  id: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}