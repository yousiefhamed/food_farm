import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CtaBtn({ link, txt }) {
  return (
    <Link
      role="button"
      href={link}
      className="bg-green-600 w-fit text-white py-2 px-4 rounded-full flex justify-center items-center gap-3 shadow-md hover:bg-green-400 hover:text-black"
    >
      {txt}
      <FaArrowRightLong />
    </Link>
  );
}
