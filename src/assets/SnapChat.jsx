import { Link } from "react-router-dom";
import { FaSnapchatGhost } from "react-icons/fa";

export default function SnapChat() {
  return (
    <Link to="https://www.snapchat.com">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <FaSnapchatGhost size="full" />
        </div>
    </Link>
  )
}