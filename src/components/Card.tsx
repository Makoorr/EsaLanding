export function Card(props: CardProps) {
    return (
      <div className="w-80">
        <div className="text-center border-4 border-blue-500 rounded-xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl -m-1"></div>
          <div className="relative p-4 rounded-md bg-gray-100">
            <img src={props.image} alt={props.name} className="w-24 h-24 rounded-full border-4 border-blue-400 mx-auto bg-white absolute -top-12 left-1/2 transform -translate-x-1/2" />
            <h1 className="font-black mt-10">{props.name}</h1>
            <h2 className="text-sky-400 italic">{props.role}</h2>
            <p className="text-xs">{props.feedback}</p>
          </div>
        </div>
      </div>
    );
  }
  
type CardProps = {
    name: string;
    role: string;
    feedback: string;
    image: string;
};