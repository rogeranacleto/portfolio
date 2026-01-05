import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact, IoLogoFirebase, IoLogoCss3, IoLogoJavascript} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import dataCertaCard from "../../assets/datacerta-card.png";
import devCurrencyCard from "../../assets/devcurrency-card.png";
import expedixCard from "../../assets/expedix-card.png";
import hamburgueriaCard from "../../assets/hamburgueria-card.png";
import prevsystemCard from "../../assets/prevsystem-card.png";
import rota360Card from "../../assets/rota360-card.png";

const projectsCards = [
  {
    title: "DataCerta",
    description:
      "Projeto desenvolvido para controle de vencimentos, permitindo o cadastro de produtos e a visualização automática do status de validade com base na data atual. Conta com autenticação, área administrativa, filtros inteligentes e uma landing page institucional.",
    skills: [
      {
        TypeScript: BiLogoTypescript,
        ReactJS: IoLogoReact,
        Firebase: IoLogoFirebase,
        TailwindCSS: RiTailwindCssFill,
      },
    ],
    liveUrl: "https://datacerta-app.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/data-certa-app",
    img: dataCertaCard,
  },
  {
    title: "PrevSystem",
    description:
      "Plataforma desenvolvida para a gestão de manutenções técnicas, permitindo o registro de serviços e o controle de prazos, valores e clientes. Conta com autenticação, área administrativa, filtros de pesquisa, status de manutenção e um dashboard com visão geral das informações.",
    skills: [
      {
        TypeScript: BiLogoTypescript,
        ReactJS: IoLogoReact,
        Firebase: IoLogoFirebase,
        TailwindCSS: RiTailwindCssFill,
      },
    ],
    liveUrl: "https://prevsystem.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/prevsystem-app",
    img: prevsystemCard,
  },
  {
    title: "Expedix",
    description:
      "Plataforma desenvolvida para otimizar a logística de expedição, centralizando informações sobre retiradas, responsáveis, datas e status das operações. Conta com autenticação, registro e gerenciamento completo de expedições, filtros de pesquisa, histórico de operações e uma landing page institucional.",
    skills: [
      {
        TypeScript: BiLogoTypescript,
        ReactJS: IoLogoReact,
        Firebase: IoLogoFirebase,
        TailwindCSS: RiTailwindCssFill,
      },
    ],
    liveUrl: "https://expedix.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/expedix",
    img: expedixCard,
  },
  {
    title: "Rota360",
    description:
      "Plataforma para controle de veículos e deslocamentos, com gerenciamento de frota, acompanhamento de viagens e indicadores em tempo real. Inclui cadastro de veículos, histórico de viagens e regras de negócio para garantir a integridade operacional.",
    skills: [
      {
        TypeScript: BiLogoTypescript,
        ReactJS: IoLogoReact,
        Firebase: IoLogoFirebase,
        TailwindCSS: RiTailwindCssFill,
      },
    ],
    liveUrl: "https://rota360.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/rota360-app",
    img: rota360Card,
  },
  {
    title: "Cardápio Hamburgueria",
    description:
      "Cardápio online desenvolvido para uma hamburgueria, permitindo a visualização dos produtos e a montagem do pedido de forma simples e intuitiva. Conta com listagem de itens, carrinho de compras e integração com WhatsApp para envio automático do pedido.",
    skills: [
      {
        HTML: FaHtml5,
        JavaScript: IoLogoJavascript,
        TailwindCSS: RiTailwindCssFill,
      },
    ],
    liveUrl: "https://cardapioburguerapp.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/cardapio-hamburgueria",
    img: hamburgueriaCard,
  },
  {
    title: "DevCurrency",
    description:
      "Aplicação web para visualização de dados atualizados sobre criptomoedas, permitindo pesquisa por nome e navegação pela lista de ativos. Exibe preço atual, valor de mercado, volume negociado e variação percentual nas últimas 24 horas com indicação visual.",
    skills: [
      {
        TypeScript: BiLogoTypescript,
        ReactJS: IoLogoReact,
        CSS: IoLogoCss3,
      },
    ],
    liveUrl: "https://devcurrency-cyan.vercel.app/",
    repoUrl: "https://github.com/rogeranacleto/devcurrency",
    img: devCurrencyCard,
  },
];

export function Projects() {
  return (
    <div className="max-w-screen min-h-screen mb-80">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center border border-solid border-black rounded-3xl bg-[#c2bebe15] max-w-30 mb-5">
            <h1 className="text-sm font-medium text-white px-4 py-2">
              Projetos
            </h1>
          </div>

          <div className="flex items-center justify-center flex-col px-10">
            <p className="text-white mt-4 text-6xl font-medium max-w-2xl text-center mb-4">
              Alguns projetos que já desenvolvi
            </p>
            <div className="h-1 max-w-110 w-full bg-linear-to-r from-transparent via-white to-transparent mx-auto mt-5" />
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-6 mt-15">
          {projectsCards.map((project, index) => (
            <article
              key={index}
              className="max-w-120 w-full relative bg-transparent p-6 rounded-2xl hover:scale-110 duration-300 ease-in-out hover:backdrop-blur-sm hover:border hover:border-solid hover:border-[#ffffff86]"
            >
              <img
                src={project.img}
                alt={`Imagem ${project.title}`}
                className="rounded-3xl w-full object-cover"
              />

              <div className="mt-5">
                <h2 className="font-bold text-white text-2xl mb-3">
                  {project.title}
                </h2>
                <p className="text-[#c2bebefa]">{project.description}</p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  {Object.entries(project.skills[0]).map(([name, Icon], indice) => (
                    <div key={indice} className="relative group">
                      <div className="border border-solid border-[#c2bebe59] rounded-full p-2 bg-black transition-transform duration-300 group-hover:scale-125">
                        <Icon className="text-white text-lg" />
                      </div>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm rounded-lg whitespace-nowrap capitalize z-50">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 items-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center gap-2 bg-white px-3.5 py-1 rounded-lg transition-transform duration-300 hover:scale-110"
                    >
                      <FiExternalLink className="text-2xl" />
                      Ver Projeto
                    </a>
                  )}

                  {project.repoUrl && (
                    <div className="relative group border border-solid border-[#c2bebe15] rounded-lg text-white px-2 py-1 transition-transform duration-300 hover:scale-110">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <PiGithubLogo className="text-white text-2xl cursor-pointer" />
                      </a>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-sm px-2 py-1 rounded-lg whitespace-nowrap z-50">
                        Ver repositório
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
