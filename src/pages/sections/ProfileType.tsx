import { Job } from "../../components/Job";

export function ProfileType() {
    return (
      <div>
        <div className="sm:px-20 px-5 py-5 mb-4 w-full">
          <h1 className="text-3xl font-bold mb-8">
            (H2) Les types de <span className="text-orange-500">profils</span>
          </h1>
          <h2 className="text-lg">
          EsaLink vous propose l’expertise de consultants hautement qualifiés dans des domaines à fortes compétences spécifiques, rares et recherchées sur le marché. Nos équipes sont spécialisées dans quatre domaines clés, chacun offrant un accompagnement adapté pour répondre précisément à vos besoins :
          </h2>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col space-y-3 w-1/4 pr-3">
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

          <div className="flex-1 sm:flex-row flex-col h-fixed flex gap-10 items-start">
            <Job
              title="Consultant Supply Chain"
              role="Expert - PMO - Manager"
              description={
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  <strong>lorem ipsum dolor sit amet</strong>
                  nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  qui officia deserunt mollit anim id est laborum.
                </p>
              }
            />
            <Job
              title="Consultant SAP"
              role="ERP - MM - FICO"
              description={
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <strong>lorem ipsum dolor sit amet</strong>
                  consectetur adipiscing elit. sed do eiusmod tempor incididunt ut
                  excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
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
    "bg-[#5bb6db]/50 sm:w-56 w-36", // Supply chain
    "bg-[#00b7ff]/50 sm:w-60 w-28", // Distribution
    "bg-[#4b39b5]/50 text-center pr-5", // SAP
    "bg-[#ff914d]/50 text-center ml-1 sm:w-40 w-24", // SAP MM
    "from-[#8c52ff]/50 to-[#5ce1e6]/50 text-center ml-1.5 sm:w-52 w-28", // SAP S/4HANA
    "bg-[#4b39b5]/50 text-center ml-10 pr-5", // SAP SD
    "from-[#8c52ff]/50 to-[#5ce1e6]/50 text-center sm:w-52 w-28", // SAP ERP
    "bg-[#00b7ff]/50 sm:w-48 w-28", // Salesforce
  ];
  const color = colors[(props.idx - 1) % colors.length];

  return (
    <div className="">
      <span
        className={`
          hover:translate-x-8 inline-block duration-300 transform cursor-pointer
          rounded-xl bg-gradient-to-r px-4 font-semibold py-2 sm:text-2xl text-lg text-white ${color}
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