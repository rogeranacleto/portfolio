import { PiGithubLogo } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
export function Links(){
    return(
        <div>
            <div className="flex gap-3 mt-4 items-center">
                <div className="relative group">
                    <a href="https://github.com/rogeranacleto" target="_blank">
                        <PiGithubLogo className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer hover:text-[#3f00ac]"/>
                    </a>
                    <span className="
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        bg-black text-white text-sm px-2 py-1 rounded-lg
                        whitespace-nowrap z-10">
                        GitHub
                    </span>
                </div>
                <div className="relative group">
                    <a href="https://www.linkedin.com/in/rogeranacleto/" target="_blank">
                        <PiLinkedinLogoLight className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer mt-1 hover:text-[#3f00ac]"/>
                    </a>
                    <span className="
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        bg-black text-white text-sm px-2 py-1 rounded-lg
                        whitespace-nowrap z-10">
                        LinkedIn
                    </span>
                </div>
                <div className="relative group">
                    <CiFileOn className="text-white text-3xl hover:scale-120 duration-300 cursor-pointer hover:text-[#3f00ac]"/>
                    <span className="
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        bg-black text-white text-sm px-2 py-1 rounded-lg
                        whitespace-nowrap z-10">
                        Baixar Currículo
                    </span>
                </div>
            </div>
        </div>
    )
}