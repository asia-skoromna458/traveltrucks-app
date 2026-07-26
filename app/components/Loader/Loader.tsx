import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <span className={css.spinner}></span>
      <div className={css.info}>
        <h2 className={css.title}>Loading tracks...</h2>
        <p className={css.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}
