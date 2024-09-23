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

            
              <a
                href="https://apetergeorge.us17.list-manage.com/subscribe/post?u=3fd9e0f2bf0d5c06832e43a29&amp;id=b025d3fc09&amp;f_id=0022a3e2f0"
                className="h-[50px] sm:h-[56px] flex-shrink-0 w-[165px] bg-brand-secondary rounded-[30px] flex items-center justify-center font-normal text-base sm:text-lg text-black-main"
              >
                Subscribe
              </a>
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

// <div id="mc_embed_shell">
//       <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
//   <style type="text/css">
//         #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
//         /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
//            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
//     <form action="https://apetergeorge.us17.list-manage.com/subscribe/post?u=3fd9e0f2bf0d5c06832e43a29&amp;id=b025d3fc09&amp;f_id=0022a3e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
//         <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
//             <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
//             <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
//         <div id="mce-responses" class="clear foot">
//             <div class="response" id="mce-error-response" style="display: none;"></div>
//             <div class="response" id="mce-success-response" style="display: none;"></div>
//         </div>
//     <div aria-hidden="true" style="position: absolute; left: -5000px;">
//         /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
//         <input type="text" name="b_3fd9e0f2bf0d5c06832e43a29_b025d3fc09" tabindex="-1" value="">
//     </div>
//         <div class="optionalParent">
//             <div class="clear foot">
//                 <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
//                 <p style="margin: 0px auto;"><a href="http://eepurl.com/iXpNeA" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
//             </div>
//         </div>
//     </div>
// </form>
// </div>
// </div>
