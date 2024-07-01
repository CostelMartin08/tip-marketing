"use client"

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Value {
    nameError: string;
    phoneError: string,
    optionError: string,
    messageError: string,

}

export const ErrorsMessage: React.FC<{ value: Value }> = ({ value }) => {



    return (
        <>

            {
                value.nameError &&
                <>
                    <div className='bg-red-700 h-16 p-4 w-full xl:w-2/3 rounded-3xl flex items-center text-left'>
                        <FontAwesomeIcon className="text-[2rem]" icon={faTriangleExclamation} />
                        <h2 className='font-bold text-white ps-3'>{value.nameError}</h2>
                    </div>
                </>
            }
            {
                value.phoneError &&
                <>
                    <div className='bg-red-700 h-16 p-4 w-full xl:w-2/3 rounded-3xl flex items-center text-left'>
                        <FontAwesomeIcon className="text-[2rem]" icon={faTriangleExclamation} />
                        <h2 className='font-bold text-white ps-3'>{value.phoneError}</h2>
                    </div>
                </>
            }
            {
                value.optionError &&
                <>
                    <div className='bg-red-700 h-16 p-4 w-full xl:w-2/3 rounded-3xl flex items-center text-left'>
                        <FontAwesomeIcon className="text-[2rem]" icon={faTriangleExclamation} />
                        <h2 className='font-bold text-white ps-3'>{value.optionError}</h2>
                    </div>
                </>
            }
            {
                value.messageError &&
                <>
                    <div className='bg-red-700 h-16 p-4 w-full xl:w-2/3 rounded-3xl flex items-center text-left'>
                        <FontAwesomeIcon className="text-[2rem]" icon={faTriangleExclamation} />
                        <h2 className='font-bold text-white ps-3'>{value.messageError}</h2>
                    </div>
                </>
            }



        </>
    )
}
