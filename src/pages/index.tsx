import Head from "next/head";
import styles from "@/styles/landing.module.scss";
import CommonButton from "@/components/CommonButton/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent } from "react";
import ThemeColorPicker from "@/components/ThemeColorPicker/picker";
import { Toaster } from "react-hot-toast";
import LandingNavigation from "@/components/LandingNavigation/LandingNavigation";
import Banner from "@/components/Banner/Banner";
import Check from "@/components/Check/Check";
import Work from "@/components/Work/Work";
import Sources from "@/components/Sources/Sources";
import Search from "@/components/Search/Search";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

// import Accordion from "@/components/Accordion/accordion";

function checkAvitoRealEstateUrl(url: string): boolean {
  const pattern =
    /^https:\/\/www\.avito\.ru\/.*?\/kommercheskaya_nedvizhimost\/[a-z0-9_\-.]+$/;
  return pattern.test(url);
}

export default function Home() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const url = formData.get("url") as string;

    if (!checkAvitoRealEstateUrl(url)) {
      alert("Некорректная ссылка на объявление в Avito");
      return;
    }

    router.push(`/reports/${btoa(url)}`);
  };

  return (
    <>
      <Head>
        <title>PerfectPoint.ai</title>
      </Head>
      <Toaster position="top-center" />
      <LandingNavigation />
      <Banner />
      <Check />
      <Work />
      <Sources />
      <Search onSubmit={onSubmit} />
      <Faq />
      <Footer />
      <ThemeColorPicker />
    </>
  );
}
