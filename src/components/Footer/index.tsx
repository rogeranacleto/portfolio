import { Links } from "../Links";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export function Footer(){
    return (
      <div className="min-h-120 bg-black  pt-20 pb-40 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-full flex justify-between items-start">
          <div className="h-px w-1/2 bg-linear-to-r from-white to-transparent rounded-full"></div>
          <div className="h-px w-1/2 bg-linear-to-l from-white to-transparent rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-15 pl-10 pr-10">
          <h2
            className="text-white text-5xl font-medium text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="2400"
          >
            Vamos conversar?
          </h2>
          <p
            className="text-[#c2bebee3] text-lg mt-4 mb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="2400"
          >
            Estou aberto a novas oportunidades e desafios. Vamos conversar e
            descobrir como podemos criar resultado juntos?
          </p>
          <Links />
          <div
            className="h-px max-w-150 w-full bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-10"
            data-aos="fade-up"
            data-aos-duration="2400"
          ></div>
          <div
            className="absolute bottom-2 flex items-center flex-col"
            data-aos="fade-left"
            data-aos-duration="2400"
          >
            <p className="text-white font-bold text-center">
              Desenvolvido por Roger Anacleto • © 2025 Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/rogeranacleto"
                className="hover:scale-110 duration-300 ease-in-out"
                target="_blank"
              >
                <FiGithub className="text-white text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/rogeranacleto/"
                className="hover:scale-110 duration-300 ease-in-out"
                target="_blank"
              >
                <CiLinkedin className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}