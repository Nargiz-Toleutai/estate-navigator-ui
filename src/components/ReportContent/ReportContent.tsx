import { ReportType } from "@/models/report";
import AdDetails from "../AdDetails/AdDetails";
import MarketplaceInfo from "../MarketplaceInfo/MarketPlaceInfo";
import styles from "./report-content.module.scss";

const ReportContent = ({
  result,
  wildberries,
  ozon,
  yandex_market,
}: ReportType) => {
  const marketplaces = [
    {
      title: "Wildberries",
      data: wildberries,
      openCheck: (data: any) => data.can_open,
    },
    { title: "Ozon", data: ozon, openCheck: (data: any) => data.allowed },
    {
      title: "Яндекс.Маркет",
      data: yandex_market,
      openCheck: (data: any) => data.pointAvailability?.tariff === "SUBSIDY",
    },
  ];

  return (
    <div className={styles.reportContent}>
      <AdDetails ad_data={result} />
      <hr />
      {marketplaces.map(
        (marketplace, index) =>
          marketplace.data && (
            <MarketplaceInfo
              key={index}
              title={marketplace.title}
              data={marketplace.data}
              openCheck={marketplace.openCheck}
            />
          )
      )}
    </div>
  );
};

export default ReportContent;
