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
      <h2 className="h2 mb-20 text-center font-medium">Our new products</h2>
      <LatestProducts />
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
