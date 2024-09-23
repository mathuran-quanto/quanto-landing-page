import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

const Faq = () => {
  return (
    <ComponentWrapper
      id="faq"
      style="lg:pt-16 lg:pb-4 py-10 w-full bg-white-main"
    >
      <div className="size-full lg:w-[80%] flex flex-col items-center justify-start gap-8 sm:gap-12 lg:mx-auto">
        <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked
              className="peer"
            />
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              How does your bookkeeping service work?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                We work with you as your dedicated bookkeeper serving your
                monthly financial needs. We connect with your existing
                accounting software and our internal platform handles the rest.
                On our end, we automate your bookkeeping process by categorizing
                your transactions tailored to your specific industry and
                reconcile your accounts using our AI model.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input type="radio" name="my-accordion-3" className="peer" />
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              What types of businesses do you support?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                We work with you as your dedicated bookkeeper serving your
                monthly financial needs. We connect with your existing
                accounting software and our internal platform handles the rest.
                On our end, we automate your bookkeeping process by categorizing
                your transactions tailored to your specific industry and
                reconcile your accounts using our AI model.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input type="radio" name="my-accordion-3" className="peer" />
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              Can I use my current accounting software with Quanto?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                We work with you as your dedicated bookkeeper serving your
                monthly financial needs. We connect with your existing
                accounting software and our internal platform handles the rest.
                On our end, we automate your bookkeeping process by categorizing
                your transactions tailored to your specific industry and
                reconcile your accounts using our AI model.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input type="radio" name="my-accordion-3" className="peer" />
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              What countries and regions do you support?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                We work with you as your dedicated bookkeeper serving your
                monthly financial needs. We connect with your existing
                accounting software and our internal platform handles the rest.
                On our end, we automate your bookkeeping process by categorizing
                your transactions tailored to your specific industry and
                reconcile your accounts using our AI model.
              </p>
            </div>
          </div>
        </div>
        <button className="h-[50px] sm:h-[56px] w-[160px] sm:w-[176px] flex items-center justify-center flex-shrink-0 rounded-[30px] bg-brand-secondary text-base font-normal sm:text-lg text-black-main">
          Visit Full FAQ
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Faq;
