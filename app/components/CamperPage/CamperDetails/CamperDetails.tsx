import { Camper } from "@/app/types/camper";
import { FaStar } from "react-icons/fa";
import css from "./CamperDetails.module.css";
import { MdOutlineMap } from "react-icons/md";
// import {
//   camperForms,
//   camperEngines,
//   camperTransmission,
// } from "@/app/constants/filters";
interface CamperCardProp {
  camper: Camper;
}

export default function CamperDetails({ camper }: CamperCardProp) {
  return (
    <div>
      <div className={css.mainDescr}>
        <h2 className={css.name}>{camper.name}</h2>
        <div className={css.info}>
          <p>
            <FaStar className={css.ratingIcon} />
            {camper.rating} ({camper.totalReviews} reviews)
          </p>
          <p>
            <MdOutlineMap className={css.icon} />
            {camper.location}
          </p>
        </div>
        <h2 className={css.price}>€{camper.price}</h2>
        <p className={css.descr}>{camper.description}</p>
      </div>
      <div className={css.details}>
        <h2 className={css.name}>Vehicle details</h2>
        <div className={css.amenities}>
          {camper.amenities.map((amenity) => (
            <div key={amenity} className={css.amenity}>
              {amenity}
            </div>
          ))}
        </div>
        <hr className={css.divider} />
        <div className={css.vehicleDetails}>
          <div className={css.vehicleItem}>
            <span>Form</span>
            <strong>{camper.form}</strong>
          </div>

          <div className={css.vehicleItem}>
            <span>Length</span>
            <strong>{camper.length}</strong>
          </div>

          <div className={css.vehicleItem}>
            <span>Width</span>
            <strong>{camper.width}</strong>
          </div>

          <div className={css.vehicleItem}>
            <span>Height</span>
            <strong>{camper.height}</strong>
          </div>

          <div className={css.vehicleItem}>
            <span>Tank</span>
            <strong>{camper.tank}</strong>
          </div>

          <div className={css.vehicleItem}>
            <span>Consumption</span>
            <strong>{camper.consumption}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
