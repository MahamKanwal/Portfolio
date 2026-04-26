import React from "react";

const projects = [
  {
    title: "Frovia",
    description: "Landing page built with Tailwind CSS.",
    link: "https://mahamkanwal.github.io/Frovia/",
  },
  {
    title: "Premium Student Directory",
    description: "A comprehensive student directory with search and filtering capabilities.",
    link: "https://mahamkanwal.github.io/studentData/",
  },
  {
    title: "Quiz App",
    description: "Interactive quiz app created using modern web technologies.",
    link: "https://mahamkanwal.github.io/QuizMaster-Pro/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    link: "https://mahamkanwal.github.io/Portfolio/",
  },
  {
    title: "Calculaotr",
    description: "A task management app with clean UI and local storage support.",
    link: "https://mahamkanwal.github.io/Calculator/",
  },
  {
    title: "E-commerce Store",
    description: "A modern e-commerce platform with a sleek design and seamless shopping experience.",
    link: "https://mahamkanwal.github.io/Redux-RTK/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-[10vw] bg-gradient-to-br from-[#12081f] via-[#1a0b2e] to-[#2d1b4e] text-white text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        <span className="text-purple-400">Projects</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl max-w-[320px] bg-[#24123a] border border-purple-500/20 hover:border-purple-400 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-3 text-white">
              {project.title}
            </h3>

            <p className="mb-5 text-gray-300">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;