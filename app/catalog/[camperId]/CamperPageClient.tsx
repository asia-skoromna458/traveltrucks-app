import Gallery from "@/app/components/CamperPage/Gallery/Gallery";
import { Camper } from "@/app/types/camper";
import css from "./page.module.css";
import Reviews from "@/app/components/CamperPage/Reviews/Reviews";
import CamperDetails from "@/app/components/CamperPage/CamperDetails/CamperDetails";
import BookingForm from "@/app/components/CamperPage/BookingForm/BookingForm";
interface CamperCardProp {
  camper: Camper;
  reviews: {
    id: string;
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
    createdAt: string;
  }[];
}
export default function CamperPageClient({ camper, reviews }: CamperCardProp) {
  return (
    <div className={css.details}>
      <Gallery images={camper.gallery} />
      <CamperDetails camper={camper} />
      <Reviews reviews={reviews} />
      <BookingForm camperId={camper.id} />
    </div>
  );
}
