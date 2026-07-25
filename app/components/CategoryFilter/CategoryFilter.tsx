"use client";
import css from "./CategoryFilter.module.css";
import { MdOutlineMap } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import FilterGroup from "./FilterGroup";
import { CamperFilters } from "@/app/types/filter";

interface FilterProp {
  draftFilters: CamperFilters;
  setDraftFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  setFilters: React.Dispatch<React.SetStateAction<CamperFilters>>;
  onClearFilters: () => void;
}
export default function Filter({
  draftFilters,
  setDraftFilters,
  setFilters,
  onClearFilters,
}: FilterProp) {
  const updateFilter = (key: keyof CamperFilters, value: string) => {
    setDraftFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handlSearch = () => {
    setFilters(draftFilters);
  };

  return (
    <div className={css.container}>
      <p className={css.location}>Location</p>

      <div className={css.inputWrapper}>
        <MdOutlineMap className={css.icon} />
        <input
          className={css.input}
          type="text"
          value={draftFilters.location}
          onChange={(e) => updateFilter("location", e.target.value)}
          placeholder="Kyiv"
        />
      </div>

      <FilterGroup filters={draftFilters} updateFilter={updateFilter} />

      <button type="button" className={css.searchButton} onClick={handlSearch}>
        Search
      </button>

      <button
        type="button"
        className={css.cleanButton}
        onClick={onClearFilters}
      >
        <IoMdClose className={css.closeIcon} />
        Clear filters
      </button>
    </div>
  );
}
