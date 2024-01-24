import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Facebook() {
  return (
    <Link to="https://www.facebook.com/" target="_blank">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaFacebookSquare size="full" />
        </div>
    </Link>
  )
}