import { FaComputer } from "react-icons/fa6";
import { LuCable } from "react-icons/lu";
import { Links } from "../Links";
import { FaCode } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";
export function About(){
    return(
        <div className="min-h-100 flex justify-center max-w-screen w-full flex-col">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold mb-3 text-white">Sobre mim</h1>
                    <div className="h-1 w-56 bg-linear-to-r from-transparent via-white to-transparent mx-auto"></div>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-[#c2bebee3] mt-4 text-lg">Saiba mais sobre mim e minha carreira profissional.</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 mt-15 flex-wrap m-8">
                <div className="max-w-180 w-full min-h-150 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg p-10">
                    <h1 className="text-white font-bold text-3xl">Quem sou eu?</h1>
                    <p className="text-[#c2bebee3] mt-7 text-lg text-left">
                    Sou Róger Anacleto da Silva, <span className="font-bold text-white">Desenvolvedor Front-End</span> com formação em andamento em Análise e Desenvolvimento de Sistemas (ADS). 
                    Atuo no desenvolvimento de interfaces web que aliam boas práticas, acessibilidade e uma experiência de uso eficiente.
                    </p>
                    <p className="text-[#c2bebee3] mt-5 text-lg">Tenho como objetivo evoluir constantemente e contribuir para o desenvolvimento de soluções que resolvam problemas reais e gerem um impacto positivo.</p>
                    <div className="h-1 w-100 bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-32"></div>
                    <div className="flex items-center justify-center mt-15 flex-col">
                        <button className="bg-linear-to-r from-[#c2bebe] via-[#c2bebe6b] to-[#c2bebe13] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-[#c2bebee3] hover:to-[#c2bebe17] transition-all hover:scale-110 duration-300 cursor-pointer">
                        Download Currículo
                        </button>
                        <p className="text-[#c2bebee3] text-sm mt-2">Baixe meu currículo em PDF.</p>
                    </div>
                </div>

                <div className="max-w-180 w-full min-h-150 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg p-10">
                    <h1 className="text-white font-bold text-3xl mb-7">O que eu desenvolvo?</h1>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-5">
                            <div>
                                <FaComputer className="text-white"size={25}/>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[#c2bebee3] text-lg">Criação de interfaces web modernas com <span className="text-white font-bold">ReactJS</span>, <span className="text-white font-bold">JavaScript</span>, <span className="text-white font-bold">TypeScript</span>, <span className="text-white font-bold">Tailwind CSS</span>, <span className="text-white font-bold">NextsJS </span>e <span className="text-white font-bold">NodeJS</span>.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <LuCable className="text-white"size={25}/>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[#c2bebee3] text-lg">Integrações com <span className="text-white font-bold">APIs RESTful</span> e gerenciamento de dados, automatizando tarefas e conectando diferentes serviços.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <FaCode className="text-white"size={25}/>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[#c2bebee3] text-lg">Desenvolvimento de aplicações <span className="font-bold text-white">interativas</span> e <span className="font-bold text-white">dinâmicas</span>, fornecendo uma boa experiência ao usuário.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div>
                                <RiLightbulbFlashLine className="text-white"size={25}/>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[#c2bebee3] text-lg">Aplicação de boas práticas de <span className="font-bold text-white">usabilidade</span>, <span className="font-bold text-white">performance</span> e <span className="font-bold text-white">manutenção de código</span>, focando em qualidade e escalabilidade.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1 w-100 bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-15"></div>
                    <div className="flex items-center justify-center mt-12 flex-col">
                        <Links/>
                        <p className="text-[#c2bebee3] text-sm mt-2">Vamos nos conectar?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}