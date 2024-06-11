"use client"

import Image from "next/image";
import Header from "./components/header";
import AltBannerSm from "@/public/brandImage/bannerTSm.svg";
import AltBanner from '@/public/brandImage/bannerT.svg';
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className="mb-20">

        <Header />

        <section className="flex justify-center">
          <section className="hidden md:block relative w-full h-[800px] overflow-hidden">

            <Image
              alt="banner"
              src={AltBanner}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />

            <div className="absolute top-32 left-28 xl:left-80">
              <h1 className="font-black text-5xl">
                Idei de titlu smech
              </h1>
              <p className="w-96 text-lg">Avem nevoie de un mesaj simplu si clar. Insa aici
                descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub
                titlu
              </p>
            </div>

          </section>

          <section className="block relative md:hidden w-full overflow-hidden">
            <Image
              alt="banner"
              className="object-cover w-full h-auto"
              src={AltBannerSm}
              layout="responsive"
              width={100}
              height={16.67}
            />

            <div className="absolute top-16 sm:top-36 sm:left-14 left-10">
              <h1 className="font-black text-3xl sm:text-4xl">
                Idei de titlu smech
              </h1>
              <p className="w-56 sm:w-96 text-xs sm:text-lg">Avem nevoie de un mesaj simplu si clar. Insa aici
                descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub
                titlu
              </p>
            </div>

          </section>
        </section>

      </main>

      <Footer />

    </>
  );
}
