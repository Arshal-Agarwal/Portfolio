import React from 'react';
import ProjectCard from '@/app/components/projectCard';

function Projects() {
  const data = [
    {
      title: "IT Job Portal - TechHire",
      description: "Web Development",
      techstack: ["NextJS", "ExpressJS", "MongoDB","Python","Tailwind CSS"],
      techExplanations: "IT Job Portal is a web platform built with the MERN stack, allowing job seekers to search and apply for IT positions, while employers can post job listings. It features user authentication, job search filters, and an admin panel for management." ,
      githublink: "https://github.com/Arshal-Agarwal/IT-Job-Portal",
      img:"/TechHire.webp"
    },
    {
      title: "Blogging Platform - Blog.",
      description: "Web Development",
      techstack: ["Next.js", "Tailwind CSS", "MySQL","Prisma"],
      techExplanations: "My blogging platform , built with the MERN stack, enables users to create, read, update, and delete blog posts. It features user authentication, rich text editing, categorization, tagging, and a dynamic timeline for browsing content, fostering an interactive blogging experience.",
      githublink: "https://github.com/Arshal-Agarwal/blogging-platform-repo",
      img:"/blog.webp"
    },
    {
      title: "Flood Prediction",
      description: "Machine Learning",
      techstack: ["Python"],
      techExplanations: "The flood prediction system, developed using Python, leverages machine learning algorithms and meteorological data to forecast potential floods. It incorporates data preprocessing, predictive modeling, and real-time alerts, helping authorities and communities prepare effectively for flood-related emergencies.",
      githublink: "https://github.com/Arshal-Agarwal/Flood_Prediction",
      img:"/flood.webp"
    },
    {
      title: "Bankruptcy Prediction",
      description: "Machine Learning",
      techstack: ["R","ShinyUI"],
      techExplanations: "The bankruptcy prediction system uses R and machine learning algorithms to analyze financial data, identifying businesses at risk of bankruptcy. It combines data preprocessing, feature selection, and predictive modeling, providing valuable insights to stakeholders for proactive financial decision-making.",
      githublink: "https://github.com/Arshal-Agarwal/Bankruptcy-prediction",
      img:"/bankrupt.jpg"
    },
  ];

  return (
    <div className="mt-16 p-4 w-full max-w-screen-xl mx-auto">
      {data.map((project, index) => (
        <div key={index} className={`w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-8`}>
          <ProjectCard
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            techExplanations={project.techExplanations}
            githublink={project.githublink}
            img={project.img}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
