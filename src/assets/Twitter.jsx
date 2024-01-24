import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

export default function Twitter() {
  return (
    <Link to="https://www.naver.com">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaXTwitter size="full" />
        </div>
    </Link>
  )
}