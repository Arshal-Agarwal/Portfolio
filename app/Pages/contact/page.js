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



          <a className='mr-6 ' target='_blank' href="https://www.linkedin.com/in/arshal-agarwal-4b534b295/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
              <path fill="#0077B5" d="M19 0H5C3.346 0 2 1.346 2 3v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zm-11 18v-8h2v8H8zm1-9h-.001c-1.104 0-2-.897-2-2 0-1.104.897-2 2-2s2 .897 2 2c0 1.104-.896 2-2 2zm10 9h-2v-4.5c0-1.195-.646-1.794-1.676-1.794-.877 0-1.324.644-1.324 1.307V18h-2v-8h2v1.08c.624-.964 1.786-1.504 2.83-1.5 1.998 0 3.494 1.285 3.494 3.467V18z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/arshal_0410/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#F58529', stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: '#FEDA77', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#DD2A7B', stopOpacity: 1 }} />
                  <stop offset="75%" style={{ stopColor: '#8134AF', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#515BD4', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g>
                <path fill="url(#gradient)" d="M12 2.163c3.204 0 3.593.012 4.868.07 1.202.059 2.224.372 3.022 1.07.798.698 1.011 1.82 1.07 3.022.059 1.274.07 1.664.07 4.868s-.012 3.593-.07 4.868c-.059 1.202-.372 2.224-1.07 3.022-.798.698-1.82 1.011-3.022 1.07-1.274.059-1.664.07-4.868.07s-3.593-.012-4.868-.07c-1.202-.059-2.224-.372-3.022-1.07-.698-.798-1.011-1.82-1.07-3.022-.059-1.274-.07-1.664-.07-4.868s.012-3.593.07-4.868c.059-1.202.372-2.224 1.07-3.022.798-.698 1.82-1.011 3.022-1.07 1.274-.059 1.664-.07 4.868-.07zM12 0c-3.25 0-3.636.014-4.902.071-1.264.057-2.439.314-3.384.903-.944.589-1.693 1.414-2.291 2.309-.598.894-.893 1.922-.906 3.008-.057 1.265-.071 1.651-.071 4.902 0 3.25.014 3.637.071 4.902.057 1.087.308 2.114.906 3.008.598.895 1.347 1.72 2.291 2.309.945.589 2.12.846 3.384.903 1.266.057 1.652.071 4.902.071 3.25 0 3.636-.014 4.902-.071 1.264-.057 2.439-.314 3.384-.903.944-.589 1.693-1.414 2.291-2.309.598-.894.893-1.922.906-3.008.057-1.265.071-1.651.071-4.902 0-3.25-.014-3.637-.071-4.902-.057-1.087-.308-2.114-.906-3.008-.598-.895-1.347-1.72-2.291-2.309-.945-.589-2.12-.846-3.384-.903-1.266-.057-1.652-.071-4.902-.071zM12 5.838c-3.375 0-6.163 2.788-6.163 6.163 0 3.375 2.788 6.163 6.163 6.163 3.375 0 6.163-2.788 6.163-6.163 0-3.375-2.788-6.163-6.163-6.163zM12 16.75c-2.615 0-4.788-2.173-4.788-4.788s2.173-4.788 4.788-4.788c2.615 0 4.788 2.173 4.788 4.788s-2.173 4.788-4.788 4.788zM18.406 6.084c-.76 0-1.375-.615-1.375-1.375s.615-1.375 1.375-1.375c.76 0 1.375.615 1.375 1.375s-.615 1.375-1.375 1.375z" />
              </g>
            </svg>

          </a>




        </div>

      </div>
    </div>

  )
}

export default contact
