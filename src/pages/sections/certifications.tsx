export function Certifications() {
    return (
        <div className="pt-16">
            <div className="px-32">
                <div className="rounded-lg bg-gradient-to-r from-cyan-400 via-orange-600 to-blue-600 p-2 shadow-lg">
                    <div className="bg-white p-6 flex justify-center py-16 pb-16">
                        <div className="flex flex-col items-center">
                            <img src="/iso27001.png" alt="Certification Image" className="w-1/4 h-auto" />
                            <div className="px-20">
                                <h1 className="text-2xl font-bold">EsaLink est <span className="text-orange-400">certifié ISO/IEC 27001 </span>sur ses solutions et services d'intégration B2B</h1>
                                <p className="mt-4 px-4 text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/visa_img.png" alt="Certification Image" className="w-1/3 h-auto" />
                            <div className="px-20">
                                <h1 className="text-2xl font-bold">EsaLink est <span className="text-orange-400">certifié ISO/IEC 27001 </span>sur ses solutions et services d'intégration B2B</h1>
                                <p className="mt-4 text-gray-600">
                                    <span className="underline">Lorem ipsum dolor sit</span> amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, inventore. Enim repellat eos ut fugit ipsa cumque necessitatibus tenetur itaque porro quas aperiam asperiores, minus in vitae maiores! Doloremque, expedita!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="transition-transform transform -translate-y-full">
                <img 
                    src="/wings_bg.png" 
                    alt="New Image" 
                    className="w-full h-auto object-cover" 
                    style={{ clipPath: 'inset(0 0 30% 0)' }} 
                />
            </div>
        </div>
    );
}