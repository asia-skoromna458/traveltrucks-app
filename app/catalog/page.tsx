"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import Filter from "../components/CategoryFilter/CategoryFilter";
import CamperCard from "../components/CamperCard/CamperCard";
import EmptyState from "../components/EmptyState/EmptyState";
import LoadMoreButton from "../ui/LoadMoreButton/LoadMoreButton";

import { getAllCamper } from "../services/api";
import { CamperFilters } from "../types/filter";
import { buildCamperParams, emptyFilters } from "../utils/camperFilters";

import css from "./page.module.css";

export default function CatalogPage() {
  const [draftFilters, setDraftFilters] = useState<CamperFilters>({
    ...emptyFilters,
  });

  const [filters, setFilters] = useState<CamperFilters>({
    ...emptyFilters,
  });

  const handleClearFilters = () => {
    setDraftFilters({ ...emptyFilters });
    setFilters({ ...emptyFilters });
  };

  const handleViewAll = () => {
    setFilters({ ...emptyFilters });
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
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

  return (
    <div className={css.catalogPage}>
      <div className={css.filtersWrapper}>
        <Filter
          draftFilters={draftFilters}
          setDraftFilters={setDraftFilters}
          setFilters={setFilters}
          onClearFilters={handleClearFilters}
        />
      </div>

      <div className={css.cardsList}>
        {campers.length > 0 ? (
          <>
            {campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}

            {hasNextPage && (
              <div className={css.loadMoreWrapper}>
                <LoadMoreButton
                  onClick={() => fetchNextPage()}
                  isLoading={isFetchingNextPage}
                />
              </div>
            )}
          </>
        ) : (
          <EmptyState
            onClearFilters={handleClearFilters}
            onVievAll={handleViewAll}
          />
        )}
      </div>
    </div>
  );
}
