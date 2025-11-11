import { Links } from "../Links";
export function Footer(){
    return(
        <div className="min-h-100 bg-black border-t border-solid border-[#ffffff17] mt-60">
            <div className="flex flex-col items-center justify-center mt-15 pl-10 pr-10">
                <h2 className="text-[#3f00ac] text-4xl font-bold text-center">Vamos conversar?</h2>
                <p className="text-[#c2bebee3] text-lg mt-4 mb-5 text-center">Estou aberto a novas oportunidades e desafios. Vamos conversar e descobrir como podemos criar resultados juntos?</p>
                <Links/>
                <div className="h-[0.5px] bg-[#c2bebe1f] w-[50%] mt-10 mb-10"></div>
                <p className="text-[#c2bebe7c] text-center">© 2025 Roger Anacleto da Silva. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}