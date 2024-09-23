import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <ComponentWrapper style="w-full overflow-hidden bg-transparent lg:h-[calc(100%-100px)] h-[calc(100%-80px)]">
      <div className="size-full flex flex-col items-center justify-center sm:justify-start gap-10 lg:pt-10 py-12 lg:pb-0">
        <span className="font-poppins text-5xl sm:text-[65px] font-semibold text-white-main text-center text-balance">
          Reliable{" "}
          <span className="text-brand-secondary relative inline-block">
            Bookkeeping.{" "}
            <span className="absolute -top-10 -right-16 w-[103px] h-[130px]">
              <Image
                width={83}
                height={130}
                alt=""
                src="/Assets/HeroArrow.svg"
                className="object-fill"
              />
            </span>{" "}
          </span>
          <span className="bg-[url('/Assets/OrangeUnderline.svg')] bg-bottom bg-fill bg-no-repeat">
            Stress-Free
          </span>{" "}
          Financials.
        </span>
        <p className="text-center text-balance text-base sm:text-lg font-light text-white-main">
          Managing your business is hard enough. Let us handle your financials
          with ease and accuracy, so you can focus on what really matters. From
          streamlined bookkeeping to expert financial insights, we make sure you
          have the clarity you need.
        </p>
        <div className="w-full flex items-center justify-center gap-5">
          <button className="sm:h-[56px] h-[50px] w-[190px] text-base sm:text-lg font-normal flex items-center justify-center border border-white-main bg-transparent text-white-main rounded-[50px]">
            Book A Demo
          </button>
          <button className="sm:h-[56px] h-[50px] w-[190px] text-base sm:text-lg font-normal flex items-center justify-center  text-black-main bg-brand-secondary rounded-[50px]">
            Get Started
          </button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
