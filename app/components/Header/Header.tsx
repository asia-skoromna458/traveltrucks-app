"use client";
import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <Image src="/Logo.svg" alt="TravelTrucks" width={136} height={16} />
        </Link>

        <nav className={css.navigation}>
          <Link
            href="/"
            className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`${css.navLink} ${pathname === "/catalog" ? css.active : ""}`}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
