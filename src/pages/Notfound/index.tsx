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
                    <button
                        className="
                            relative mt-5 cursor-pointer
                            overflow-hidden
                            rounded-lg
                            group
                        "
                        >
                            <span
                                className="
                                absolute inset-0
                                bg-linear-to-r from-[#c2bebec5] via-[#c2bebe6c] to-[#c2bebe2a]
                                -translate-x-full group-hover:translate-x-full
                                transition-transform duration-700
                                rounded-lg
                                "
                            ></span>
                            <span
                                className="
                                relative z-10
                                backdrop-blur-xs
                                border border-solid border-[#c2bebe15]
                                rounded-lg
                                text-white
                                pt-3 pb-3 px-5
                                transition-all duration-500
                                group-hover:border-[#c2bebee3] group-hover:text-[#c2bebee3] hover:font-bold
                                block
                                "
                            >
                                Voltar ao início
                            </span>
                        </button>
                </Link>
            </div>
        </div>
    )
}