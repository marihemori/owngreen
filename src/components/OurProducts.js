import React from "react";

const OurProducts = () => {
  return (
    <section className="mb-24 mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px]">
      <div className="flex flex-col">
        <h1 className="text-[2rem] mb-20 self-center text-center font-medium border-b-[3px] w-fit border-[#102619]">
          What are our products
        </h1>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-[#BCD2C5] flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="flex flex-col">
            <h2 className="text-[2rem] uppercase font-medium mb-4">Seeds</h2>
            <p className="text-[1.3rem]">
              Discover nature's potential with our carefully selected plant
              seeds.
            </p>
          </div>
          <div>
            <img
              className="hidden lg:block"
              src="/images/svg/plant1.svg"
              alt="Plant"
            />
          </div>
        </div>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-[#BCD2C5] flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="hidden lg:block">
            <img src="/images/svg/plant2.svg" alt="Plant" />
          </div>
          <div className="flex flex-col lg:text-right">
            <h2 className="text-[2rem] uppercase font-medium mb-4">Remedy</h2>
            <p className="text-[1.3rem] lg:w-[50rem]">
              Our herbal remedies are formulated with natural and effective
              ingredients, carefully selected to provide reliable solutions to a
              variety of problems.
            </p>
          </div>
        </div>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-[#BCD2C5] flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="flex flex-col">
            <h2 className="text-[2rem] uppercase font-medium mb-4">Tools</h2>
            <p className="text-[1.3rem]">
              Discover nature's potential with our carefully selected tools.
            </p>
          </div>
          <div>
            <img
              className="hidden lg:block"
              src="/images/svg/tool1.svg"
              alt="Tool"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
