import HeadingText from "./HeadingText";
import ProductsBtn from "./ProductsBtn";

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
      <ProductsBtn />
    </section>
  );
}
