import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";

const OurPartners = () => {
  return (
    <ComponentWrapper style="w-full lg:py-16 py-12 bg-white-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex flex-col items-center justify-start lg:gap-5">
          <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
            Our Partners
          </h2>
          <p className="text-base font-light lg:w-[70%] text-center sm:text-lg text-black-main text-balance">
            We integrate with the world’s leading financial and business tools,
            making it easier than ever to connect your finances seamlessly.
            Integrated with:
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between gap-5">
          <div className="md:h-[71px] h-[40px] w-[180px] md:w-[350px] relative">
            <Image
              fill
              alt=""
              className="object-contain"
              src={"/Assets/Quick.svg"}
            />
          </div>{" "}
          <div className="md:h-[151px] h-[80px] w-[120px] md:w-[238px] relative">
            <Image
              fill
              alt=""
              className="object-contain"
              src={"/Assets/Shopify.svg"}
            />
          </div>{" "}
          <div className="md:h-[71px] h-[40px] w-[180px] md:w-[350px] relative">
            <Image
              fill
              alt=""
              className="object-contain"
              src={"/Assets/Square.svg"}
            />
          </div>{" "}
          <div className="md:h-[123px] h-[90px] w-[100px] md:w-[177px] relative">
            <Image
              fill
              alt=""
              className="object-contain"
              src={"/Assets/Stripe.svg"}
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OurPartners;
