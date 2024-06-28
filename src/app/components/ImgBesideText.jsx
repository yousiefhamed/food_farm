import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import HeadingText from "./HeadingText";
import CtaBtn from "./CtaBtn";

export default function ImgBesideText({
  subHeading,
  mainHeading,
  description,
  imgLink,
  reverse,
  testimonial,
  author,
  position,
  company,
}) {
  const authors = [
    "/imgs/authors/John.png",
    "/imgs/authors/Doe.png",
    "/imgs/authors/David.png",
    "/imgs/authors/Brnard.png",
  ];
  return (
    <section className="img-text grid lg:grid-cols-2 justify-center items-center gap-7 px-5">
      <div
        className={`flex flex-col justify-center items-start ${
          reverse && "lg:order-2"
        }`}
      >
        {!testimonial ? (
          <HeadingText subHeading={subHeading} mainHeading={mainHeading} />
        ) : (
          <ImQuotesLeft className="text-green-600 text-5xl" />
        )}
        <p
          className={`${
            !testimonial ? "text-gray-500" : "text-green-900 text-lg font-bold"
          } pt-3 pb-7`}
        >
          {description}
        </p>
        {!testimonial ? (
          <CtaBtn link="/products" txt="See Our Products" />
        ) : (
          <div>
            <p className="text-green-600 font-extrabold text-2xl italic">
              {author}
            </p>
            <p className="text-gray-500 font-bold text-lg pb-10">
              {position} at <span className="text-red-600">{company}</span>
            </p>
            <div className="flex justify-start items-center flex-wrap gap-3">
              {testimonial &&
                authors.map((x) => (
                  <Image
                    key={x}
                    className="rounded-full"
                    src={x}
                    alt="testimonial"
                    width={50}
                    height={50}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          background: `url(${imgLink}) no-repeat center`,
          backgroundSize: "contain",
        }}
        className={`${reverse && "lg:order-1"} w-full lg:min-w-[500px] ${
          testimonial ? "lg:h-[600px] h-[400px]" : "h-[300px]"
        } overflow-hidden flex justify-center items-center`}
      ></div>
    </section>
  );
}
