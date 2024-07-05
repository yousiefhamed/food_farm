"use client";
import { useEffect, useState } from "react";
import HeadingText from "./HeadingText";
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function PopularProducts() {
  const [popularProd, setPopularProd] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}products/`,
          {
            method: "GET",
            headers: {
              limit: 8,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const productsDB = await response.json();
        setPopularProd(productsDB);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    getProducts();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <section className="text-center px-5">
      <HeadingText
        subHeading={"Awesome products"}
        mainHeading={"Our Popular Products"}
      />
      <div className="flex md:flex-row flex-col justify-center items-center md:items-stretch flex-wrap gap-7 p-4 my-5">
        {popularProd.length > 0 &&
          popularProd.map(({ productName, price, image, from, rating }) => (
            <div
              key={productName}
              className="flex flex-col justify-center items-center gap-2 bg-white shadow-md rounded-md p-5 w-[200px] border-2 border-gray-100 hover:scale-110 transition-all cursor-pointer"
            >
              <figure className="w-full">
                <img src={image} alt="product icon" className="w-full" />
              </figure>
              <h4 className="text-lg font-bold">{productName}</h4>
              <div className="flex justify-center items-center gap-2">
                <p className="flex justify-center items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>
                      {i <= rating ? (
                        <FaStar fill="orange" />
                      ) : i - rating < 1 && i - rating > 0 ? (
                        <FaStarHalfAlt fill="orange" />
                      ) : (
                        <CiStar fill="orange" />
                      )}
                    </span>
                  ))}
                </p>
                <p>{from}</p>
              </div>
              <p className="font-bold">$ {price.toFixed(2)}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
