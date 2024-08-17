import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <main>
            <Head>
                <meta name="description" content="Know your business geo"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </main>
    );
}
