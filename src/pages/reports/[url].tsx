import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/report.module.scss";
import { Toaster } from "react-hot-toast";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import ReportContent from "@/components/ReportContent/ReportContent";
import Loading from "@/components/Loader/Loader";
import ErrorComponent from "@/components/ErrorComponent/ErrorComponent";

export default function Report() {
  const router = useRouter();
  const canvasRef = useRef(null);

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const wildberries = result?.point_data?.wildberries;
  const ozon = result?.point_data.ozon;
  const yandexMarket = result?.point_data.yandex;

  useEffect(() => {
    const base64url = router.query.url;

    if (!base64url) return;

    const url = atob(base64url as string);

    setLoading(true);

    fetch(`/api/v1/check_ad/avito`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  return (
    <>
      <Head>
        <title>PerfectPoint.ai</title>
      </Head>
      <Toaster position="top-center" />
      <TopBar />
      <div className={styles.report}>
        <Container className={styles.reportContainer}>
          {loading && (
            <div className={styles.loaderContainer}>
              <Loading />
              <p>Формируем отчет, подождите...</p>
            </div>
          )}
          {error && <ErrorComponent />}
          {result && (
            <ReportContent
              result={result}
              wildberries={wildberries}
              ozon={ozon}
              yandexMarket={yandexMarket}
            />
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}
