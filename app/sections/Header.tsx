"use client"
import './style.css';

import Image from "next/image";
import TipS from "@/public/brandImage/tipMarketingSecond.webp";
import Tip from "@/public/brandImage/tipMarketing.webp";

import { useState } from "react";

const Header = () => {


    const [value, setValue] = useState(false);

    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setValue(event.target.checked);
    };

    return (

        <header className='text-sm relative mx-auto px-3 w-dvw'>

            <section className="flex container xl:px-8 mx-auto justify-between items-center">

                <Image
                    className="w-[120px] md:w-[200px]"
                    alt="logo"
                    src={Tip}>

                    </Image>

                <label
                    onClick={() => setValue(!value)}
                    className="z-20 size-8  cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                >
                    <input
                        id="nav_bar_icon"
                        type="checkbox"
                        className='hidden peer'
                        onChange={handleCheckboxChange} />
                    <div
                        className={`${value ? 'bg-zinc-700' : 'bg-white'} w-2/3 h-1.5  rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]`}
                    ></div>
                    <div
                        className={`${value ? 'bg-zinc-700' : 'bg-white'} w-full h-1.5 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4`}
                    ></div>
                    <div
                        className={`${value ? 'bg-zinc-700' : 'bg-white'} w-2/3 h-1.5 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]`}
                    ></div>
                </label>
            </section>

            <section id="headerMenu" className={`transition-transform duration-700 ease-in-out ${value ? 'translate-y-0' : '-translate-y-full '}  z-10 text-zinc-700 absolute top-0 right-0 left-0 h-dvh w-dvw`}>

                <div className="size-full flex flex-col items-left md:items-center  justify-center">

                    <div>

                        <div>
                            <Image
                                width={200}
                                src={TipS}
                                alt="logo">

                            </Image>
                        </div>

                        <ul className="text-3xl sm:text-5xl space-y-5 font-black ms-10">
                            <li className="hover:text-zinc-500">
                                <a href="#">despre noi</a>
                            </li>
                            <li className="hover:text-zinc-500">
                                <a href="#">servicii</a>
                            </li>
                            <li className="hover:text-zinc-500">
                                <a href="#">pachete </a>
                            </li>
                            <li className="hover:text-zinc-500">
                                <a href="#">portofoliu</a>
                            </li>
                            <li className="hover:text-zinc-500">
                                <a href="#">contact</a>
                            </li>
                        </ul>

                        <p className="ms-10 mt-5 w-[290px]">Hai să stăm de vorbă și să stabilim ce e mai bine pentru afacerea ta!
                            Alege pachetele noastre de servicii sau bucură-te de o oferta personalizată.
                        </p>
                        <p className="ms-10 mt-5 font-black">tipmarketing.contact@gmail.com</p>
                        <p className="ms-10 font-black">+40 756 345 892</p>


                    </div>

                </div>

            </section>

        </header>

    )
}

export default Header;