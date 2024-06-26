import { FaArrowRightLong } from "react-icons/fa6";
import HeadingText from "./HeadingText";

export default function HeroSection() {
  return (
    <section
      style={{
        height: "calc(100vh - 60px)",
        background: "url(/imgs/BannerImg.png) no-repeat center",
        backgroundSize: "cover",
      }}
      className="w-full min-h-[500px] flex flex-col justify-start items-center overflow-hidden rounded-bl-[75px] py-24 px-5"
    >
      <HeadingText
        subHeading={"welcome to our farm"}
        mainHeading={"Enjoy the Organic Food"}
        isHero={true}
      />
      <p className="text-gray-500 text-base font-medium text-center max-w-[500px] pt-2 pb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe vero
        iste aliquid, reprehenderit distinctio laudantium magni excepturi
      </p>
      <button className="bg-green-600 text-white py-2 px-4 rounded-full flex justify-center items-center gap-3 shadow-md hover:bg-green-400 hover:text-black">
        See Our Products
        <FaArrowRightLong />
      </button>
    </section>
  );
}
