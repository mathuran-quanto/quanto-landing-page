"use client";
import React, { useState } from "react";
import ComponentWrapper from "../ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { name: "Pricing", url: "#pricing" },
    { name: "Services", url: "#services" },
    { name: "Resources", url: "#resources" },
    { name: "Blog", url: "#blog" },
  ];
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <ComponentWrapper style="sm:h-[100px] h-[80px] bg-transparent w-full z-50">
      <div className="size-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="sm:size-[68px] size-[60px] relative">
          <Image
            fill
            alt="Logo"
            className="object-contain"
            src={"/Assets/Logo.svg"}
          />
        </Link>

        {/* Links for larger screens */}
        <div className="h-full hidden md:flex items-center justify-start gap-16">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-white-main text-lg font-normal hover:scale-105 hover:duration-200 transition-all ease-in transform"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login button for larger screens */}
        <button className="h-[58px] w-[130px] text-black-main font-normal text-lg bg-brand-secondary hidden md:flex items-center justify-center rounded-[30px]">
          Login
        </button>

        {/* Menu button for mobile */}
        <button
          onClick={toggleDrawer}
          className="md:hidden flex items-center justify-center text-white-main drawer-button"
        >
          <BiMenuAltRight className=" text-2xl flex-shrink-0" />
        </button>
      </div>

      {/* Drawer */}
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        readOnly
      />
      <div className="drawer-side h-[100dvh] z-50">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={toggleDrawer}
        ></label>
        <ul className="menu px-4 py-6 w-full bg-white-main h-[100dvh] text-base-content flex flex-col items-center justify-start gap-8">
          <span className="w-full flex items-center justify-end">
            <RxCross1
              onClick={toggleDrawer}
              className="text-black-main text-2xl flex-shrink-0"
            />{" "}
          </span>
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="text-black-main active:bg-white-main text-base font-normal"
                onClick={toggleDrawer}
              >
                {item.name}
              </Link>
            </li>
          ))}{" "}
          <button
            onClick={toggleDrawer}
            className="h-[54px] w-[130px] text-black-main font-normal text-lg bg-brand-secondary flex items-center justify-center rounded-[30px]"
          >
            Login
          </button>
        </ul>
      </div>
    </ComponentWrapper>
  );
};

export default Navbar;
