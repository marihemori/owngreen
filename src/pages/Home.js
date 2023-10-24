import { Link } from "react-router-dom";
import React from "react";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <OurProducts />
      <div className="flex flex-col">
        <h1 className="text-[2rem] mb-20 self-center text-center font-medium border-b-[3px] w-fit border-[#102619]">
          Our new products
        </h1>{" "}
        <LatestProducts />
      </div>
      <div className="flex place-content-center">
        <Link
          to={"/products"}
          className="mt-10 items-center text-[1.2rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition"
        >
          See all the products
        </Link>
      </div>
      <Newsletter />
    </main>
  );
};

export default Home;
