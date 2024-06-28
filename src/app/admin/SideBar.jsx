"use client";
import Link from "next/link";
import AddProduct from "./AddProducts";
import { useState } from "react";

export default function SideBar({ menu, chgComp, showMenu }) {
  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        background: "linear-gradient(135deg, lightgreen, lightblue)",
      }}
      className={`flex flex-col justify-start items-center gap-5 overflow-y-auto lg:w-[400px] w-[250px] h-screen fixed top-0 left-0 mt-[60px] pt-16 lg:pt-5 rounded-tr-3xl rounded-br-3xl ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-all z-40`}
    >
      {menu.map(({ title }) => (
        <div
          key={title}
          className="w-full text-center text-lg border-b-2 py-3 border-gray-50 "
        >
          <Link
            onClick={() => chgComp(title)}
            href="#"
            className="w-full h-full inline-block py-2 hover:font-bold transition-all hover:text-green-900"
          >
            {title}
          </Link>
        </div>
      ))}
    </div>
  );
}
