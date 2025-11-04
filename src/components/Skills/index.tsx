import logoJavaScript from '../../assets/logo-javascript.png';
import logoTypescript from '../../assets/logo-typescript.png';
import logoReact from '../../assets/logo-react.png';
import logoNext from '../../assets/logo-next.png';
import logoTailwind from '../../assets/logo-tailwind.png';
import logoNode from '../../assets/logo-node.png';
import logoHtml from '../../assets/logo-html.png';
import logoCss from '../../assets/logo-css.png';
import logoGit from '../../assets/logo-git.png';
import logoGithub from '../../assets/logo-github.png';
import logoFigma from '../../assets/logo-figma.png';
import logoVite from '../../assets/logo-vite.png';
import logoPostgresql from '../../assets/logo-postgres.png';
import logoLinux from '../../assets/logo-linux.png';
import logoFirebase from '../../assets/logo-firebase.png';
export function Skills(){
    return(
        <div className="max-w-screen w-full flex justify-center min-h-200 mt-50">
            <div className='w-full flex flex-col items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-white text-5xl font-bold mb-4 m-auto">Tecnologias que utilizo</h1>
                    <div className="h-0.5 w-120 bg-linear-to-r from-transparent via-white/95 to-transparent mx-auto"></div>
                    <p className='text-[#c2bebee3] mt-5 text-lg'>Conheça as tecnologias que utilizo no processo de desenvolvimento.</p>
                </div>
                <div className='mt-15 w-full max-w-[1200px] flex flex-wrap gap-10 justify-center'>
                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoJavaScript} alt="Logo JavaScript" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            JavaScript
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoTypescript} alt="Logo TypeScript" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            TypeScript
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoReact} alt="Logo ReactJS" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            ReactJS
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoNext} alt="Logo NextJS" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            NextJS
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoTailwind} alt="Logo Tailwind CSS" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Tailwind CSS
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoNode} alt="Logo NodeJS" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            NodeJS
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoHtml} alt="Logo HTML" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            HTML
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoCss} alt="Logo CSS" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            CSS
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoGit} alt="Logo Git" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Git
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoGithub} alt="Logo GitHub" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            GitHub
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoFigma} alt="Logo Figma" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Figma
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoVite} alt="Logo Vite" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Vite
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoPostgresql} alt="Logo PostgreSQL" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            PostgreSQL
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoLinux} alt="Logo Linux" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Linux
                        </span>
                    </div>

                    <div className='relative group'>
                        <div className="w-30 h-30 backdrop-blur-xs border border-solid border-[#c2bebe15] rounded-lg flex items-center justify-center hover:scale-110 duration-300 shadow-[0_4px_10px_#c2bebee3] hover:shadow-[0_4px_20px_#c2bebee3]">
                            <img src={logoFirebase} alt="Logo Firebase" className="w-20" />
                        </div>
                        <span className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            bg-black text-white text-sm px-2 py-1 rounded-lg
                            whitespace-nowrap z-10">
                            Firebase
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}