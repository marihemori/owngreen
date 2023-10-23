import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch.js";
// import components
import ProductSlider from "../components/ProductSlider.js";

const LatestProducts = () => {
  // get new products
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] mb-16 flex flex-col">
      <ProductSlider data={data} key={data} />
    </section>
  );
};

export default LatestProducts;
