import { Links } from "../Links";
export function Hero(){
    return(
        <div className="relative min-h-screen flex items-center justify-center">
            <div>
                <p className="text-white text-2xl">Olá, meu nome é</p>
                <h1 className="text-7xl font-bold bg-linear-to-r from-[#fff] via-[#ffffff9f] via-[#ffffff63] to-[#ffffff25] bg-clip-text text-transparent inline-block tracking-tight leading-tight">Roger Anacleto da Silva</h1>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-white text-2xl mt-2">Desenvolvedor Front-End</p>
                    <Links/>
                        <button
                        className="
                            relative mt-5 cursor-pointer
                            overflow-hidden  /* <-- impede o vazamento do gradiente */
                            rounded-lg
                            group
                        "
                        >
                        <span
                            className="
                            absolute inset-0
                            bg-linear-to-r from-[#3f00ac] via-[#3700964d] to-[#3f00ac3b]
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
                            group-hover:border-[#3f00ac] group-hover:text-[#3f00ac] hover:font-bold
                            block
                            "
                        >
                            Sobre mim
                        </span>
                        </button>
                </div>
            </div>
        </div>
    )
}