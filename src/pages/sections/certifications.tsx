export function Certifications() {
    return (
        <div className="relative py-16">
            <div className="lg:px-40">
                <div className="rounded-lg bg-gradient-to-r from-cyan-400 via-orange-600 to-blue-600 p-2 drop-shadow-[0_45px_15px_rgba(0,0,0,0.5)]">
                    <div className="bg-white flex lg:flex-row flex-col justify-center sm:gap-0 gap-5 py-10 sm:py-28 sm:pb-52">
                        
                        <div className="flex flex-col items-center">
                            <img src="/iso27001.png" alt="Certification Image" className="w-60 h-auto" />
                            <div className="px-20">
                                <div className="flex">
                                    <h1 className="text-2xl font-bold">EsaLink est <span className="text-orange-400">certifié ISO/IEC 27001 </span>sur<br></br> ses solutions et services d'intégration B2B</h1>
                                    <div className="mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-4 px-2 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/visa_img.png" alt="Certification Image" className="w-72 h-auto" />
                            <div className="px-32">
                                <div className="flex">
                                    <h1 className="text-2xl font-bold">La solution HUBTIMIZE E-Invoicing <span className="text-orange-400"> qualifiée SecNumCloud</span></h1>
                                    <div className="mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600">
                                    <span className="underline">Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="px-12 overflow-hidden absolute transition-transform transform -translate-y-[38rem]">
                <img 
                    src="/wings_bg.png" 
                    alt="New Image" 
                    className="w-full h-auto object-cover" 
                />
            </div>
        </div>
    );
}