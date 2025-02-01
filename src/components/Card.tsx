export function Card(props: CardProps) {
    return (
      <div className="w-96">
        <div className="text-center border-4 relative"
          style={{
            borderImage: "linear-gradient(90deg, #8c52ff, #5ce1e6) 1",
          }}
        >
          <div className="relative p-5 rounded-md">
            <div className="relative flex items-center justify-center -translate-y-10">
              <div className="absolute w-44 h-44 bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] rounded-full -top-12"></div>
              <img
                src={props.image}
                alt={props.name}
                className="w-[10.5rem] h-[10.5rem] rounded-full mx-auto bg-white absolute -top-11"
              />
            </div>
            
            <p className="mt-24 mb-4 leading-5">
              <span className="font-bold">{props.name}</span><br></br>
              <span className="text-sky-400 italic">{props.role}</span>
            </p>
            <p className="text-[13.9px] text-start leading-4">{props.feedback}</p>
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