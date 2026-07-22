"use client";
import { useState } from "react";
import css from "./CategoryFilter.module.css";
import { MdOutlineMap } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import FilterGroup from "./FilterGroup";

export default function Filter() {
  const [location, setLocation] = useState("Kyiv");

  const handleSearch = () => {
    console.log("Filters:", {
      location,
      // ці значення ти отримаєш з FilterGroup через props або контекст
    });
  };

  const handleClear = () => {
    setLocation("Kyiv");
    // тут ти також очистиш стани у FilterGroup
  };

  return (
    <div className={css.container}>
      <p className={css.location}>Location</p>

      <div className={css.inputWrapper}>
        <MdOutlineMap className={css.icon} />
        <input
          className={css.input}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Kyiv"
        />
      </div>

      <FilterGroup />

      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>

      <button className={css.cleanButton} onClick={handleClear}>
        <IoMdClose className={css.closeIcon} />
        Clear filters
      </button>
    </div>
  );
}
