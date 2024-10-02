"use client";
import React from "react";
import ComponentWrapper from "../../Shared/ComponentWrapper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  const reviews = [
    {
      name: "Raj Sivarajah",
      post: "CEO, Inteli-Edge Consulting",
      image: "/Assets/Raj.png",
      review:
        "“Quanto has assisted us in managing our bookkeeping for our construction projects. Their system has streamlined our processes, making it easier to track expenses and income on a project-by-project basis. With their help, we now have real-time visibility into our cash flow and profit & loss, allowing us to make better-informed financial decisions.”",
    },

    {
      name: "Nicole Baranowski",
      post: "CEO, Hairstrong",
      image: "/Assets/Nicole.png",
      review:
        "“A game-changer for my e-commerce business. Quanto helped be better understand my Shopify, Amazon, and PayPal revenue streams for tax season, giving me clear visibility into my finances. It's saved me time and allowed me to focus on growing my business instead of worrying about the numbers.”",
    },
    {
      name: "Mitchel Campbell",
      post: "CEO, Analyst3",
      image: "/Assets/Mitchel.png",
      review:
        "“Quanto made tax season effortless for us. Their platform streamlined our tax preparation process, ensuring everything was accurate and ready for a smooth filing. It took a huge burden off our shoulders and allowed us to focus on scaling our B2B SaaS business.”",
    },
    {
      name: "Raj Sivarajah",
      post: "CEO, Inteli-Edge Consulting",
      image: "/Assets/Raj.png",
      review:
        "“Quanto has assisted us in managing our bookkeeping for our construction projects. Their system has streamlined our processes, making it easier to track expenses and income on a project-by-project basis. With their help, we now have real-time visibility into our cash flow and profit & loss, allowing us to make better-informed financial decisions.”",
    },

    {
      name: "Nicole Baranowski",
      post: "CEO, Hairstrong",
      image: "/Assets/Nicole.png",
      review:
        "“A game-changer for my e-commerce business. Quanto helped be better understand my Shopify, Amazon, and PayPal revenue streams for tax season, giving me clear visibility into my finances. It's saved me time and allowed me to focus on growing my business instead of worrying about the numbers.”",
    },
    {
      name: "Mitchel Campbell",
      post: "CEO, Analyst3",
      image: "/Assets/Mitchel.png",
      review:
        "“Quanto made tax season effortless for us. Their platform streamlined our tax preparation process, ensuring everything was accurate and ready for a smooth filing. It took a huge burden off our shoulders and allowed us to focus on scaling our B2B SaaS business.”",
    },
  ];
  return (
    <ComponentWrapper style="w-full lg:-mt-[200px] z-20 lg:pb-20 lg:pt-0 py-12">
      <div className="size-full flex flex-col items-center justify-start gap-10 lg:gap-14">
        <div className="lg:h-[560px] w-full md:h-[400px] h-[300px] md:w-[690px] relative">
          <Image
            fill
            alt=""
            className="object-cover z-20"
            src={"/Assets/Mobile.png"}
          />
        </div>
        <h2 className="font-poppins text-balance text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
          Trusted by Businesses Across Canada and the U.S.
        </h2>
        <div className="w-full max-w-full h-[350px]">
          {" "}
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Mousewheel, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={item.name}
                  post={item.post}
                  image={item.image}
                  review={item.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Reviews;
