import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import { FaCircleCheck } from "react-icons/fa6";
import BasicPlan from "./BasicPlan";
import ContactUs from "./ContactUs";
import PremiumPlan from "./PremiumPlan";
const PricingPlans = () => {
  return (
    <ComponentWrapper id="pricing" style="w-full lg:py-16 py-10 bg-white-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex flex-col items-center justify-start lg:gap-5">
          <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
            Affordable pricing plans
          </h2>
          <p className="text-base font-light lg:w-[70%] text-center sm:text-lg text-black-main text-balance">
            Our flexible pricing gives you top-tier bookkeeping services without
            breaking the bank. Choose a plan that fits your needs and budget to
            stay financially organized.
          </p>
        </div>
        <div className="grid w-full lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
          <BasicPlan />
          <PremiumPlan />
          <ContactUs />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PricingPlans;
