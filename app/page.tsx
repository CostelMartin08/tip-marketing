"use client"

import Image from "next/image";
import Header from "./components/header";
import AltBannerSm from "@/public/brandImage/bannerTSm.svg";
import AltBanner from '@/public/brandImage/bannerT.svg';

export default function Home() {
  return (
    <main>

      <Header />

      <section className="flex justify-center">

      <section className="hidden md:block relative w-dvw h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="banner"
          src={AltBanner}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </section>

        <section className="d-block md:hidden overflow-hidden">
          <Image
            alt="banner"
            className="object-cover"
            width={30000}
            height={500}
            src={AltBannerSm}>

          </Image>
        </section>

      </section>

    </main>
  );
}
