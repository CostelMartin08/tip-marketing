"use client";

import Image from "next/image";
import Header from "./components/header";


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
        y: -500,
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: firstBoxRef.current,
          start: "top top",
          end: '+=800',
          scrub: 1,
          markers: false,
        },
      });
    }
  }, []);

  return (
    <>
      <main className="mb-20">

        <div ref={firstBoxRef} id='bg' className="h-[600px] md:h-[800px]" >

          <Header />

          <section className="flex justify-center items-center h-[500px] md:h-[600px]">

            <div className="space-y-5 flex flex-col items-center">

              <h1 className="font-black text-3xl md:text-7xl">Idei de titlu smech</h1>
              <p className="w-64 md:w-96 text-center text-sm  md:text-lg">
                Avem nevoie de un mesaj simplu si clar. Insa aici descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub titlu
              </p>

            </div>

          </section>

        </div>

        <section ref={lastBoxRef} className="last-box h-dvh rounded-3xl">
          <p className="p-9">Continut</p>
        </section>


      </main>

      <Footer />

    </>
  );
}
