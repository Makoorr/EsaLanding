export function Certifications() {
    return (
        <div className="relative py-16">
            <div className="xl:px-60">
                <div className="rounded-lg bg-gradient-to-r from-cyan-400 via-orange-600 to-blue-600 p-2 drop-shadow-[0_45px_15px_rgba(0,0,0,0.5)]">
                    <div className="px-4 sm:px-16 bg-white flex lg:flex-row flex-col justify-center sm:gap-0 gap-5 py-10 sm:py-28 sm:pb-40">
                        
                        <div className="flex flex-col items-center flex-1">
                            <img src="/iso27001.png" alt="Certification Image" className="w-60 h-auto" />
                            <div className="sm:px-2">
                                <div className="flex">
                                    <h1 className="text-2xl font-bold">EsaLink est <span className="text-orange-400">certifié ISO/IEC 27001 </span>sur<br></br> ses solutions et services d&apos;intégration B2B</h1>
                                    <div className="mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#cbc9cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-4 pr-16 text-lg text-gray-600 leading-5">
                                    La norme ISO/IEC 27001 est un standard mondial pour les Systèmes de gestion de la sécurité de l&apos;information (SMSI), définissant les critères pour organiser, implémenter, maintenir et améliorer continuellement la sécurité de l&apos;information.<br></br>
                                    Garanti une gestion sécurisée des données. <br></br>
                                    Couvre l&apos;ensemble des opérations, services et solutions, assurant que chaque processus et service respecte les normes les plus strictes de sécurité et de gestion des ...
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center flex-1">
                            <img src="/visa_img.png" alt="Certification Image" className="w-72 h-auto" />
                            <div className="sm:px-12">
                                <div className="flex">
                                    <h1 className="text-2xl font-bold">La solution HUBTIMIZE E-Invoicing <span className="text-orange-400"> qualifiée SecNumCloud</span></h1>
                                    <div className="mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#cbc9cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-4 text-lg text-gray-600 leading-5">
                                    La qualification SecNumCloud, délivrée par l&apos;ANSSI, est un visa de sécurité attestant du plus haut niveau de qualité, de sécurité et de confiance pour les prestataires de services cloud. 
                                    Pour EsaLink, cela inclut des Data Centers en France et en Allemagne, assurant une protection robuste face aux cyberattaques et une conformité rigoureuse des processus.  
                                    Les exigences du référentiel garantissent la protection du service cloud vis-à-vis du droit extra européen, grâce à la combinaison de trois types de mesures fygfyergugrugr.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="hidden xl:block min-[1921px]:hidden px-48 2xl:px-44 overflow-hidden absolute transition-transform transform -translate-y-[38rem]">
                <img 
                    src="/wings_bg.png" 
                    alt="New Image" 
                    className="w-full h-auto object-cover"
                    style={{
                        clipPath: "polygon(0px 0px, 100% 0%, 100% 100%, 95.6% 98.75%, 95.6% 54.55%, 4.6% 55.55%, 4.65% 100.5%, 0% 100%)"
                    }}
                />
            </div>
        </div>
    );
}