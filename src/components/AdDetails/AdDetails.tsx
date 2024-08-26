import styles from "./ad-details.module.scss";
import { AdDetailsProps } from "./types";

const AdDetails = ({ data }: AdDetailsProps) => {
  return (
    <div className={styles.adDetailsContainer}>
      <div className={styles.adContent}>
        <h2>{data.title}</h2>
        <div className={styles.adAddress}>
          <h3>Адрес</h3>
          <p>{data.address}</p>
        </div>
        {data.params?.raw && (
          <div className={styles.adParams}>
            <h3>Параметры</h3>
            <ul>
              {Object.entries(data.params.raw).map(([key, value]) => (
                <li key={key}>
                  <span className={styles.paramKey}>{key}</span>
                  <span className={styles.paramValue}>
                    {value as React.ReactNode}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {data.photos?.[0] && (
        <div className={styles.adPhoto}>
          <img
            src={data.photos?.[0].source}
            alt={data.photos?.[0].title}
            className={styles.photoImage}
          />
        </div>
      )}
    </div>
  );
};

export default AdDetails;
