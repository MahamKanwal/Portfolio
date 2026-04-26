// import React, { useState } from "react";
// import { GithubOutlined, LinkedinFilled, MenuOutlined, MailOutlined, CloseOutlined } from "@ant-design/icons";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

//   return (
//     <>
//       <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//           {/* Logo */}
//           <div className="text-xl font-bold text-purple-500 cursor-pointer hover:scale-105 transition duration-300">
//             ✨Maham Kanwal
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
//             {menuItems.map((item) => (
//               <li
//                 key={item}
//                 className="cursor-pointer hover:text-purple-500 transition duration-300 relative group"
//               >
//                 {item}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>

//           {/* Social Icons and Mobile Menu */}
//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex gap-4 text-gray-300 text-xl">
//               <a
//                 href="https://www.linkedin.com/in/maham-kanwal-958545298/"
//                 className="hover:text-purple-500 hover:scale-110 transition duration-300"
//               >
//                 <LinkedinFilled />
//               </a>
//               <a
//                 href="https://github.com/MahamKanwal"
//                 className="hover:text-purple-500 hover:scale-110 transition duration-300"
//               >
//                 <GithubOutlined />
//               </a>
//             </div>
            
//             {/* Mobile Menu Button */}
//             <div
//               className="md:hidden text-gray-300 text-2xl cursor-pointer hover:text-purple-500 transition"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="fixed top-[72px] left-0 w-full z-40 bg-black/95 backdrop-blur-md border-b border-gray-800 md:hidden animate__animated animate__fadeInDown">
//           <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 font-medium">
//             {menuItems.map((item) => (
//               <li
//                 key={item}
//                 className="cursor-pointer hover:text-purple-500 transition duration-300 text-lg py-2 w-full text-center"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </li>
//             ))}
//             <div className="flex gap-6 pt-4 text-gray-300 text-2xl">
//               <a href="https://www.linkedin.com/in/maham-kanwal-958545298/" className="hover:text-purple-500 transition"><LinkedinFilled /></a>
//               <a href="https://github.com/MahamKanwal" className="hover:text-purple-500 transition"><GithubOutlined /></a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  GithubOutlined,
  LinkedinFilled,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-purple-500 cursor-pointer hover:scale-105 transition duration-300"
          >
            ✨Maham Kanwal
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="cursor-pointer hover:text-purple-500 transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons and Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-4 text-gray-300 text-xl">
              <a
                href="https://www.linkedin.com/in/maham-kanwal-958545298/"
                className="hover:text-purple-500 hover:scale-110 transition duration-300"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://github.com/MahamKanwal"
                className="hover:text-purple-500 hover:scale-110 transition duration-300"
              >
                <GithubOutlined />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden text-gray-300 text-2xl cursor-pointer hover:text-purple-500 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 bg-black/95 backdrop-blur-md border-b border-gray-800 md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-4 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-500 transition duration-300 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            <div className="flex gap-6 pt-4 text-gray-300 text-2xl">
              <a
                href="https://www.linkedin.com/in/maham-kanwal-958545298/"
                className="hover:text-purple-500 transition"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://github.com/MahamKanwal"
                className="hover:text-purple-500 transition"
              >
                <GithubOutlined />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
