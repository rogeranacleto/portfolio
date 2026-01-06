import { PiGithubLogo } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export function Links(){
    return (
      <div>
        <div className="flex gap-3 mt-4 items-center" data-aos="fade-up" data-aos-duration="2400">
          <div className="relative group">
            <a href="https://github.com/rogeranacleto" target="_blank">
              <PiGithubLogo className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer hover:text-white hover:font-bold" />
            </a>
            <span
              className="
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        bg-black text-white text-sm px-2 py-1 rounded-lg
                        whitespace-nowrap z-10"
            >
              GitHub
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/rogeranacleto/"
              target="_blank"
            >
              <PiLinkedinLogoLight className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer mt-1 hover:text-white hover:font-bold" />
            </a>
            <span
              className="
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        bg-black text-white text-sm px-2 py-1 rounded-lg
                        whitespace-nowrap z-10"
            >
              LinkedIn
            </span>
          </div>
          <div className="relative group">
            <a
              href="https://wa.me/54992415580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer hover:text-white hover:font-bold" />
              <span
                className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10"
              >
                WhatsApp
              </span>
            </a>
          </div>
          <div className="relative group">
            <a href="/curriculo-rogeranacleto.pdf" target="_blank">
              <CiFileOn className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer hover:text-white hover:font-bold" />
              <span
                className="
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                          bg-black text-white text-sm px-2 py-1 rounded-lg
                          whitespace-nowrap z-10"
              >
                Baixar Currículo
              </span>
            </a>
          </div>
        </div>
      </div>
    );
}