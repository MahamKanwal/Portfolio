import React from "react";
import { HeartFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[#0f061a] text-white pt-5 pb-6 px-6 sm:px-[10vw] border-purple-500/20">

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm leading-6 border-purple-500/10 pt-4">
        Copyright Portfolio All Rights Reserved
        <br />
        Made with <HeartFilled className="text-pink-500" /> by MK ©{" "}
        {new Date().getFullYear()}
      </div>

    </footer>
  );
};

export default Footer;