"use client"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css';

import { offerDetails } from "../data/data";

interface DetailsProps {
    index: number;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Details: React.FC<DetailsProps> = ({ setVisible, index }) => {

    const data = offerDetails;

    return (
        <div>

            <section
                id='details'
                className='relative flex flex-col overflow-auto rounded-tl-3xl sm:w-4/5 xl:w-3/5 mx-auto h-[70dvh]'>

                <div className="absolute right-0">
                    <button onClick={() => setVisible(false)} className='p-3 sm:p-5'>
                        <FontAwesomeIcon className='font-black text-3xl' icon={faXmark} />
                    </button>
                </div>



                <div className='h-10/12  flex flex-col justify-between gap-8 p-10 sm:p-16 text-base sm:text-lg text-left'>

                    <span className="border-style text-gray-500 rounded-full w-max p-2 px-6">Servicii</span>

                    <h3 className='font-black text-2xl md:text-4xl '>{data[index].title}</h3>

                    <p>{data[index].text}</p>


                    <button className='border rounded-xl p-3 w-6/12 sm:w-3/12'>Contact</button>

                </div>

            </section>
        </div>

    )
}