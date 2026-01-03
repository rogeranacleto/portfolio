import { Links } from "../Links";
export function Footer(){
    return (
      <div className="min-h-140 bg-black  pt-20 pb-40 flex flex-col justify-center relative">
        <div className="absolute top-0 left-0 w-full flex justify-between items-start">
          <div
            className="h-px w-1/2 bg-linear-to-r from-white to-transparent rounded-full"
          ></div>
          <div
            className="h-px w-1/2 bg-linear-to-l from-white to-transparent rounded-full"
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-15 pl-10 pr-10">
          <h2 className="text-white text-5xl font-medium text-center mb-5">
            Vamos conversar?
          </h2>
          <p className="text-[#c2bebee3] text-lg mt-4 mb-5 text-center">
            Estou aberto a novas oportunidades e desafios. Vamos conversar e
            descobrir como podemos criar resultado juntos?
          </p>
          <Links />
          <div className="h-[0.5px] bg-[#c2bebe1f] w-[50%] mt-10 mb-10"></div>
          <p className="text-[#c2bebe7c] text-center">
            © 2025 Roger Anacleto da Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    );
}