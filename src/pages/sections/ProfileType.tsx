import { Job } from "../../components/Job";

export function ProfileType() {
    return (
      <div>
        <div className="px-20 py-5">
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
        <div className="flex">
          <div className="flex flex-col [&>*]:cursor-pointer space-y-3 w-72 pr-6">
            <Chip idx={1} title="Supply Chain" />
            <Chip idx={2} title="Distribution" />
            <Chip idx={3} title="SAP" />
            <Chip idx={4} title="SAP MM" />
            <Chip idx={5} title="SAP S/4HANA" />
            <Chip idx={6} title="SAP SD" />
            <Chip idx={7} title="SAP ERP" />
            <Chip idx={8} title="Salesforce" />
          </div>

          <div className="flex-1 h-fixed flex gap-10 items-start">
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
    "from-blue-300 to-cyan-300",
    "from-blue-400 to-cyan-400",
    "from-orange-300 to-yellow-300",
    "from-purple-300 to-pink-300",
    "from-blue-200 to-cyan-200",
  ];
  const color = colors[(props.idx + 1) % colors.length];

  return (
    <div className="">
      <span
        className={`
          hover:translate-x-8 inline-block duration-300 transform
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