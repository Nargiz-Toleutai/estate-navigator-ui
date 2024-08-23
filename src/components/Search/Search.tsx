import CommonButton from "../CommonButton/button";
import styles from "./search.module.scss";
import { SearchProps } from "./types";

const Search = ({ onSubmit }: SearchProps) => {
  return (
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
            <CommonButton className={styles.searchButton} type="submit">
              Проверить
            </CommonButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
