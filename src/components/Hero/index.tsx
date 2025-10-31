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
                    <button className="mt-5 cursor-pointer">
                        <span className="backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg text-white pt-3 pb-3 pl-5 pr-5">Sobre mim</span>
                    </button>
                </div>
            </div>
        </div>
    )
}