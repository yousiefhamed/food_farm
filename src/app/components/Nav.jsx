"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsClient(() => (window.innerWidth < 768 ? true : false));

      if (document.querySelector("body").clientWidth < 768) {
        setOpenMenu(false);
      } else {
        setOpenMenu(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Products", link: "/products" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full logo-shadow-effect after:shadow-md after:transition-all">
      <nav className="p-web relative h-16 bg-white flex justify-end items-center shadow-md z-50">
        <div
          className={`w-full md:flex md:justify-end lg:justify-between items-center gap-5 close-menu ${
            isClient && openMenu ? "grid mobile-menu" : "hidden"
          }`}
        >
          <div className="flex justify-center md:items-center items-stretch lg:gap-5 gap-2 md:flex-row flex-col">
            <Link
              href="#"
              className="flex justify-center items-center gap-1 text-green-800 text-lg bg-green-50 rounded-full lg:bg-transparent lg:p-0 p-3"
            >
              <MdOutlinePhone />
              <p className="md:hidden lg:block">(+20) 123 456 7890</p>
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center gap-1 text-green-800 text-lg bg-green-50 rounded-full lg:bg-transparent lg:p-0 p-3"
            >
              <FaLocationDot />
              <p className="md:hidden lg:block">Alexandria, Egypt</p>
            </Link>
          </div>
          <ul
            rule="nav-menu"
            className="flex justify-center items-center gap-3 text-lg md:flex-row flex-col"
          >
            {menu.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className="menu-link text-green-800 text-md hover:text-green-950 transition-all after:bg-green-600"
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/signIn"
                className="flex justify-center items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-full hover:bg-green-400 transition-all hover:text-black shadow-md md:min-w-0 min-w-40"
              >
                <CgProfile />
                Sign in
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="bg-white absolute top-0 left-[20px] lg:left-1/2 lg:-translate-x-1/2 p-3 inline-block rounded-full transition-all"
        >
          <Image
            src="/logo.png"
            alt="My logo"
            width={100}
            height={100}
            className="border-4 border-black rounded-full"
          />
        </Link>
        <button onClick={toggleMenu} className="md:hidden inline-block">
          <CiMenuFries className="text-4xl cursor-pointer" />
        </button>
      </nav>
    </header>
  );
}
