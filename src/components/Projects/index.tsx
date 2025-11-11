import imgExpedix from "../../assets/project-expedix.png";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";

const projects = new Array(8).fill({
  title: "Expedix",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam facilis culpa eadipisicing elitionem nesciunt commodi, sapiente perspiciatis amet esse eveniet iusto dolor praesentium..",
  img: imgExpedix,
});

export function Projects() {
  return (
    <div>
      <div className="flex flex-col mt-15">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-3 text-white">
            Projetos
          </h1>
          <div className="h-0.5 w-56 bg-linear-to-r from-transparent via-[#3f00ac] to-transparent mx-auto" />
          <p className="text-[#c2bebee3] mt-4 text-lg">Alguns projetos que desenvolvi.</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-6 mt-15">
          {projects.map((p, i) => (
            <article
              key={i}
              className="max-w-120 w-full block relative bg-transparent p-6 rounded-2xl hover:scale-110 duration-300 ease-in-out hover:bg-[#3f00ac3d]"
            >
              <img src={p.img} alt={`Imagem ${p.title}`} className="rounded-3xl w-full object-cover" />
              <div className="mt-5">
                <h2 className="font-bold text-white text-2xl mt-0 mb-3">{p.title}</h2>
                <p className="text-[#c2bebefa]">{p.description}</p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <div className="border border-solid border-[#c2bebe59] rounded-full p-2 bg-black transform transition-transform duration-300 group-hover:scale-110">
                      <BiLogoTypescript className="text-[#017ACC] text-lg" />
                    </div>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-50">
                      TypeScript
                    </span>
                  </div>

                  <div className="relative group">
                    <div className="border border-solid border-[#c2bebe59] rounded-full p-2 bg-black transform transition-transform duration-300 group-hover:scale-110">
                      <IoLogoReact className="text-[#00D8FF] text-lg" />
                    </div>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-50">
                      ReactJS
                    </span>
                  </div>

                  <div className="relative group">
                    <div className="border border-solid border-[#c2bebe59] rounded-full p-2 bg-black transform transition-transform duration-300 group-hover:scale-110">
                      <IoLogoFirebase className="text-[#DD2C00] text-lg" />
                    </div>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm rounded-lg whitespace-nowrap z-50">
                      Firebase
                    </span>
                  </div>

                  <div className="relative group">
                    <div className="border border-solid border-[#c2bebe59] rounded-full p-2 bg-black transform transition-transform duration-300 group-hover:scale-110">
                      <RiTailwindCssFill className="text-[#00BCFF] text-lg" />
                    </div>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm rounded-lg whitespace-nowrap z-50">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <a
                    href="#"
                    className="text-sm text-white flex items-center gap-2 bg-[#3f00ac] pl-3.5 pr-3.5 pt-1 pb-1 rounded-lg transform transition-transform duration-300 hover:scale-110"
                  >
                    <FiExternalLink className="text-2xl" />
                    <p>Ver Projeto</p>
                  </a>

                  <div className="relative group border border-solid border-[#c2bebe15] rounded-lg text-white pt-1 pb-1 pl-2 pr-2 transform transition-all duration-300 hover:scale-110 hover:bg-[#3a0097]">
                    <a href="#" aria-label="GitHub">
                      <PiGithubLogo className="text-white text-2xl cursor-pointer" />
                    </a>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-50">
                      Ver repositório no GitHub
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
