"use client"
import Image from "next/image";
import Logo from "@/public/brandImage/tipMarketing.webp";

const Footer = () => {


    return (

        <footer className="container mx-auto px-6">

            <section className="first-div xl:px-8">

                <div className="flex flex-col lg:flex-row justify-between ">
                    <div className="space-y-4 font-extralight">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={400}
                            height={400}>

                        </Image>

                    </div>
                    <div className="border p-8  m-4 lg:m-8  flex flex-col items-center justify-center">
                        <div className="h-4/5 flex flex-col justify-between">
                            <div className="md:text-lg">
                                <span className="font-extralight">ia legătura cu noi</span>
                                <p className="md:text-lg lg:text-2xl font-black">tipmarketing.contact@gmail.com</p>
                            </div>
                            <div className="border"></div>
                            <div>
                                <span className="font-extralight">urmărește-ne pe instagram</span>
                                <p className="md:text-lg lg:text-2xl font-black">
                                    @tipmarketing.ro</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <div className="last-div line"></div>


            <section className="second-div space-y-8 md:space-y-0 xl:px-8 flex flex-col lg:flex-row items-left justify-between">

                <div className="px-8">
                    <p className="font-bold text-2xl pb-8">Generale</p>
                    <ul className="space-y-5 md:space-y-10 text-lg font-extralight">
                        <li>Despre campanii</li>
                        <li>Intrebari frecvente</li>
                        <li>A.N.P.C</li>
                    </ul>
                </div>
                <div className="px-8">
                    <p className="font-bold text-2xl pb-8">Utile</p>
                    <ul className="space-y-5 md:space-y-10 text-lg font-extralight">
                        <li>Blog</li>
                        <li>Termeni si conditii</li>
                        <li>Politica cookies</li>
                    </ul>
                </div>

                <div className="px-8">
                    <p className="font-bold text-2xl pb-8">Contact</p>
                    <ul className="space-y-5 md:space-y-10 text-lg font-extralight">
                        <li>Vanzari</li>
                        <li>+40745202847</li>
                        <li>tipmarketing.contact@gmail.com</li>
                    </ul>
                </div>

            </section>

            <section className="xl:px-8 py-1">

                <p className="text-base font-extralight py-3">Creat din pasiune de
                    <span className="font-bold">TipMarketing</span> pentru
                    <span className="font-bold">TipMarketing</span> ❤️
                </p>

            </section>


        </footer>
    )


}


export default Footer;