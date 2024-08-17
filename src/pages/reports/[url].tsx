import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import styles from "@/styles/report.module.scss";

function checkAvitoRealEstateUrl(url: string): boolean {
    const pattern = /^https:\/\/www\.avito\.ru\/.*?\/kommercheskaya_nedvizhimost\/[a-z0-9_\-.]+$/;
    return pattern.test(url);
}

export default function Report() {
    const router = useRouter()
    const canvasRef = useRef(null);

    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const wildberries = result?.point_data?.wildberries;
    const ozon = result?.point_data.ozon;
    const yandex_market = result?.point_data.yandex;

    useEffect(() => {
        const base64url = router.query.url;

        if (!base64url) return;

        const url = atob(base64url as string);

        setLoading(true);

        fetch(`/api/v1/check_ad/avito`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: url})
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((data) => {
            setResult(data);
        }).catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [router]);

    return (
        <>
            <section className={styles.navigation}>
                <div className={styles.container}>
                    <div className={styles.navigationContent}>
                        <div>
                            PerfectPoint
                        </div>
                        <ul>
                            {[
                                {
                                    title: '',
                                    href: '',
                                }
                            ].map(nav => (
                                <li key={nav.href}><a href={nav.href}>{nav.title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {loading && <div className={styles.loading}>Загрузка...</div>}

            <div className={styles.report}>
                <div className={styles.container}>
                    {result && (
                        <div className={styles.reportContent}>
                            <h2>{result.ad_data.title}</h2>
                            <div>
                                <div>
                                    <div>
                                        <h3>Адрес</h3>
                                        <p>{result.ad_data.address}</p>
                                    </div>

                                    {result.ad_data.params?.raw && <div>
                                        <h3>Параметры</h3>
                                        <ul>
                                            {Object.entries(result.ad_data.params.raw).map(([key, value]) => (
                                                <li key={key}><span>{key}</span> {value as React.ReactNode}</li>
                                            ))}
                                        </ul>
                                    </div>}
                                </div>
                                <div>
                                    {result.ad_data.photos?.[0] &&
                                        <img src={result.ad_data.photos?.[0].source}
                                             alt={result.ad_data.photos?.[0].title}/>}
                                </div>
                            </div>

                            <hr/>

                            <div>
                                {wildberries && <div>
                                    <h4>Wildberries</h4>
                                    <p>{wildberries.can_open ? wildberries.description : 'Нельзя открыть'}</p>
                                    {wildberries.point_info?.subsidy_info?.subsidy_type_description &&
                                        <p>{wildberries.point_info?.subsidy_info?.subsidy_type_description}</p>}
                                    {wildberries.point_info?.zone_info?.description &&
                                        <p>{wildberries.point_info?.zone_info?.description}</p>}

                                    {wildberries.point_info?.area_info?.min_area && <p>
                                        <span>Минимальная площадь: </span>{wildberries.point_info.area_info.min_area} м2
                                    </p>}
                                </div>}

                                {ozon && <div>
                                    <h4>Ozon</h4>
                                    <p>{ozon.allowed ? 'Можно открыть' : 'Нельзя открыть'}</p>
                                </div>}

                                {yandex_market && <div>
                                    <h4>Яндекс.Маркет</h4>
                                    <p>{yandex_market.pointAvailability?.tariff === 'SUBSIDY' ? 'Можно открыть' : 'Нельзя открыть'}</p>
                                </div>}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div>
                            <h3>PerfectPoint</h3>

                        </div>
                        <div>
                            <p>Сервис применяет рекомендательные технологии: предоставляет информацию на основе сбора,
                                систематизации и анализа сведений, относящихся к предпочтениям пользователей интернета,
                                находящихся в России
                                Использование сайта означает согласие с Пользовательским соглашением и Политикой
                                обработки персональных данных</p>
                        </div>
                        <div>
                            <h3>Контакты</h3>
                            <p>Telegram: @perfectpoint</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}