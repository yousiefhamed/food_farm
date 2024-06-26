import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductsBtn() {
  return (
    <Link
      role="button"
      href="/products"
      className="bg-green-600 w-fit text-white py-2 px-4 rounded-full flex justify-center items-center gap-3 shadow-md hover:bg-green-400 hover:text-black"
    >
      See Our Products
      <FaArrowRightLong />
    </Link>
  );
}
