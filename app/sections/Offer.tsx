"use client"

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface OfferProps {
    logo: IconProp;
    title: string;
    message: string;
    index:  number;
    visible: React.Dispatch<React.SetStateAction<boolean>>;
    setNumber: React.Dispatch<React.SetStateAction<number>>;
  }

  const Offer: React.FC<OfferProps> = ({ logo, title, message, visible, setNumber, index }) => {


    return (


        <div className='card rounded-3xl md:size-full flex flex-col gap-8 p-8 text-left space-y-4 md:space-y-0'>
            <div className='bg-white size-16 flex justify-center items-center rounded-full'>
                <FontAwesomeIcon className='text-black text-2xl' icon={logo} />
            
            </div>
            <h2 className='text-xl font-black whitespace-nowrap overflow-hidden'>{title}</h2>
            <p className='font-extralight'>{message}</p>


            <button onClick={() => { visible(true); setNumber(index as number); }}  className='font-extralight' >Află mai multe
                <FontAwesomeIcon className='px-2' icon={faArrowRight} />
            </button>
        </div>


    )
}

export default Offer;