"use client";
import { Camper } from "@/app/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMap } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { FaStar, FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import {
  camperForms,
  camperEngines,
  camperTransmission,
} from "@/app/constants/filters";

interface CamperCardProp {
  camper: Camper;
}
export default function CamperCard({ camper }: CamperCardProp) {
  const engineLabel = camperEngines.find(
    (item) => item.value === camper.engine,
  )?.label;

  const transmissionLabel = camperTransmission.find(
    (item) => item.value === camper.transmission,
  )?.label;

  const formLabel = camperForms.find(
    (item) => item.value === camper.form,
  )?.label;
  return (
    <article className={css.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={240}
        height={219}
        className={css.image}
      />
      <div className={css.information}>
        <div className={css.header}>
          <h2 className={css.name}>{camper.name}</h2>
          <h2 className={css.price}>€{camper.price}</h2>
        </div>
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
        <p className={css.descr}>{camper.description}</p>
        <div className={css.groupFilter}>
          <p className={css.categories}>
            <FaGasPump />
            {engineLabel}
          </p>
          <p className={css.categories}>
            <TbAutomaticGearbox />
            {transmissionLabel}
          </p>
          <p className={css.categories}>
            <FaCar />
            {formLabel}
          </p>
        </div>

        <Link className={css.showDetails} href={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </article>
  );
}
