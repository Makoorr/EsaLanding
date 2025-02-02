export function Immatriculation() {
    return (
        <div className="relative pt-20 pb-10 sm:pb-4 sm:pt-4 my-4 lg:px-48">
            <div className="absolute -translate-y-40 right-0 scale-50 sm:scale-75 min-[1820px]:scale-100 sm:-translate-x-0 translate-x-24 min-[1820px]:-translate-x-24">
                <img
                    src="/immatricule_pdp.png"
                    alt="Immatriculé PDP"
                    className=""
                />
            </div>
            
            <div className="grid grid-cols-4 border-[6px] border-orange-500 rounded-3xl shadow-2xl">
                <div className="-translate-y-36 lg:-translate-y-4 -translate-x-20 scale-75 sm:scale-100 min-[1820px]:scale-150 w-96 h-96 rounded-full border-[16px] border-orange-500 bg-white">
                    <img
                        src="/announcement_girl.png"
                        alt="ISO27001 certification SecNumCloud"
                        className="w-full h-full object-cover -translate-y-[0.15rem] scale-110"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 62%, 65.5% 93.5%, 58% 95.5%, 50% 96.5%, 48% 96.5%, 42% 95.5%, 35% 93.8%, 0 63%"
                        }}
                    />
                </div>

                <div className="col-span-4 sm:col-span-3 -translate-y-44 sm:-translate-y-0 pl-5 sm:pt-40 lg:pt-2 lg:pl-20 min-[1820px]:pl-8 py-4 mb-4 pr-4 sm:pr-16 min-[1820px]:pr-0 w-full">
                    <h1 className="text-[25px] min-[1820px]:text-[45px] leading-[3rem] font-semibold mb-8 sm:pl-20 lg:pl-0">
                        (H2) La certification, <span className="text-orange-500">Plateforme de Dématérialisation Partenaire (PDP)</span>
                    </h1>

                    <div className="flex flex-col min-[1820px]:flex-row gap-4">
                        <span className="sm:pl-8 text-lg text-gray-500 text-justify leading-5">    
                            <p className="sm:mb-8">EsaLink vous annonce l&apos;immatriculation officielle de sa Solution <span className="text-black font-medium underline">HUBTIMIZE E-Invoicing</span> en tant que Plateforme de Dématérialisation Partenaire (PDP). Une étape cruciale qui témoigne de notre engagement à offrir des solutions de facturation électronique sécurisées, conformes aux réformes concernant la dématérialisation fiscale.</p>
                            <p>La certification PDP est bien plus qu&apos;une simple certification. Elle est un gage de confiance pour toutes les entreprises qui cherchent à optimiser et sécuriser leurs processus de facturation électronique. En tant que Plateforme de Dématérialisation Partenaire,</p>
                        </span>
                        <img
                            src="/iso_cert.png"
                            alt="ISO27001 certification SecNumCloud"
                            className="h-fit self-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Immatriculation;