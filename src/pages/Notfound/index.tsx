import SpaceBackground from "../../components/SpaceBackground";
import { Link } from "react-router";
export function Notfound(){
    return(
        <div>
            <SpaceBackground/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8      ">
                <h1 className="text-6xl font-medium text-white">
                  404 - Page Not Found
                </h1>
                <Link to={"/"}>
                    <button className="text-white text-lg border border-solid border-[#8381814f] p-2 rounded-lg cursor-pointer">Voltar ao início</button>
                </Link>
            </div>
        </div>
    )
}