import { Job } from "../../components/Job";

export function ProfileType() {
    return (
      <div>
        <div className="sm:px-40 px-5 py-5 mb-4 w-full">
          <h1 className="text-3xl font-bold mb-6">
            (H2) Les types de <span className="text-orange-500">profils</span>
          </h1>
          <p className="pr-10 leading-5">
            EsaLink vous propose l'expertise de consultants hautement qualifiés dans des domaines à fortes compétences spécifiques, rares et recherchées sur le marché. Nos équipes sont spécialisées dans quatre domaines clés, chacun offrant un accompagnement adapté pour répondre précisément à vos besoins :
          </p>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col -translate-y-32 sm:-translate-y-0 absolute sm:relative pb-4 sm:pb-0 space-y-3 sm:w-1/4 pr-3">
            <Chip idx={1} title="Supply Chain" />
            <Chip idx={2} title="Distribution" />
            <Chip idx={3} title="SAP" />
            <Chip idx={4} title="SAP MM" />
            <Chip idx={5} title="SAP S/4HANA" />
            <br></br>
            <br></br>
            <Chip idx={6} title="SAP SD" />
            <Chip idx={7} title="SAP ERP" />
            <Chip idx={8} title="Salesforce" />
          </div>

          <div className="flex-1 lg:flex-row flex-col h-fixed flex gap-10 items-start">
            <Job
              title="Consultant Supply Chain"
              role="Expert - PMO - Manager"
              description={
                <p>
                  Expert chargé d'<strong>optimiser la gestion des flux logistiques</strong> d'une entreprise, depuis l'approvisionnement en matières premières jusqu'à la livraison des produits finis. Son rôle consiste à analyser les processus existants, identifier des pistes d'amélioration et mettre en œuvre des solutions pour réduire les coûts, améliorer la qualité et augmenter l'efficacité. Grâce à son expertise, il aide les entreprises à mieux gérer leurs ressources, à anticiper les risques et à répondre aux fluctuations du marché.
                </p>
              }
            />
            <Job
              title="Consultant SAP"
              role="ERP - MM - FICO"
              description={
                <p>
                  Expert spécialisé dans la mise en œuvre et l'<strong>optimisation des modules du logiciel SAP</strong>, un progiciel de gestion intégré (ERP) utilisé par de nombreuses entreprises pour centraliser leur processus.<br></br> 
                  Il analyse les besoins de l'entreprise, configure les modules SAP et forme les équipes à leur utilisation.<br></br> 
                  Grâce à ses compétences, le consultant SAP permet aux entreprises d'améliorer leur efficacité opérationnelle, de mieux gérer leurs ressources et de faciliter la prise de décision grâce à des données fiables et centralisées.
                </p>
              }
            />
          </div>
        </div>
      </div>
    );
  }
  
function Chip(props: ChipProps) {
  const colors = [
    "bg-[#5bb6db]/50 sm:w-56 sm:-translate-x-2", // Supply chain
    "bg-[#00b7ff]/50 sm:w-60 sm:-translate-x-2", // Distribution
    "bg-[#4b39b5]/50 text-center sm:pr-5 sm:-translate-x-2", // SAP
    "bg-[#ff914d]/50 text-center sm:ml-1 sm:w-40", // SAP MM
    "from-[#8c52ff]/50 to-[#5ce1e6]/50 text-center sm:ml-1.5 sm:w-60", // SAP S/4HANA
    "bg-[#4b39b5]/50 text-center sm:ml-10 pr-5", // SAP SD
    "from-[#8c52ff]/50 to-[#5ce1e6]/50 text-center sm:w-52 sm:-translate-x-2", // SAP ERP
    "bg-[#00b7ff]/50 sm:w-48 sm:-translate-x-2", // Salesforce
  ];
  const color = colors[(props.idx - 1) % colors.length];

  return (
    <div className="overflow-hidden">
      <span
        className={`
          hover:translate-x-8 -translate-x-[85%] inline-block duration-300 transform cursor-pointer
          rounded-xl bg-gradient-to-r px-4 font-semibold py-1 sm:text-2xl text-lg text-white ${color}
        `}
      >
        {props.title}
      </span>
    </div>
  );
}
  
type ChipProps = {
  idx: number;
  title: string;
};