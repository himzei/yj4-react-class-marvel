import { Link } from "react-router-dom";

export default function Button({link, text}) {
  return (
    <Link to={link}>
        <div>
            
            <button 
                style={{
                    clipPath: "polygon(9% 0, 100% 0, 100% 68%, 92% 100%, 0 100%, 0 26%)"
                }}
                className="uppercase px-10 py-4 font-bold bg-red-600 text-white duration-500 hover:bg-red-700">
                {text}
            </button>
        </div>
    </Link>
  )
}