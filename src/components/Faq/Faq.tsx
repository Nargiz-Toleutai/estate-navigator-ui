import Accordion from "../Accordion/accordion";
import LandingContainer from "../LandingContainer/LandingContainer";
import styles from "./faq.module.scss";

const FAQ_ITEMS = [
  {
    question: "Почему важно предварительно проверять доступность адреса?",
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
    question: "К кому я могу обратиться и задать вопросы о сервисе?",
    answer:
      "Напишите нам на почту perfectpoint@gmail.com, и мы с радостью ответим на ваши вопросы",
  },
  {
    question: "Где можно почитать о новостях проекта?",
    answer: "Подписывайтесь на наш телеграм канала - ссылка канала в телеге",
  },
];

const Faq = () => {
  return (
    <section id="faq" className={styles.faq}>
      <LandingContainer>
        <div className={styles.faqContent}>
          <h2>Часто задаваемые вопросы</h2>
          <ul>
            {FAQ_ITEMS.map((faq, index) => (
              <li key={index}>
                <Accordion title={<h4>{faq.question}</h4>} name="faq">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </Accordion>
              </li>
            ))}
          </ul>
        </div>
      </LandingContainer>
    </section>
  );
};

export default Faq;
