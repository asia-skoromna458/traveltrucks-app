import css from "./CategoryFilter.module.css";
import { CamperFilters } from "@/app/types/filter";
import {
  camperForms,
  camperEngines,
  camperTransmission,
} from "@/app/constants/filters";

interface Props {
  filters: CamperFilters;
  updateFilter: (key: keyof CamperFilters, value: string) => void;
}

export default function FilterGroup({ filters, updateFilter }: Props) {
  return (
    <>
      <h2 className={css.filter}>Filters</h2>

      <div className={css.group}>
        <p className={css.groupTitle}>Camper form</p>
        <div className={css.circleList}>
          {camperForms.map((item) => (
            <div
              key={item.value}
              className={css.circleRow}
              onClick={() => updateFilter("form", item.value)}
            >
              <span
                className={`${css.circle} ${
                  filters.form === item.value ? css.active : ""
                }`}
              ></span>
              <span className={css.label}>{item.label}</span>
            </div>
          ))}
        </div>

        <p className={css.groupTitle}>Engine</p>
        <div className={css.circleList}>
          {camperEngines.map((item) => (
            <div
              key={item.value}
              className={css.circleRow}
              onClick={() => updateFilter("engine", item.value)}
            >
              <span
                className={`${css.circle} ${filters.engine === item.value ? css.active : ""}`}
              ></span>
              <span className={css.label}>{item.label}</span>
            </div>
          ))}
        </div>

        <p className={css.groupTitle}>Transmission</p>
        <div className={css.circleList}>
          {camperTransmission.map((item) => (
            <div
              key={item.value}
              className={css.circleRow}
              onClick={() => updateFilter("transmission", item.value)}
            >
              <span
                className={`${css.circle} ${
                  filters.transmission === item.value ? css.active : ""
                }`}
              ></span>
              <span className={css.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
