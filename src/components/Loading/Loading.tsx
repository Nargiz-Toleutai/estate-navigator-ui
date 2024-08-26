import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <span className={styles.beacon}></span>
      <p>Формируем отчет, подождите...</p>
    </div>
  );
};

export default Loading;
