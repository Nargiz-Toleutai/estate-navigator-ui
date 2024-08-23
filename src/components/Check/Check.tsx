import Image from "next/image";
import styles from "./check.module.scss";

const CHECK_CARDS = [
  {
    title: "Оценка площади",
    description: "Проверка адреса на тепловой</br>карте маркетплейсов",
  },
  {
    title: "Условия",
    description: "Соответствие требованиям и</br>правилам франшиз ПВЗ",
  },
  {
    title: "Конкуренты",
    description: "Расстояние до существующих</br>точек пунктов выдачи",
  },
];

const Check = () => {
  return (
    <section id="check" className={styles.check}>
      <div className={styles.container}>
        <div className={styles.checkContent}>
          <h2>Что получите в отчете</h2>
          <ul>
            {CHECK_CARDS.map((check, index) => (
              <li key={index}>
                <Image src="/media/star.png" alt="" width={50} height={50} />
                <h3>{check.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: check.description }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Check;
