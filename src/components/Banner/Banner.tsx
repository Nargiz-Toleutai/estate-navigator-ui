import { useEffect, useState } from "react";
import styles from "./banner.module.scss";
import CommonButton from "@/components/CommonButton/button";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerInfo}>
            <h1>
              <span>
                <span>
                  Быстрая проверка&nbsp;
                  <br />
                </span>
                возможности&nbsp;
                <br />
                открытия ПВЗ
              </span>
            </h1>
            <div>
              <span>
                Отчет за 15 секунд&nbsp;
                <br />
                Результат — <span>за 0 ₽</span>
              </span>
            </div>
            <CommonButton className={styles.bannerButton} link="#search">
              Проверить
            </CommonButton>
          </div>
          <div className={styles.bannerMedia}>
            <video
              playsInline
              autoPlay
              loop
              muted
              preload="auto"
              controlsList="nodownload"
            >
              <source
                src="https://www.esphere.ru/upload/videos/255/a0cth0094tpq0w1zweqcrnr1lv97frkc/Find_docs_SPFL_600x600.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
