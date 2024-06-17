"use client";

import Image from "next/image";
import Header from "./components/header";
import AltBannerSm from "@/public/brandImage/bannerTSm.svg";
import AltBanner from '@/public/brandImage/bannerT.svg';
import Footer from "./components/footer";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const firstBoxRef = useRef(null);
  const lastBoxRef = useRef(null);

  useEffect(() => {
    if (firstBoxRef.current && lastBoxRef.current) {
      gsap.to(lastBoxRef.current, {
        y:-600,
        ease:"none",
        duration: 2,
        scrollTrigger: {
          trigger: firstBoxRef.current,
          start: "top top",
          end: '+=600',
          scrub: 1,
          markers: false,
        },
      });
    }
  }, []);
  return (
    <>
      <main className="mb-20">

        <Header />

        <section ref={firstBoxRef} className="first-box flex justify-center">

          <section className="hidden md:block relative w-full h-[800px]">
            <Image
              src={AltBanner}
              alt="banner"
              className="w-full h-full object-cover image"
            />

            <div className="absolute top-32 left-28 xl:left-80 z-40">
              <h1 className="font-black text-5xl">Idei de titlu smech</h1>
              <p className="w-96 text-lg">
                Avem nevoie de un mesaj simplu si clar. Insa aici descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub titlu
              </p>
            </div>
          </section>

          <section className="block relative md:hidden w-full overflow-hidden">
            <Image
              src={AltBannerSm}
              alt="banner"
              className="object-cover w-full h-auto"
            />

            <div className="absolute top-16 sm:top-36 sm:left-14 left-10 z-40">
              <h1 className="font-black text-3xl sm:text-4xl">Idei de titlu smech</h1>
              <p className="w-56 sm:w-96 text-xs sm:text-lg">
                Avem nevoie de un mesaj simplu si clar. Insa aici descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub titlu
              </p>
            </div>
          </section>
        </section>

        <section ref={lastBoxRef} className="last-box border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>

        <section className=" border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>
        <section className="border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>
        <section className=" border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>
        <section className=" border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>
        <section className=" border-2 h-96 rounded-3xl">
          <p className="p-9">Continut</p>
        </section>

      </main>


    </>
  );
}
