import { Link } from "react-router-dom";
import { TiSocialInstagram } from "react-icons/ti";

export default function Insta() {
  return (
    <Link to="https://www.instagram.com">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-600 cursor-pointer ">
            <TiSocialInstagram size="full" />
        </div>
    </Link>
  )
}