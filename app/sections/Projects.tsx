"use client"

import Image from "next/image";

export interface ProjectsProps {
  title: string;
  message: string;
  photo: string;
}

const Projects: React.FC<ProjectsProps> = ({ title, message, photo }) => {


  return (

    <div className='px-2 container xl:px-10 space-y-6 text-left md:text-base'>

      <section className="first">
        <div className="outer">
          <div className="inner">

            <div className='bg one card rounded-3xl w-full grid lg:grid-cols-2 lg:h-[30rem]'>
              <div className='section-heading flex items-start flex-col justify-around space-y-8 lg:space-y-0  p-10'>
                <h2 className='text-3xl md:text-4xl font-black'>{title}</h2>
                <p className='text-left font-extralight'>{message}</p>

                <button className='border p-2 rounded-lg'>Află mai multe!</button>
              </div>
              <div className='lg:h-[30rem]'>
                <Image
                  src={photo}
                  alt='demo'
                  className='size-full rounded-b-3xl md:rounded-t-none md:rounded-r-3xl lg:rounded-l-none lg:rounded-r-3xl'
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projects;
