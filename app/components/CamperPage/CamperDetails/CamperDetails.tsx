import { Camper } from "@/app/types/camper";
import { FaStar } from "react-icons/fa";
import css from "./CamperDetails.module.css";
import { MdOutlineMap } from "react-icons/md";
import {
  camperEngines,
  camperForms,
  camperTransmission,
  vehicleDetails,
} from "@/app/constants/filters";

interface CamperDetailsProps {
  camper: Camper;
}

export default function CamperDetails({ camper }: CamperDetailsProps) {
  const allDetails = [
    ...camperForms,
    ...camperEngines,
    ...camperTransmission,
    ...vehicleDetails,
  ];
  const amenitiesLabels = camper.amenities.map(
    (amenity) =>
      allDetails.find((item) => item.value === amenity)?.label ?? amenity,
  );

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
          {amenitiesLabels.map((amenity) => (
            <div key={amenity} className={css.amenity}>
              {amenity}
            </div>
          ))}
        </div>

        <hr className={css.divider} />

        <div className={css.vehicleDetails}>
          <div className={css.vehicleItem}>
            <span>Form</span>
            <span className={css.vehicleValue}>{camper.form}</span>
          </div>

          <div className={css.vehicleItem}>
            <span>Length</span>
            <span className={css.vehicleValue}>{camper.length}</span>
          </div>

          <div className={css.vehicleItem}>
            <span>Width</span>
            <span className={css.vehicleValue}>{camper.width}</span>
          </div>

          <div className={css.vehicleItem}>
            <span>Height</span>
            <span className={css.vehicleValue}>{camper.height}</span>
          </div>

          <div className={css.vehicleItem}>
            <span>Tank</span>
            <span className={css.vehicleValue}>{camper.tank}</span>
          </div>

          <div className={css.vehicleItem}>
            <span>Consumption</span>
            <span className={css.vehicleValue}>{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
