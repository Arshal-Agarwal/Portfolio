import React from 'react'

function about() {
  return (
    <div className='mt-16 pt-2'>
      <header className="bg-white border-b-2 dark:bg-gray-900">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                About <span className="text-blue-600 dark:text-blue-400">Me</span>
              </h2>

              <p className="mt-4 text-sm font-mono text-gray-500 dark:text-gray-400 lg:text-base">
                I am a passionate 2nd-year Computer Science student with a solid foundation in web development and a keen interest in app development and machine learning. With experience in technologies like React.js, Node.js, Next.js, Express.js, MongoDB, and MySQL, I have developed multiple projects . I am currently expanding my skill set by learning numerous technologies, while continuously improving my expertise in my existing skillset.

                <br />
                <br />

                My curiosity extends beyond coding—I have a strong drive to explore innovative fields, including building my own programming language and compiler. Dedicated to continuous learning, I aim to hone my skills to kickstart a successful career through internships and impactful projects.
              </p>


            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage: "url('/Arshal.jpg')",
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>

        </div>
      </header>


      <header className="bg-white dark:bg-gray-900 border-b-2">


        <div className="lg:flex lg:flex-row-reverse">
          {/* Text Section */}
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Formal <span className="text-blue-600 dark:text-blue-400">Education</span>
              </h2>

              <p className="mt-4 font-mono text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                I completed my 10th grade at Hutchings High School, Pune, and pursued my 10+2 at Bishops School, Camp, Pune. Currently, I am pursuing a Bachelors of Technology in Computer Engineering at Vishwakarma Institute of Technology, Pune, affiliated with Savitribai Phule Pune University.
              </p>


            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage:
                  "url('/education.webp')",
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-900 py-8">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              My Tech Stack
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-gray-500 font-mono dark:text-gray-400">
              A curated collection of tools and technologies I use to build and innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "C", icon: "/C.png", description: "General-purpose programming language" },
              { name: "C++", icon: "/cpp.png", description: "Object-oriented programming language" },
              { name: "Java", icon: "/java.png", description: "Object-oriented programming language" },
              { name: "HTML", icon: "/html.png", description: "Structuring the web" },
              { name: "CSS", icon: "/css.png", description: "Styling web pages" },
              { name: "JavaScript", icon: "/js.png", description: "Dynamic interactivity" },
              { name: "Tailwind CSS", icon: "/tw.png", description: "Dynamic Styling" },
              { name: "React.js", icon: "/react.png", description: "Building UI components" },
              { name: "Node.js", icon: "/nodejs.png", description: "Backend scripting" },
              { name: "MongoDB", icon: "/mongo.jpg", description: "NoSQL database" },
              { name: "Express.js", icon: "/express.png", description: "Backend framework for Node.js" },
              { name: "Next.js", icon: "/nextjs.jpeg", description: "React framework for server-side rendering" },
              { name: "MySQL", icon: "/mysql.png", description: "Relational database management system" },
              { name: "Python", icon: "/python.jpeg", description: "General-purpose programming language" },
              { name: "R", icon: "/R.jpg", description: "Programming language for statistics and data analysis" },
              { name: "React Native", icon: "/rn.png", description: "Mobile app development using React" },
              { name: "Android Studio", icon: "/as.png", description: "IDE for Android app development" },
              { name: "Git/GitHub", icon: "/git.png", description: "Version control system" },
              { name: "Postman", icon: "/pm.png", description: "API testing and development tool" },
            ]
              .map((tech) => (
                <div key={tech.name} className="overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 bg-white dark:bg-gray-900">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{tech.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>



    </div>
  )
}

export default about
