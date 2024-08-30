import { processClassNames } from "@/utils";
import Container from "../Container/Container";
import styles from "./top-bar.module.scss";
import Link from "next/link";
import { TopBarProps } from "./types";

const NAV_LINKS = [
  { title: "Описание", href: "#work" },
  { title: "Партнеры", href: "#sources" },
  { title: "Отчет", href: "#search" },
];

export default function TopBar({ className }: TopBarProps) {
  return (
    <section className={processClassNames(styles.navigation, className)}>
      <Container>
        <nav className={styles.navigationContent}>
          <div className={styles.logo}>
            <Link href={"/"}>Perfect Point</Link>
          </div>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((nav, index) => (
              <li key={index}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
