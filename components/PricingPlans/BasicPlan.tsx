import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const BasicPlan = () => {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-full h-full lg:h-[720px] flex flex-col items-start justify-start gap-5 text-black-tertary font-dmSans bg-white-main shadow-lg rounded-[40px] p-8 relative">
        <span className="absolute top-4 right-3 bg-brand-secondary rounded-[10px] h-[40px] w-[100px] flex items-center justify-center text-sm text-black-secondary">
          Popular
        </span>
        <p className="text-2xl sm:text-3xl font-bold">Basic</p>
        <span className="font-bold text-[44px] sm:text-[56px]">
          $450<span className="text-3xl sm:text-4xl">+HST</span>
          <span className="font-medium text-lg sm:text-xl text-[#6F6C90]">
            /monthly
          </span>
        </span>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {" "}
          <p className="text-xl font-bold sm:text-2xl">Monthly</p>
          {[
            "Expense Categorization",
            "Bank Reconcilation",
            "Standard Monthly Reporting",
            "Monthly Review Call",
            "A/R and A/P Recording",
          ].map((item: string, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-start gap-3"
            >
              <FaCircleCheck className="text-brand-main size-[22px] sm:size-[26px] flex-shrink-0" />
              <p className="text-base font-normal sm:text-lg">{item}</p>
            </div>
          ))}
        </div>{" "}
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {" "}
          <p className="text-xl font-bold sm:text-2xl">Also Included</p>
          {[
            "Accounting System Subscription (QBO)",
            "Annual GST / HST Filing",
          ].map((item: string, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-start gap-3"
            >
              <FaCircleCheck className="text-brand-main size-[22px] sm:size-[26px] flex-shrink-0" />
              <p className="text-base font-normal sm:text-lg">{item}</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-2 flex-shrink-0 sm:h-[72px] h-[60px] text-white-main text-base font-bold sm:text-lg flex items-center justify-center bg-brand-main rounded-[40px]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default BasicPlan;
