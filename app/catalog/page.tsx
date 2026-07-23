"use client";
import Filter from "../components/CategoryFilter/CategoryFilter";
import css from "./page.module.css";
import { getAllCamper } from "../services/api";
import { Camper } from "../types/camper";
import { useEffect, useState } from "react";
import CamperCard from "../components/CamperCard/CamperCard";
import LoadMoreButton from "../ui/LoadMoreButton/LoadMoreButton";

export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const LoadMore = async () => {
    setIsLoadingMore(true);

    const res = await getAllCamper({ page: page + 1, perPage: 4 });

    setCampers((prev) => [...prev, ...res.campers]);
    setPage((prev) => prev + 1);

    setIsLoadingMore(false);
  };

  useEffect(() => {
    const fetchCamper = async () => {
      setIsLoading(true);
      try {
        const res = await getAllCamper({ page: 1, perPage: 4 });
        setCampers(res.campers);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCamper();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={css.catalogPage}>
      <div className={css.filtersWrapper}>
        <Filter />
      </div>
      <div className={css.cardsList}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
        <LoadMoreButton onClick={LoadMore} isLoading={isLoadingMore} />
      </div>
    </div>
  );
}
