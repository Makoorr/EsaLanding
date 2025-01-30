import { Job } from "../../components/Job";

export function ProfileType() {
    return (
      <div>
        <div className="sm:px-20 px-5 py-5 mb-4 w-full">
          <h1 className="text-xl font-black mb-4">
            (H2) Les types de <span className="text-orange-500">profils</span>
          </h1>
          <h2 className="text-xs">
            Je propose des offres d'emploi pour les profils suivants. Si vous êtes
            intéressé, veuillez postuler. il est possible que vous soyez contacté
            pour un entretien. lorem ipsum dolor sit amet, consectetur adipiscing
            elit. sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </h2>
        </div>
        <div className="flex py-4">
          <div className="flex flex-col space-y-3 w-1/4 pr-6">
            <Chip idx={1} title="Supply Chain" />
            <Chip idx={2} title="Distribution" />
            <Chip idx={3} title="SAP" />
            <Chip idx={4} title="SAP MM" />
            <Chip idx={5} title="SAP S/4HANA" />
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
    "from-blue-400 to-cyan-400 sm:w-48 w-36", // Supply chain
    "from-blue-300 to-cyan-200 sm:w-52 w-28", // Distribution
    "from-purple-400 to-violet-400 pr-5", // SAP
    "from-orange-300 to-yellow-300 sm:w-28 w-24", // SAP MM
    "from-violet-300 to-cyan-300 sm:w-52 w-28", // SAP S/4HANA
  ];
  const color = colors[(props.idx - 1) % colors.length];

  return (
    <div className="">
      <span
        className={`
          hover:translate-x-8 inline-block duration-300 transform cursor-pointer
          rounded-lg bg-gradient-to-r px-4 font-black py-2 text-xs text-white ${color}
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