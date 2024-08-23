/* eslint-disable @next/next/no-img-element */
import CommonButton from "../CommonButton/button";
import styles from "./work.module.scss";

const ACTION_LIST = [
  "Выбирете доступное помещение под аренду или покупку на Авито",
  "Вставьте ссылку на объявление в поле поиска",
  "Получите отчет со всеми данными за 15 секунд",
];

const Work = () => {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <div className={styles.workContent}>
          <h2>Это работает так</h2>
          <div className={styles.workWrapper}>
            <div className={styles.workInfo}>
              <ul>
                {ACTION_LIST.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
              <CommonButton className={styles.workMediaButton} link="#search">
                Проверить
              </CommonButton>
            </div>

            <div className={styles.workMedia}>
              <img
                src="https://www.esphere.ru/upload/images/15a/sa2v74zlq395gx2ad9idg5zpwxpff9w4/proverki.png"
                alt="Процесс проверки"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
