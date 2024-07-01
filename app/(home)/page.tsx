"use client"
import './style.css';

import gsap from 'gsap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Key, useEffect, useRef } from "react";

import Header from '../sections/Header';
import SectionText from '../components/SectionText';
import Offer from '../sections/Offer';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

import { offerData, sectionData, projectData } from '../data/data';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {

  const firstBoxRef = useRef(null);
  const lastBoxRef = useRef(null);

  let despreNoi = sectionData.despreNoi;
  let serviciileNoastre = sectionData.serviciileNoastre;
  let proiecteleNoastre = sectionData.proiecteleNoastre;
  let contact = sectionData.contact;

  let offer = offerData;
  let projects = projectData;

  useEffect(() => {

    if (firstBoxRef.current && lastBoxRef.current) {
      console.log(firstBoxRef)
      gsap.to(lastBoxRef.current, {
        y: -500,
        ease: "none",
        duration: 4,
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
      <main className='text-sm'>

        <div ref={firstBoxRef} id='bg' className="h-[600px] md:h-[800px]" >

          <Header />

          <section className="flex justify-center items-center h-[500px] md:h-[600px]">

            <div className="space-y-5 flex flex-col items-center">

              <h1 className="font-black text-4xl md:text-7xl lg:text-8xl">Idei de titlu smech</h1>
              <p className="w-64 md:w-96 text-center md:text-lg">
                Avem nevoie de un mesaj simplu si clar. Insa aici descriem un pic pasiumea noastra pentru marketing.
                Ca sa dea bine, ne trebuie vreo 3 randuri de text sub titlu
              </p>

            </div>

          </section>

        </div>

        <section ref={lastBoxRef} className="box flex flex-col items-center text-center space-y-16 py-8 md:p-10 rounded-t-3xl">

          <SectionText borderTitle={despreNoi.borderTitle} title={despreNoi.title} message={despreNoi.message} />


          <SectionText borderTitle={serviciileNoastre.borderTitle} title={serviciileNoastre.title} message={serviciileNoastre.message} />


          <section className='px-2 container lg:w-11/12 xl:w-10/12 grid md:grid-cols-2 xl:grid-cols-3 gap-5'>

            {offer.map((element: { logo: IconProp; title: string; message: string; }, index: Key | null | undefined) => (
              <Offer
                key={index}
                logo={element.logo}
                title={element.title}
                message={element.message}
              />
            ))}

          </section>


          <SectionText borderTitle={proiecteleNoastre.borderTitle} title={proiecteleNoastre.title} message={proiecteleNoastre.message} />


          {projects.map((element: { title: string; message: string; photo: string; }, index: Key | null | undefined) => (
            <Projects
              key={index}
              title={element.title}
              message={element.message}
              photo={element.photo}
            />
          ))}

          <SectionText borderTitle={contact.borderTitle} title={contact.title} message={contact.message} />

          <Contact />

        </section>

      </main>

      <Footer />

    </>
  );
}


export default Home;