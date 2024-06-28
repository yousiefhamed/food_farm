"use client";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "../SideBar";
import AddProduct from "../AddProducts";

export default function page() {
  const [showMenu, setShowMenu] = useState(false);
  const [renderComp, setRenderComp] = useState("Add Product");
  const menu = [
    { title: "Add Product", component: <AddProduct /> },
    { title: "Update Products", component: <AddProduct /> },
    { title: "Delete Products", component: <AddProduct /> },
    { title: "Show Products", component: <AddProduct /> },
  ];

  return (
    <main className="pt-20 min-h-screen lg:pl-[400px] md:pl-[250px] pl-0 px-5 w-full bg-green-50">
      <button
        className="md:hidden inline-block fixed top-[120px] left-0 z-50 p-5 rounded-tr-full rounded-br-full bg-white"
        onClick={() => setShowMenu(!showMenu)}
      >
        <CiMenuFries />
      </button>
      <SideBar menu={menu} chgComp={setRenderComp} showMenu={showMenu} />
      <section role="form" className="flex justify-center items-center mb-10">
        {menu.find(({ title }) => title === renderComp).component}
      </section>
    </main>
  );
}
