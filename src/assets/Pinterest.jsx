import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa";

export default function Pinterest() {
  return (
    <Link to="https://www.pinterest.com" target="_blank">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaPinterest size="full" />
        </div>
    </Link>
  )
}