"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Filter from "../components/CategoryFilter/CategoryFilter";
import CamperCard from "../components/CamperCard/CamperCard";
import LoadMoreButton from "../ui/LoadMoreButton/LoadMoreButton";
import { getAllCamper } from "../services/api";
import css from "./page.module.css";
import { useState } from "react";
import { CamperFilters } from "../types/filter";
import { buildCamperParams } from "../utils/camperFilters";

export default function CatalogPage() {
  const emptyFilters = {
    location: "",
    form: "",
    engine: "",
    transmission: "",
  };
  const [draftFilters, setDraftFilters] = useState<CamperFilters>(emptyFilters);
  const [filters, setFilters] = useState<CamperFilters>(emptyFilters);
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["campers", filters],

      initialPageParam: 1,

      queryFn: ({ pageParam }) =>
        getAllCamper(buildCamperParams(filters, pageParam)),

      getNextPageParam: (lastPage) => {
        if (lastPage.page >= lastPage.totalPages) {
          return undefined;
        }

        return lastPage.page + 1;
      },
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={css.catalogPage}>
      <div className={css.filtersWrapper}>
        <Filter
          draftFilters={draftFilters}
          setDraftFilters={setDraftFilters}
          setFilters={setFilters}
        />
      </div>

      <div className={css.cardsList}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

        {hasNextPage && (
          <LoadMoreButton
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
          />
        )}
      </div>
    </div>
  );
}
