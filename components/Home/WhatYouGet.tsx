import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import * as Icons from "@/Svg/Icons";
import { GetStartedBtnYellow } from "./GetStartedBtn";
const WhatYouGet = () => {
  const services = [
    {
      title: "Automated Bookkeeping",
      detail:
        "Seamlessly handle day-to-day financials without the manual work.",
      icon: <Icons.BookKeeping className="" />,
    },
    {
      title: "Detailed Financial Reporting",
      detail: "Make data-driven decisions with real-time insights.",
      icon: <Icons.Financial className="" />,
    },
    {
      title: "Tax Preparation & Filing",
      detail: "We ensure you're always ready for tax season.",
      icon: <Icons.Tax className="" />,
    },
    {
      title: "Budgeting & Forecasting Tools",
      detail:
        "Seamlessly handle day-to-day financials without the manual work.",
      icon: <Icons.Budget className="" />,
    },
  ];
  return (
    <ComponentWrapper id="services" style="w-full lg:py-16 py-10 bg-brand-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex lg:flex-row flex-col items-center lg:items-end justify-start gap-4 lg:justify-between">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-poppins text-balance text-center text-white-main text-[44px] sm:text-[56px] font-semibold">
              What You Get With Quanto
            </h2>{" "}
            <p className="text-white-main text-base sm:text-lg font-normal text-center text-balance">
              We provide everything you need to manage your business finances
              effortlessly. Our platform includes.
            </p>
          </div>
          <GetStartedBtnYellow text="Learn more"/>
        </div>
        {/* cards here */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item: any, index: number) => (
            <div
              key={index}
              className="size-full border border-white-main rounded-[30px] p-4 pb-5 flex flex-col items-center sm:items-start justify-start gap-2"
            >
              {item.icon}
              <h3 className="text-white-main text-balance text-xl sm:text-2xl font-bold sm:w-[80%] text-center sm:text-left">
                {item.title}
              </h3>
              <p className="text-base text-white-main font-light text-balance sm:text-left text-center">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default WhatYouGet;
