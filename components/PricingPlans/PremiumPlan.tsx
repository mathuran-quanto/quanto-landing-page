import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { GetStartedBtnWhite } from "../Home/GetStartedBtn";

const PremiumPlan = () => {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-full h-full lg:h-[780px] flex flex-col items-start justify-between gap-5 text-white-main font-dmSans bg-brand-main shadow-lg rounded-[40px] p-8 lg:px-8 py-16 relative">
        <div className="w-full flex items-start justify-start flex-col gap-5">
          {" "}
          <p className="text-2xl sm:text-3xl font-bold">Premium</p>
          <span className="font-bold text-[44px] sm:text-[56px]">
            $750<span className="text-3xl sm:text-4xl">+HST</span>
            <span className="font-medium text-lg sm:text-xl">/monthly</span>
          </span>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            {" "}
            <p className="text-xl font-bold sm:text-2xl">
              Everthing in Base Plan+
            </p>
            {[
              "Monthly Custom Reporting",
              "Annual Income Tax Return",
              "Monthly GST / HST Filing",
            ].map((item: string, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-start gap-3"
              >
                <FaCircleCheck className="text-white-main size-[22px] sm:size-[26px] flex-shrink-0" />
                <p className="text-base text-[#D9DBE9] font-normal sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>

        <GetStartedBtnWhite/>
      </div>
    </div>
  );
};

export default PremiumPlan;
