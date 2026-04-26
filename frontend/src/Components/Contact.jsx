import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-[10vw] bg-gradient-to-br from-[#12081f] via-[#1a0b2e] to-[#2d1b4e] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-purple-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-300 mt-4">
            Let’s connect and build something amazing together 🚀
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-xl space-y-6 hover:scale-[1.02] transition">

            <h3 className="text-2xl font-bold text-purple-300">
              Get in Touch
            </h3>

            <p className="text-gray-300 leading-7">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-3">
                <EnvironmentOutlined className="text-purple-400 text-lg" />
                <span>Saddar, Karachi, Pakistan</span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneOutlined className="text-purple-400 text-lg" />
                <span>+92 342 1383428</span>
              </div>

              <div className="flex items-center gap-3">
                <MailOutlined className="text-purple-400 text-lg" />
                <span>kanwalmahsm@gmail.com</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition">

            <h3 className="text-2xl font-bold text-purple-300 mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/30 text-white outline-none focus:border-pink-400 transition"
              />

              {/* SUBJECT ADDED */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/30 text-white outline-none focus:border-pink-400 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/30 text-white outline-none focus:border-pink-400 transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/30 text-white outline-none focus:border-pink-400 transition"
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 font-semibold hover:opacity-90 transition shadow-lg"
              >
                <SendOutlined />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;