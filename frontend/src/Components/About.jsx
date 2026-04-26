import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white px-6 sm:px-16 py-20 flex justify-center items-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-purple-400">
            About Me
          </span>
        </h2>

        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          <p>
            Hi! I’m <span className="text-purple-400 font-semibold">Maham Kanwal</span>,
            a passionate and dedicated web developer from Karachi, Pakistan.
            I love creating responsive, interactive, and user-friendly websites
            that not only look great but also provide excellent user experience.
          </p>

          <p>
            I have a strong foundation in HTML, CSS, JavaScript and React. I am
            currently expanding my skills to become a proficient
            <span className="text-purple-400 font-medium"> Mern Stack Developer</span>.
            I enjoy learning new technologies, exploring design trends, and
            applying my knowledge to build real-world projects.
          </p>

          <p>
            My goal is to develop modern web applications with clean code,
            appealing designs, and seamless functionality. I am committed to
            continuous growth and to becoming a skilled developer who can create
            meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;