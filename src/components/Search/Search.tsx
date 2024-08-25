import { checkAvitoRealEstateUrl } from "@/utils";
import CommonButton from "../CommonButton/button";
import LandingContainer from "../LandingContainer/LandingContainer";
import styles from "./search.module.scss";
import { SearchProps } from "./types";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const Search = () => {
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
    <section id="search" className={styles.search}>
      <LandingContainer>
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
      </LandingContainer>
    </section>
  );
};

export default Search;
