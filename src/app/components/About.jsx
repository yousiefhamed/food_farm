import React from "react";
import ImgBesideText from "./ImgBesideText";

export default function About() {
  return (
    <ImgBesideText
      subHeading={"about us"}
      mainHeading={"We provide high-quality organic products"}
      description={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sedcupiditate minus soluta a tempora autem placeat hic corporis minima eligendi! Eveniet, soluta excepturi nesciunt harum laborum facilis voluptatibus nihil dolorem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cupiditate minus soluta a tempora autem placeat hic corporis minima eligendi! Eveniet, soluta excepturi nesciunt harum laborum facilis voluptatibus nihil dolorem."
      }
      imgLink={"/imgs/about.png"}
    />
  );
}
