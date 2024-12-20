import React from 'react';

export default function ProjectCard({ img , title, description, techstack, techExplanations, githublink }) {
    return (
        <div className="bg-slate-100 dark:bg-gray-900 w-full lg:flex lg:-mx-6 mt-8">
            <div className="lg:w-3/4 w-full lg:px-6 lg:py-6">
                {/* Image */}
                <div className="relative w-full">
                    <img
                        className="object-cover object-center w-full h-auto min-h-[280px] xl:h-[28rem] rounded-sm"
                        src={img}
                        alt={title}
                    />
                </div>
                <div className="mt-6">
                    {/* Description and Title */}
                    <p className="text-sm text-blue-500 uppercase">{description}</p>
                    <h1 className="mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">{title}</h1>
                </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 lg:py-6 w-full">
                {/* Tech Stack */}
                <h3 className="text-blue-500 capitalize">Tech Stack</h3>
                <div className="mt-6">
                    {/* Tech Stack Explanation */}
                    {techstack.map((tech, index) => (
                        <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                    <p className="mt-4  text-gray-600 dark:text-gray-400 mb-4">
                    {techExplanations}
                    </p>
                </div>

               

                {/* GitHub Link */}
                <div className="mt-6">
                    <a
                        href={githublink}
                        target="_blank"
                        className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-current text-gray-800 dark:text-white">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.801 8.207 11.387.6.111.823-.261.823-.581 0-.287-.01-1.048-.015-2.064-3.338.726-4.035-1.531-4.035-1.531-.546-1.389-1.334-1.762-1.334-1.762-1.089-.744.083-.729.083-.729 1.205.085 1.837 1.246 1.837 1.246 1.07 1.836 2.808 1.303 3.495.997.108-.776.419-1.303.762-1.603-2.664-.304-5.466-1.334-5.466-5.928 0-1.307.467-2.375 1.236-3.216-.124-.303-.535-.915.117-1.876 0 0 1.006-.322 3.298 1.222a11.534 11.534 0 0 1 3.003-.404c1.015 0 2.044.133 3.003.404 2.293-1.544 3.298-1.222 3.298-1.222.653.961.241 1.573.117 1.876.77.841 1.236 1.91 1.236 3.216 0 4.595-2.804 5.623-5.469 5.928.43.373.813 1.104.813 2.226 0 1.606-.015 2.898-.015 3.289 0 .323.222.695.832.58C20.563 21.801 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
