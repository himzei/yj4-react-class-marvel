import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

export default function Youtube() {
  return (
    <Link to="https://www.facebook.com/">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaYoutube size="full" />
        </div>
    </Link>
  )
}