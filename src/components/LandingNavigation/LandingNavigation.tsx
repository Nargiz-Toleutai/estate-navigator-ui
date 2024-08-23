import styles from "./landing-navigation.module.scss";
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
          <div className={styles.logo}>Perfect Point</div>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((nav, index) => (
              <li key={index}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
