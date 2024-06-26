import React from "react";
import HeadingText from "./HeadingText";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast color="white" />,
      color: "bg-green-800",
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod tempor",
    },
    {
      icon: <BiSolidDiscount color="white" />,
      color: "bg-red-800",
      title: "Special Discount",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod tempor",
    },
    {
      icon: <BiSupport color="white" />,
      color: "bg-blue-800",
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed diam nonumy eirmod tempor",
    },
  ];
  return (
    <section className="text-center px-5">
      <HeadingText
        subHeading={"Our Special Features"}
        mainHeading={"Pure Agriculture and Organic Farm"}
      />
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 p-4 my-5">
        {features.map(({ icon, color, title, description }) => (
          <div
            key={title}
            className="flex flex-col justify-center items-center gap-2"
          >
            <figure className={`${color} p-3 rounded-full`}>{icon}</figure>
            <h4 className="text-green-950 font-bold text-lg">{title}</h4>
            <p className="text-gray-500 text-base font-medium text-center max-w-96">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
