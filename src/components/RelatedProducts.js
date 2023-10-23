import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <section className="mt-[8rem]">
      <h1 className="text-[1.8rem] mb-20 text-left font-medium">
        Related Products
      </h1>
      <ProductSlider data={data} />
    </section>
  );
};

export default RelatedProducts;
