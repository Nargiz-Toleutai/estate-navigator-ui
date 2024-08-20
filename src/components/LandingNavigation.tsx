import styles from "@/styles/landing.module.scss";
import Link from "next/link";

const NAV_LINKS = [
  { title: "Описание", href: "#work" },
  { title: "Партнеры", href: "#sources" },
  { title: "Отчет", href: "#search" },
];

export default function LandingNavigation() {
  return (
    <section className={styles.navigation}>
      <div className={styles.container}>
        <nav className={styles.navigationContent}>
          <div className={styles.logo}>PerfectPoint</div>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((nav, index) => (
              <Link key={index} href={nav.href}>
                {nav.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
