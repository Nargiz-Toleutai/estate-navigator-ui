import Head from "next/head";
import styles from "@/styles/landing.module.scss";
import CommonButton from "@/components/CommonButton/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent } from "react";
import ThemeColorPicker from "@/components/ThemeColorPicker/picker";
import { Toaster } from "react-hot-toast";
import Navigation from "@/components/LandingNavigation";
import LandingNavigation from "@/components/LandingNavigation";

// import Accordion from "@/components/Accordion/accordion";

function checkAvitoRealEstateUrl(url: string): boolean {
  const pattern =
    /^https:\/\/www\.avito\.ru\/.*?\/kommercheskaya_nedvizhimost\/[a-z0-9_\-.]+$/;
  return pattern.test(url);
}

export default function Home() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const url = formData.get("url") as string;

    if (!checkAvitoRealEstateUrl(url)) {
      alert("Некорректная ссылка на объявление в Avito");
      return;
    }

    router.push(`/reports/${btoa(url)}`);
  };

  return (
    <>
      <Head>
        <title>PerfectPoint.ai</title>
      </Head>

      <Toaster position="top-center" />

      <LandingNavigation />

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
              <CommonButton link="#search">Проверить</CommonButton>
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

      <section id="check" className={styles.check}>
        <div className={styles.container}>
          <div className={styles.checkContent}>
            <h2>Что получите в отчете</h2>
            <ul>
              {[
                {
                  title: "Оценка площади",
                  description:
                    "Проверка адреса на тепловой</br>карте маркетплейсов",
                },
                {
                  title: "Условия",
                  description:
                    "Соответствие требованиям и</br>правилам франшиз ПВЗ",
                },
                {
                  title: "Конкуренты",
                  description:
                    "Расстояние до существующих</br>точек пунктов выдачи",
                },
              ].map((check, index) => (
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

      <section id="work" className={styles.work}>
        <div className={styles.container}>
          <div className={styles.workContent}>
            <div className={styles.workInfo}>
              <h2>Это работает так</h2>
              <ul>
                {[
                  "Выбирете доступное помещение под аренду или покупку на Авито",
                  "Вставьте ссылку на объявление в поле поиска",
                  "Получите отчет со всеми данными за 15 секунд",
                ].map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
              <CommonButton link="#search">Проверить</CommonButton>
            </div>

            <div className={styles.workMedia}>
              <img
                src="https://www.esphere.ru/upload/images/15a/sa2v74zlq395gx2ad9idg5zpwxpff9w4/proverki.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sources" className={styles.sources}>
        <div className={styles.container}>
          <div className={styles.sourcesContent}>
            <h2>Наши партнеры</h2>
            <ul>
              {[
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
              ].map((source, index) => (
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

      <section id="search" className={styles.search}>
        <div className={styles.container}>
          <div className={styles.searchContent}>
            <h2>Получите бесплатный отчет</h2>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Ссылка на объявление в Avito"
                name="url"
              />
              <CommonButton type="submit">Проверить</CommonButton>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.faqContent}>
            <h2>Часто задаваемые вопросы</h2>
            <div>
              {[
                {
                  question:
                    "Почему важно предварительно проверять доступность адреса?",
                  answer:
                    "7 из 10 ПВЗ закрываются через 6 месяцев после открытия или работают с около нулевой доходностью. Это связано с тем, что не проверив локацию многие будущие владельцы не понимают всех рисков и подводных камней этого бизнеса. Perfect Point  помогает принимать взвешенные решения и выбрать лучшее точку для открытия, сэкономив время и деньги при анализе выбранного помещения/локации",
                },
                {
                  question: "Что будет в отчете?",
                  answer:
                    "• доступность открытия ПВЗ по адресу помещения на Авито<br/>• соответствие помещения требованиям франшиз WB, OZON и YMarket<br/>• отдаленность от существующих ПВЗ в локации открытия",
                },
                {
                  question: "Почему я могу доверять результатам вашей оценки?",
                  answer:
                    "Мы анализируем более 20 источников данных и используем <b>AI-инструменты</b>, чтобы предоставить максимально достоверную и независимую оценку перспективности открытия ПВЗ",
                },
                {
                  question: "Почему только Авито?",
                  answer:
                    "В данный момент мы находится на стадии бета-тестирования и работаем над расширением функционала сервиса PerfectPoint",
                },
                {
                  question:
                    "К кому я могу обратиться и задать вопросы о сервисе?",
                  answer:
                    "Напишите нам на почту perfectpoint@gmail.com, и мы с радостью ответим на ваши вопросы",
                },
                {
                  question: "Где можно почитать о новостях проекта?",
                  answer:
                    "Подписывайтесь на наш телеграм канала - ссылка канала в телеге",
                },
              ].map((faq, index) => (
                <details key={index} name="faq">
                  <summary>
                    <h4>{faq.question}</h4>
                  </summary>
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div>
              <h3>PerfectPoint</h3>
            </div>
            <div>
              <p>
                Сервис применяет рекомендательные технологии: предоставляет
                информацию на основе сбора, систематизации и анализа сведений,
                относящихся к предпочтениям пользователей интернета, находящихся
                в России Использование сайта означает согласие с
                Пользовательским соглашением и Политикой обработки персональных
                данных
              </p>
            </div>
            <div>
              <h3>Контакты</h3>
              <p>Telegram: @perfectpoint</p>
            </div>
          </div>
        </div>
      </footer>

      <ThemeColorPicker />
    </>
  );
}
