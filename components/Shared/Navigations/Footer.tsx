"use client";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  const quickLinks = [
    { name: "Pricing", link: "#pricing" },
    { name: "Services", link: "#services" },
    { name: "Resources", link: "#resources" },
    { name: "Blog", link: "#blog" },
  ];
  const socials = [
    { icon: <FaInstagram className="text-xl" />, link: "" },
    { icon: <FaFacebookF className="text-xl" />, link: "" },
    { icon: <FaLinkedinIn className="text-xl" />, link: "" },
  ];
  return (
    <ComponentWrapper style="w-full bg-white-main py-2">
      <footer className="size-full text-white-main bg-black-secondary rounded-[50px] lg:pt-16 lg:pb-5 py-10 lg:px-10 px-5 flex flex-col items-center justify-between lg:gap-16 gap-5">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1.5fr] sm:gap-10 gap-5">
          {/* logo here */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <Link href={"/"} className="relative size-[56px] sm:size-[68px]">
              <Image
                fill
                alt=""
                className="object-contain"
                src={"/Assets/LogoBlue.svg"}
              />
            </Link>
            <p className="text-base sm:text-lg font-light">
              Bookkeeping solutions tailored for small businesses and startups.
            </p>
          </div>
          {/* quick links */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">Quick Links</p>
            {quickLinks.map((item: any, index: number) => (
              <Link
                href={item.link}
                key={index}
                className="text-base sm:text-lg font-light"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* support links */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">Support</p>

            <Link href={"#faq"} className="text-base sm:text-lg font-light">
              FAQs
            </Link>
          </div>
          {/* news letter */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">
              Subscribe Our Newsletter
            </p>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                e.preventDefault()
              }
              className="h-[70px] w-full border border-[#D9D9D9] rounded-[30px] p-2 flex items-center justify-between"
            >
              <input
                type="email"
                name="email"
                id=""
                autoComplete="off"
                placeholder="Email"
                required
                className="size-full px-4 bg-black-secondary border-none focus:outline-none text-base sm:text-lg font-normal text-gray-main"
              />
              <button
                type="submit"
                className="h-[50px] sm:h-[56px] flex-shrink-0 w-[165px] bg-brand-secondary rounded-[30px] flex items-center justify-center font-normal text-base sm:text-lg text-black-main"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col gap-4 items-start sm:items-center justify-between py-4 sm:py-8 border-t border-t-white-main">
          <p className="text-base sm:text-lg font-light">
            ©{year} Quanto. All rights reserved.
          </p>
          <div className="flex items-center justify-start gap-3">
            {socials.map((item: any, index: number) => (
              <Link
                href={item.link}
                key={index}
                className="size-[36px] flex items-center justify-center sm:size-[41px] rounded-full border border-brand-secondary hover:bg-brand-secondary bg-transparent text-white-main hover:text-black-main hover:duration-200 transition-all transform ease-in"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
