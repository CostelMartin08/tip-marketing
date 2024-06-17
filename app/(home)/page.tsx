"use client"
import './style.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faMeta } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faW } from '@fortawesome/free-solid-svg-icons';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const firstBoxRef = useRef(null);
  const lastBoxRef = useRef(null);

  useEffect(() => {

    if (firstBoxRef.current && lastBoxRef.current) {
      gsap.to(lastBoxRef.current, {
        y: -600,
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
      <main>

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

        <section ref={lastBoxRef} className="box flex flex-col items-center text-center space-y-16 py-8 px-3 md:p-10  rounded-3xl">

          <span className='border-2 p-2 rounded-lg'>Despre noi</span>

          <div className='w-4/5 md-2/5 font-light flex flex-col items-center justify-center'>

            <p className='text-xl md:text-4xl mb-10'>DE CE NE-AI ALEGE?</p>
            <p className='text-sm w-auto'>Fusce condimentum lorem ac ex venenatis accumsan. Aliquam
              fermentum ex non mi posuere semper. Ut sed nunc velit. In
              sollicitudin mauris ut ipsum fermentum, in vulputate ipsum elementum.
              Aliquam sit amet bibendum arcu. Sed nulla lacus, tincidunt vel ligula
              vel.
            </p>

          </div>

          {/*Serviciile noastre */}
          <span className='border-2 p-2 rounded-lg'>Serviciile Noastre</span>


          <div className='w-4/5 md:w-2/5 font-light flex flex-col items-center justify-center'>

            <p className='text-xl md:text-4xl mb-10'>CU CE VĂ PUTEM AJUTA?</p>
            <p className='text-sm w-auto'>
              Ut sit amet quam faucibus turpis pulvinar efficitur. Sed consectetur pharetra
              facilisis. Donec at diam semper, sodales lectus in, pharetra lectus. Donec
              ullamcorper ante ac tellus sollicitudin dictum.
            </p>

          </div>


          <section className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 space-y-3 md:gap-2'>
            {/*Card 1  */}
            <div className='card rounded-3xl w-full md:w-96 h-96 flex flex-col gap-8 p-8 text-left'>
              <div className='bg-white size-16 flex justify-center items-center rounded-full'>
                <FontAwesomeIcon className='text-black text-2xl' icon={faMeta} />
              </div>
              <h2 className='text-xl font-black'>META MARKETING</h2>
              <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,
                turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus.</p>


              <a className='font-extralight' href="#">cere ofertă
                <FontAwesomeIcon className='px-2' icon={faArrowRight} />
              </a>
            </div>

            {/*Card 2  */}
            <div className='card rounded-3xl w-full md:w-96 h-96 flex flex-col gap-8 p-8 text-left'>
              <div className='bg-white size-16 flex justify-center items-center rounded-full'>
                <FontAwesomeIcon className='text-black text-2xl' icon={faW} />
              </div>
              <h2 className='text-xl font-black'>WEB DEVELOPMENT</h2>
              <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,
                turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus.</p>


              <a className='font-extralight' href="#">cere ofertă
                <FontAwesomeIcon className='px-2' icon={faArrowRight} />
              </a>
            </div>

            {/*Card 3  */}
            <div className='card rounded-3xl w-full md:w-96 h-96 flex flex-col gap-8 p-8 text-left'>
              <div className='bg-white size-16 flex justify-center items-center rounded-full'>
                <FontAwesomeIcon className='text-black text-2xl' icon={faInstagram} />
              </div>
              <h2 className='text-xl font-black'>INSTAGRAM MANAGEMENT</h2>
              <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, est sit amet molestie aliquet,
                turpis augue convallis dolor, nec tincidunt ligula neque vestibulum turpis. Mauris quis velit a risus.</p>


              <a className='font-extralight' href="#">cere ofertă
                <FontAwesomeIcon className='px-2' icon={faArrowRight} />
              </a>
            </div>

          </section>

          {/*Proiectele noastre*/}

          <span className='border-2 p-2 rounded-lg'>Proiectele noastre</span>

          <div className='w-4/5 md:w-2/5 font-light flex flex-col items-center justify-center'>

            <p className='text-xl md:text-4xl mb-10'>TREBUIE SĂ TE CONVINGI!</p>
            <p className='text-sm w-auto'>
              Ut sit amet quam faucibus turpis pulvinar efficitur. Sed consectetur pharetra
              facilisis. Donec at diam semper, sodales lectus in, pharetra lectus. Donec
              ullamcorper ante ac tellus sollicitudin dictum.
            </p>

          </div>

          <section className='w-full'>



            <div className='card rounded-3xl w-5/5 h-[30rem]'>

            </div>


          </section>



        </section>


      </main>

      <Footer />

    </>
  );
}
