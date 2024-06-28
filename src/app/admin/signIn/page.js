"use client";
import { useState } from "react";
import SideBar from "../SideBar";
import AddProduct from "../AddProducts";

export default function page() {
  const [renderComp, setRenderComp] = useState("Add Product");
  const menu = [
    { title: "Add Product", component: <AddProduct /> },
    { title: "Update Products", component: <AddProduct /> },
    { title: "Delete Products", component: <AddProduct /> },
    { title: "Show Products", component: <AddProduct /> },
  ];

  return (
    <main className="pt-20 min-h-screen pl-[400px] px-5 w-full bg-green-50">
      <SideBar menu={menu} chgComp={setRenderComp} />
      <section role="form" className="flex justify-center items-center mb-10">
        {menu.find(({ title }) => title === renderComp).component}
      </section>
    </main>
  );
}
