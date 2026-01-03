import { FaComputer } from "react-icons/fa6";
import { LuCable } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";
export function About(){
    return (
      <div className="min-h-screen flex justify-center max-w-screen w-full flex-col mb-100" id="about">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center border border-solid border-black rounded-3xl bg-[#c2bebe15] max-w-30 mb-5">
            <h1 className="text-sm font-medium text-white pl-4 pr-4 pt-2 pb-2">
              Sobre mim
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col mb-8 pl-10 pr-10">
            <p className="text-white mt-4 text-6xl font-medium max-w-4xl text-center mb-4">
              Saiba um pouco mais sobre mim e o que eu desenvolvo
            </p>
            <div className="h-1 max-w-150 w-full bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-5"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-15 flex-wrap m-8 flex-col">
          <div className="max-w-250 w-full h- backdrop-blur-xs bg-white rounded-2xl p-10">
            <h1 className="text-black font-medium text-3xl">Quem sou eu?</h1>
            <p className="text-black mt-7 text-lg text-left">
              Sou Roger Anacleto da Silva,{" "}
              <span className="font-bold text-black">
                Desenvolvedor Front-End
              </span>{" "}
              com formação em andamento em Análise e Desenvolvimento de Sistemas
              (ADS). Atuo no desenvolvimento de interfaces web e procuro aliar boas
              práticas, acessibilidade e uma experiência de uso eficiente.
            </p>
            <p className="text-black mt-5 text-lg">
              Tenho como objetivo evoluir constantemente e contribuir para o
              desenvolvimento de soluções que resolvam problemas reais e gerem
              um impacto positivo.
            </p>
            <div className="flex items-center justify-center flex-col mt-10">
              <button className="bg-linear-to-r from-[#1d1c1c] via-[#4b4a4a6b] to-[#c2bebe13] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-110 duration-300 cursor-pointer">
                Download Currículo
              </button>
              <p className="text-[#c2bebee3] text-sm mt-2">
                Baixe meu currículo em PDF.
              </p>
            </div>
            <div className="h-1 w-100 bg-linear-to-r from-transparent via-black to-transparent mx-auto mt-5"></div>
          </div>

          <div className="flex gap-6 max-w-6xl flex-wrap mt-10">
            <div className="flex gap-6 flex-col">
              <h1 className="text-white font-medium text-3xl">
                O que eu desenvolvo?
              </h1>
              <div className="max-w-120 w-full min-h-100 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-2xl p-10 hover:scale-105 duration-300 ease-in-out mt-7">
                <div className="flex flex-col gap-6">
                  <div className="border border-solid border-[#c2bebee3] rounded-full w-14 h-14 flex items-center justify-center">
                    <FaComputer className="text-white" size={27} />
                  </div>
                  <h1 className="text-2xl text-white">Criação de Interfaces</h1>
                  <div>
                    <p className="text-[#c2bebee3] text-lg">
                      Desenvolvo interfaces web com {" "}
                      <span className="text-white font-bold">ReactJS</span>,{" "}
                      <span className="text-white font-bold">JavaScript</span>,{" "}
                      <span className="text-white font-bold">TypeScript</span>,{" "}
                      <span className="text-white font-bold">Tailwind CSS</span>
                      , <span className="text-white font-bold">NextJS</span> e
                      <span className="text-white font-bold"> NodeJS</span>,
                      criando experiências visuais atraentes e funcionais para
                      todos os dispositivos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-120 w-full min-h-100 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-2xl p-10 hover:scale-105 duration-300 ease-in-out">
                <div className="flex flex-col gap-6">
                  <div className="border border-solid border-[#c2bebee3] rounded-full w-14 h-14 flex items-center justify-center">
                    <LuCable className="text-white" size={27} />
                  </div>
                  <h1 className="text-2xl text-white">
                    Integração de Sistemas
                  </h1>
                  <div>
                    <p className="text-[#c2bebee3] text-lg">
                      Conecto diferentes serviços e plataformas por meio de
                      integrações com
                      <span className="text-white fon-bold"> APIs RESTful</span>
                      , automatizando tarefas e garantindo um gerenciamento de
                      dados eficiente e confiável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 flex-col">
              <div className="max-w-120 w-full min-h-100 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-2xl p-10 hover:scale-105 duration-300 ease-in-out mt-22">
                <div className="flex flex-col gap-6">
                  <div className="border border-solid border-[#c2bebee3] rounded-full w-14 h-14 flex items-center justify-center">
                    <FaCode className="text-white" size={27} />
                  </div>
                  <h1 className="text-2xl text-white">
                    Experiência Interativa
                  </h1>
                  <div>
                    <p className="text-[#c2bebee3] text-lg">
                      Desenvolvo aplicações{" "}
                      <span className="text-white font-bold">interativas </span>
                      e <span className="text-white font-bold">dinâmicas</span>,
                      focando em proporcionar uma experiência boa e agradável
                      para o usuário, tornando cada interação simples e
                      intuitiva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-120 w-full min-h-100 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-2xl p-10 hover:scale-105 duration-300 ease-in-out">
                <div className="flex flex-col gap-6">
                  <div className="border border-solid border-[#c2bebee3] rounded-full w-14 h-14 flex items-center justify-center">
                    <RiLightbulbFlashLine className="text-white" size={27} />
                  </div>
                  <h1 className="text-2xl text-white">
                    Qualidade e Escalabilidade
                  </h1>
                  <div>
                    <p className="text-[#c2bebee3] text-lg">
                      Procuro seguir boas práticas de usabilidade, performance e
                      organização do código, para que os projetos sejam mais
                      fáceis de manter, escaláveis e funcionais ao longo do
                      tempo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}