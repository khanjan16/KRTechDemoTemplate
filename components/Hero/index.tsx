"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 The realm of finance and technology
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Fintech Consultant
              </h1>
              <p>
              Fintech consultants play a crucial role in helping companies leverage technology to optimize their financial 
              operations and gain a competitive edge in the market. They possess a unique skill set that combines financial 
              acumen with technological expertise.
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="https://th.bing.com/th/id/OIP.MVBPx7DcmktLOe65iFlOZgHaEK?rs=1&pid=ImgDetMain"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="https://th.bing.com/th/id/OIP.MVBPx7DcmktLOe65iFlOZgHaEK?rs=1&pid=ImgDetMain"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
