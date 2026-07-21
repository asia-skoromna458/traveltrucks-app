import css from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div className={css.heroPage}>
      <div className={css.imagewrap}>
        <Image src="/Hero.jpg" fill alt="Hero picture" className={css.image} />
      </div>

      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>

        <p className={css.heroText}>
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog" className={css.catalogButton}>
          View Now
        </Link>
      </div>
    </div>
  );
}
