import React from 'react'

const certificates = () => {
    return (
        <div className='bg-inherit mt-16'>
            <section className="bg-white  dark:bg-inherit">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center mb-9">
                        <h1 className="text-2xl  font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Certificates Obtained
                        </h1>

                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="/dastavej.jpg"
                                alt=""
                            />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    Flood prediction using Machine Learning
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                Published research paper 'Flood Prediction Using ML' in Dastavej Research Journal, showcasing expertise in machine learning and disaster prediction.
                                </p>

                                <p className="mt-3 text-sm text-blue-500">Dastavej Research Journal</p>
                            </div>
                        </div>

                        {/* <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    How to use sticky note for problem solving
                                </a>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                    laudantium quia tempore delect
                                </p>

                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>*/}
                    </div> 
                </div>
            </section>

        </div>
    )
}

export default certificates
