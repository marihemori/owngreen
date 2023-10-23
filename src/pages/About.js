import React from "react";

const About = () => {
  return (
    <div className="relative">
      <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col mt-[8rem] mb-[8rem] overflow">
        <div className="flex flex-row justify-between items-center">
          <div className="lg:w-[50%]">
            <h1 className="text-[3rem] mb-[2.5rem] font-semibold">About us</h1>
            <p className="text-[1.3rem]">
              We are a online store that supports NGO’s that fight against
              deforestation and ilegal hunting of animals. We now that’s very
              imporant to use Earth’s resources wisely. We hope that this kings
              of thinking will spread to alot of people. We care about the plant
              life in cities too.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src="/images/svg/about.svg" alt="Nature" />
          </div>
        </div>
        <h1 className="text-[2rem] mt-[8rem] mb-20 self-center font-medium border-b-[3px] w-fit border-[#102619]">
          Our mission
        </h1>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-transparent flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="flex flex-col">
            <h2 className="text-[2rem] font-medium mb-4">
              Deliver the best quality
            </h2>
            <p className="text-[1.3rem]">
              It is important for us to ship the products in their best quality.
            </p>
          </div>
          <div>
            <img
              className="hidden lg:block"
              src="/images/svg/mission1.svg"
              alt="Package"
            />
          </div>
        </div>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-transparent flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="flex flex-col">
            <h2 className="text-[2rem] font-medium mb-4">
              Give costumer confidence
            </h2>
            <p className="text-[1.3rem]">
              We understand that the more confident customers are in our
              products, the easier it will be for us to resolve future issues.
            </p>
          </div>
          <div>
            <img
              className="hidden lg:block"
              src="/images/svg/mission2.svg"
              alt="Heart"
            />
          </div>
        </div>
        <div className="border-[3px] px-20 py-8 rounded-[0.3rem] border-[#1F1F1F] bg-transparent flex flex-row justify-between items-center mb-16 h-[20rem] lg:h-[18rem]">
          <div className="flex flex-col">
            <h2 className="text-[2rem] font-medium mb-4">
              Support the preservation of nature
            </h2>
            <p className="text-[1.3rem]">
              We support NGOs that are focused on protecting nature. We sent
              several donations during the year.
            </p>
          </div>
          <div>
            <img
              className="hidden lg:block"
              src="/images/svg/mission3.svg"
              alt="Plant"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
