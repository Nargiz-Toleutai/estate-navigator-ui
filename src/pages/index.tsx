import Head from "next/head";
import ThemeColorPicker from "@/components/ThemeColorPicker/picker";
import { Toaster } from "react-hot-toast";
import TopBar from "@/components/TopBar/TopBar";
import Banner from "@/components/Banner/Banner";
import Check from "@/components/Check/Check";
import Work from "@/components/Work/Work";
import Sources from "@/components/Sources/Sources";
import Search from "@/components/Search/Search";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>PerfectPoint.ai</title>
      </Head>
      <Toaster position="top-center" />
      <TopBar />
      <Banner />
      <Check />
      <Work />
      <Sources />
      <Search />
      <Faq />
      <Footer />
      <ThemeColorPicker />
    </>
  );
}
