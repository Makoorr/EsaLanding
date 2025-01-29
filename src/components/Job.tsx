export function Job(props: JobProps) {
    return (
      <div className="rounded p-6 bg-gray-100 h-full flex flex-col w-96">
          <h1 className="text-center text-sky-400 font-bold text-lg">
            {props.title}
          </h1>
          <h2 className="text-center pb-4">{props.role}</h2>
          <div className="text-sm pb-2">{props.description}</div>
          <div className="grid place-content-center mt-auto">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 mt-4">
              Je suis intéressé(e)
            </button>
          </div>
      </div>
    );
  }
    
type JobProps = {
    title: string;
    role: string;
    description: React.ReactNode;
};