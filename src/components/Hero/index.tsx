import { Links } from "../Links";
export function Hero(){
function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
}    
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="pl-10 pr-10">
          <p className="text-white text-2xl text-start">Olá, meu nome é</p>
          <h1 className="text-7xl font-medium bg-linear-to-r from-white to-[#ffffff13] bg-clip-text text-transparent inline-block tracking-tight leading-tight text-center">
            Roger Anacleto da Silva
          </h1>
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-2xl mt-2">Desenvolvedor Front-End</p>
            <Links />
            <button
              className="
                            relative mt-5 cursor-pointer
                            overflow-hidden
                            rounded-lg
                            group"
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
                                pt-3 pb-3 px-10
                                transition-all duration-500
                                group-hover:border-[#c2bebee3] group-hover:text-[#c2bebee3] hover:font-bold
                                block text-lg
                                "
                onClick={() => scrollToSection("about")}
              >
                Sobre mim
              </span>
            </button>
          </div>
        </div>
      </div>
    );
}