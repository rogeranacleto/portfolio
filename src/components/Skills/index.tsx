import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLinux } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";

export function Skills() {
  return (
    <div className="max-w-screen w-full mb-110 flex justify-center pl-10 pr-10">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center border border-solid border-black rounded-3xl bg-[#c2bebe15] max-w-30 mb-5">
            <h1 className="text-sm font-medium text-white pl-4 pr-4 pt-2 pb-2">
              Tecnologias
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col mb-8 pl-10 pr-10">
            <p className="text-white mt-4 text-6xl font-medium max-w-5xl text-center mb-4">
              Tecnologias que utilizo no <br /> processo de desenvolvimento
            </p>
            <div className="h-1 max-w-150 w-full bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-5"></div>
          </div>
        </div>
        <div className="mt-15 w-full max-w-[1200px] flex flex-wrap gap-10 justify-center">
          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoJavascript className="text-white text-5xl" />
            </div>
            <span
              className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-black text-white text-sm px-2 py-1 rounded-lg
                whitespace-nowrap z-10"
            >
              JavaScript
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <BiLogoTypescript className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              TypeScript
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoReact className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              ReactJS
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <SiNextdotjs className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              NextJS
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <SiTailwindcss className="text-white text-5xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Tailwind CSS
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoNodejs className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              NodeJS
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <FaHtml5 className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              HTML
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoCss3 className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              CSS
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <FaGitAlt className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Git
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <FaGithub className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              GitHub
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoFigma className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Figma
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <SiVite className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Vite
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <BiLogoPostgresql className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              PostgreSQL
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <FaLinux className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Linux
            </span>
          </div>

          <div className="relative group">
            <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-full flex items-center justify-center hover:scale-110 duration-300 shadow-[0_1px_10px_#fff] hover:shadow-[0_4px_20px_#fff]">
              <IoLogoFirebase className="text-white text-6xl" />
            </div>
            <span
              className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
            >
              Firebase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
