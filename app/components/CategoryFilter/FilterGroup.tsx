import { useState } from "react";
import css from "./CategoryFilter.module.css";

export default function FilterGroup() {
  const [camperForm, setCamperForm] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  return (
    <>
      <h2 className={css.filter}>Filters</h2>

      <div className={css.group}>
        <p className={css.groupTitle}>Camper form</p>
        <div className={css.circleList}>
          {["Alcove", "Panel", "Integr", "Semi"].map((item) => (
            <div
              key={item}
              className={css.circleRow}
              onClick={() => setCamperForm(item)}
            >
              <span
                className={`${css.circle} ${
                  camperForm === item ? css.active : ""
                }`}
              ></span>
              <span className={css.label}>{item}</span>
            </div>
          ))}
        </div>

        <p className={css.groupTitle}>Engine</p>
        <div className={css.circleList}>
          {["Diesel", "Petrol", "Hybrid", "Electric"].map((item) => (
            <div
              key={item}
              className={css.circleRow}
              onClick={() => setEngine(item)}
            >
              <span
                className={`${css.circle} ${engine === item ? css.active : ""}`}
              ></span>
              <span className={css.label}>{item}</span>
            </div>
          ))}
        </div>

        <p className={css.groupTitle}>Transmission</p>
        <div className={css.circleList}>
          {["Automatic", "Manual"].map((item) => (
            <div
              key={item}
              className={css.circleRow}
              onClick={() => setTransmission(item)}
            >
              <span
                className={`${css.circle} ${
                  transmission === item ? css.active : ""
                }`}
              ></span>
              <span className={css.label}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
