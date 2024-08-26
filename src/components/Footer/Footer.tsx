import Link from "next/link";
import LandingContainer from "../LandingContainer/LandingContainer";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LandingContainer>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h3>Perfect Point</h3>
          </div>
          <div className={styles.footerInfo}>
            <p>
              Сервис применяет рекомендательные технологии: предоставляет
              информацию на основе сбора, систематизации и анализа сведений,
              относящихся к предпочтениям пользователей интернета, находящихся в
              России.
            </p>
          </div>
          <div className={styles.footerContacts}>
            <h3>Контакты</h3>
            <a
              href="https://t.me/perfectpoint"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
        <hr className={styles.footerDivider} />
        <div className={styles.footerLegal}>
          <div className={styles.footerPolicy}>
            <p>
              Использование сайта означает согласие с
              <br />
              <Link href="/privacy-policy">Политикой конфиденциальности и</Link>
              <Link href="/terms-of-service">
                Пользовательским соглашением.
              </Link>
            </p>
          </div>

          <div className={styles.footerCopyright}>
            <p>© 2024 Perfect Point. Все права защищены.</p>
            <p>ООО &quot;Perfect Point&ldquo;, ИНН 1234567890</p>
          </div>
        </div>
      </LandingContainer>
    </footer>
  );
};

export default Footer;
