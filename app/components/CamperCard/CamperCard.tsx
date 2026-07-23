"use client";
import { Camper } from "@/app/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMap } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { FaRegStar, FaGasPump } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
interface CamperCardProp {
  camper: Camper;
}
export default function CamperCard({ camper }: CamperCardProp) {
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
        <p>
          <FaRegStar className={css.ratingIcon} />
          {camper.rating} ({camper.totalReviews} reviews)
        </p>
        <p>
          <MdOutlineMap className={css.icon} />
          {camper.location}
        </p>
        <p className={css.descr}>{camper.description}</p>
        <div className={css.groupFilter}>
          <p className={css.categories}>
            <FaGasPump />
            {camper.engine}
          </p>
          <p className={css.categories}>
            <TbAutomaticGearbox />
            {camper.transmission}
          </p>
          <p className={css.categories}>
            <FaCar />
            {camper.form}
          </p>
        </div>

        <Link className={css.showDetails} href={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </article>
  );
}
