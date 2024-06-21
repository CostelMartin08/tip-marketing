"use client"

interface SectionTextProps {
    borderTitle: string;
    title: string;
    message: string;
}


const SectionText: React.FC<SectionTextProps> = ({ borderTitle, title, message }) => {

    return (

        <>

            <span className='md:text-lg border p-2 rounded-lg'>{borderTitle}</span>

            <div className='w-4/5 md:w-2/5 font-light flex flex-col items-center justify-center'>

                <p className='text-xl font-bold md:text-5xl mb-10'>{title}</p>

                <p className='w-auto'>{message}</p>

            </div>

        </>
    )
}


export default SectionText;