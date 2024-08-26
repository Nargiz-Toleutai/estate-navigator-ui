import { ReportType } from "@/models/report";
import AdDetails from "../AdDetails/AdDetails";
import MarketplaceInfo from "../MarketplaceInfo/MarketPlaceInfo";
import styles from "./report-content.module.scss";

const ReportContent = ({
  result,
  wildberries,
  ozon,
  yandexMarket,
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
      data: yandexMarket,
      openCheck: (data: any) => data.pointAvailability?.tariff === "SUBSIDY",
    },
  ];

  return (
    <div className={styles.reportContent}>
      <AdDetails data={result.ad_data} />
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
