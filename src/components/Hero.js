import React from "react";

const Hero = () => {
  return (
    <section className="flex lg:flex-row items-center mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] justify-between mb-24 mt-32">
      <div className="hidden lg:block">
        <img src="/images/svg/nature.svg" alt="Nature" />
      </div>
      <div className="lg:text-right flex flex-col gap-8">
        <h1 className="font-semibold text-[4rem]">
          Your garden,
          <br /> where you need it.
        </h1>
        <div className="relative">
          <div>
            <p className="text-[1.3rem]  mb-4">
              Organic seeds, ready to be grown in your home.
            </p>
          </div>
          <div>
            <hr className="w-[27rem] h-1 mx-auto my-4 border-0 rounded md:my-10 bg-accent absolute hidden lg:block lg:right-0 md:top-0"></hr>
          </div>
        </div>
        <button className="text-[1.3rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition w-fit lg:self-end">
          See the products
        </button>
      </div>
    </section>
  );
};

export default Hero;
