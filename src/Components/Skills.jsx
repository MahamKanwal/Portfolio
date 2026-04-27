import React from "react";
import {
  DesktopOutlined,
  DatabaseOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const front = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"];
const back = ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"];
const tools = ["Git", "GitHub", "VS Code", "Figma", "Postman", "Responsive Design"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-[10vw] bg-gradient-to-br from-[#12081f] via-[#1a0b2e] to-[#2d1b4e]"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="font-bold text-3xl sm:text-4xl text-white">
          Skills
        </h2>

        {/* Frontend */}
        <div className="rounded-xl p-[2px] bg-purple-400 transition-transform duration-300 hover:translate-y-2">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center mr-4 rounded-full bg-purple-500 text-white text-xl">
                <DesktopOutlined />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>

            <div className="flex flex-wrap gap-2 text-white">
              {front.map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-500 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-xl p-[2px] bg-purple-400 transition-transform duration-300 hover:translate-y-2">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center mr-4 rounded-full bg-pink-500 text-white text-xl">
                <DatabaseOutlined />
              </div>
              <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>

            <div className="flex flex-wrap gap-2 text-white">
              {back.map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-500 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-xl p-[2px] bg-purple-400 transition-transform duration-300 hover:translate-y-2">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center mr-4 rounded-full bg-purple-400 text-white text-xl">
                <ToolOutlined />
              </div>
              <h3 className="text-xl font-bold text-white">Tools & Others</h3>
            </div>

            <div className="flex flex-wrap gap-2 text-white">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-500 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;