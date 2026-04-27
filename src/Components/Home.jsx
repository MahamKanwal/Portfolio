import React from "react";
import { Button } from "antd";
import img from "../assests/girl.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-[10vw] pt-32 pb-20 bg-gradient-to-br from-[#12081f] via-[#1a0b2e] to-[#2d1b4e] text-white min-h-screen"
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl animate__animated animate__bounceInLeft">
          Hi! I'm {" "}
          <span className="bg-gradient-to-r text-purple-500">
            Maham Kanwal,
          </span>
        </h1>

        <p className="text-lg text-gray-300">
          a web developer from Karachi learning modern web technologies and
          building user-friendly websites.
        </p>
        <Button
          type="primary"
          size="large"
          className="!border-none !text-white"
          style={{ 
            background: "linear-gradient(90deg, #A734BD 0%, #8B5CF6 0%, black 30%)",
            border: "none"
          }}
        >
          <a href="#projects">View My Projects</a>
        </Button>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
          <img
            src={img}
            alt="Profile"
            className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-[#1a0b2e] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
