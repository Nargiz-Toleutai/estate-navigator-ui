import { MarketplaceInfoProps } from "./types";
import styles from "./marketplace.module.scss";

const MarketplaceInfo = ({ title, data, openCheck }: MarketplaceInfoProps) => {
  return (
    <div className={styles.marketplace}>
      <h4>{title}</h4>
      <p>{openCheck(data) ? "Можно открыть" : "Нельзя открыть"}</p>
      {data.point_info?.subsidy_info?.subsidy_type_description && (
        <p>{data.point_info.subsidy_info.subsidy_type_description}</p>
      )}
      {data.point_info?.zone_info?.description && (
        <p>{data.point_info.zone_info.description}</p>
      )}
      {data.point_info?.area_info?.min_area && (
        <p>
          <span>Минимальная площадь: </span>
          {data.point_info.area_info.min_area} м<sup>2</sup>
        </p>
      )}
    </div>
  );
};

export default MarketplaceInfo;
