import React from 'react'
import Image from 'next/image'

function contact() {
  return (
    <div className="flex h-[100vh]">
      <div className="relative h-full w-[70%]">
        <Image
          src="/contact.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="z-10"
        />
      </div>

      <div className='mt-16 p-2 w-[30%]'>
        <p className="text-5xl font-bold shadow-lg  mx-auto w-fit mt-5">
          Contact Me!
        </p>
        {/* <hr className=''/> */}
        <div className='border-2 mt-5 mb-28'></div>
        <div className='m-8 p-3 py-2 flex w-80 border-white border-2'>
          <a href="mailto:ajagarwal2005@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-blue-500"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              <path d="M3 5l9 7 9-7" />
            </svg>
          </a>
          <div className='h-fill border-l-2 ml-4'></div>
          <div className='m-2 ml-4'>ajagarwal2005@gmail.com</div>
        </div>

        <div className='m-8 p-3 py-2 mb-12 flex w-80   border-white border-2'>
          <div className='m-2 mr-9'>arshal.agarwal23@vit.edu</div>
          <div className='h-fill border-l-2 mr-4'></div>
          <a href="mailto:arshal.agarwal23@vit.edu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-blue-500"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
              <path d="M3 5l9 7 9-7" />
            </svg>
          </a>
        </div>

        <div className='flex justify-center '>

          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="mr-8 social-icon twitter-icon fill-current text-gray-800 dark:text-white">
              <path d="M23 3a10.8 10.8 0 0 1-3.1.9 4.5 4.5 0 0 0 1.9-2.5 9.9 9.9 0 0 1-3.2 1.2 4.5 4.5 0 0 0-7.7 4.1A12.7 12.7 0 0 1 1.7 2.5a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1 9 9 0 0 1-5.6 1.9A9.9 9.9 0 0 0 12 21c7.3 0 11.3-6.1 11.3-11.3 0-.2 0-.5-.1-.7A8.7 8.7 0 0 0 23 3z" />
            </svg>
          </a>

          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="mr-8 social-icon linkedin-icon fill-current text-gray-800 dark:text-white">
              <path d="M19 0H5C3.9 0 3 .9 3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-8.5 16h-3v-7h3v7zm-1.5-8.1c-1 0-1.8-.9-1.8-1.9 0-1.1.8-1.9 1.8-1.9 1 0 1.8.8 1.8 1.9 0 1.1-.8 1.9-1.8 1.9zm9 8.1h-3v-3.5c0-1-.4-1.8-1.3-1.8-.9 0-1.7.7-1.7 1.8v3.5h-3v-7h3v1.1c.4-.7 1.1-1.1 1.8-1.1 1.3 0 2.3 1 2.3 2.6v4.3z" />
            </svg>
          </a>

          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="mr-8 social-icon instagram-icon fill-current text-gray-800 dark:text-white">
              <path d="M12 2.2c3.3 0 3.6.01 4.9.07 1.3.06 2.3.29 3.1 1.04.8.74 1.3 1.7 1.4 3.1.06 1.3.07 1.6.07 4.9s-.01 3.6-.07 4.9c-.06 1.3-.29 2.3-1.04 3.1-.74.8-1.7 1.3-3.1 1.4-1.3.06-1.6.07-4.9.07-3.3 0-3.6-.01-4.9-.07-1.3-.06-2.3-.29-3.1-1.04-.8-.74-1.3-1.7-1.4-3.1-.06-1.3-.07-1.6-.07-4.9s.01-3.6.07-4.9c.06-1.3.29-2.3 1.04-3.1.74-.8 1.7-1.3 3.1-1.4 1.3-.06 1.6-.07 4.9-.07zm0 1.8c-3.3 0-3.6.01-4.9.07-1.2.06-2.1.28-2.7.94-.7.67-.9 1.6-.95 2.7-.06 1.3-.07 1.6-.07 4.9s.01 3.6.07 4.9c.05 1.1.25 2.1.94 2.7.67.66 1.6.88 2.7.94 1.3.06 1.6.07 4.9.07s3.6-.01 4.9-.07c1.2-.06 2.1-.28 2.7-.94.7-.67.9-1.6.94-2.7.06-1.3.07-1.6.07-4.9s-.01-3.6-.07-4.9c-.05-1.1-.25-2.1-.94-2.7-.67-.66-1.6-.88-2.7-.94-1.3-.06-1.6-.07-4.9-.07z" />
            </svg>
          </a>

          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" className="mr-8 social-icon facebook-icon fill-current text-gray-800 dark:text-white">
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.492v-9.294h-3.03v-3.622h3.03v-2.67c0-3.003 1.793-4.67 4.574-4.67 1.331 0 2.628.099 2.977.145v3.433h-2.104c-1.645 0-2.029.785-2.029 1.97v2.526h4.058l-.524 3.622h-3.534V24h7.008c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>

        </div>

      </div>
    </div>

  )
}

export default contact
