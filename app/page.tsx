"use client"

import Image from "next/image";
import Header from "./components/header";
import Banner from "@/public/brandImage/banner.svg";
import AltBanner from '@/public/brandImage/bannerT.svg';

export default function Home() {
  return (
    <main>

      <Header />

      <section className="flex justify-center md:h-[700px] w-dvw">

        <Image
          className="object-cover"
          width={30000}
          height={500}
          src={AltBanner}
          alt="banner">
        </Image>
      </section>

    </main>
  );
}
