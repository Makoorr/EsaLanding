export function Job(props: JobProps) {
    return (
      <div className="rounded-xl py-4 px-9 bg-gray-100 h-full flex flex-col w-[26rem]">
            <div className="text-center pb-4 -space-y-2">
            <h1 className="text-sky-400 font-bold text-lg">
              {props.title}
            </h1>
            <h2 className="text-lg">{props.role}</h2>
            </div>
          <div className="pb-2">{props.description}</div>
          <div className="flex justify-center mt-auto">
            <button className="bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] text-white px-1 py-2 text-lg font-bold transition-colors hover:brightness-110">
              Je suis intéressé(e)
            </button>
            <div className="bg-[#cbc9cf] w-1/5"></div>
          </div>
      </div>
    );
  }
    
type JobProps = {
    title: string;
    role: string;
    description: React.ReactNode;
};