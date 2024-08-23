import Image from "next/image";
import styles from "./sources.module.scss";

const SOURCES = [
  {
    title: "Wildberries",
    logo: "/media/logos/wildberries.png",
  },
  {
    title: "Ozon",
    logo: "/media/logos/ozon.png",
  },
  {
    title: "Yandex Market",
    logo: "/media/logos/yandexmarket.png",
  },
  {
    title: "Avito",
    logo: "/media/logos/avito.png",
  },
];

const Sources = () => {
  return (
    <section id="sources" className={styles.sources}>
      <div className={styles.container}>
        <div className={styles.sourcesContent}>
          <h2>Наши партнеры</h2>
          <ul>
            {SOURCES.map((source, index) => (
              <li key={index}>
                <div>
                  <Image src={source.logo} alt="" width={100} height={100} />
                </div>
                <h3>{source.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sources;
