import styles from "./ad-details.module.scss";
import { AdDetailsProps } from "./types";

const AdDetails = ({ ad_data }: AdDetailsProps) => {
  return (
    <div>
      <h2>{ad_data.title}</h2>
      <div>
        <div>
          <h3>Адрес</h3>
          <p>{ad_data.address}</p>
        </div>
        {ad_data.params?.raw && (
          <div>
            <h3>Параметры</h3>
            <ul>
              {Object.entries(ad_data.params.raw).map(([key, value]) => (
                <li key={key}>
                  <span>{key}</span> {value as React.ReactNode}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {ad_data.photos?.[0] && (
        <div>
          <img
            src={ad_data.photos?.[0].source}
            alt={ad_data.photos?.[0].title}
          />
        </div>
      )}
    </div>
  );
};

export default AdDetails;
