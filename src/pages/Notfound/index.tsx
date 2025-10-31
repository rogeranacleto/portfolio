import SpaceBackground from "../../components/SpaceBackground";
import { Link } from "react-router";
export function Notfound(){
    return(
        <div>
            <SpaceBackground/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8      ">
                <h1 className="text-6xl font-bold text-white">
                  404 - Page Not Found
                </h1>
                <Link to={"/"}>
                    <button className="backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg text-white pt-3 pb-3 pl-5 pr-5 cursor-pointer">Voltar ao início</button>
                </Link>
            </div>
        </div>
    )
}