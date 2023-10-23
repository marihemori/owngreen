import React from "react";
// hooks
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// components
import LatestProducts from "../components/LatestProducts";
import AllProducts from "../components/AllProducts";
import CategoriesSelect from "../components/CategoriesSelect";

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  return (
    <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col mt-[6rem] mb-[8rem]">
      <h1 className="text-[2rem] mb-20 self-center font-medium border-b-[3px] w-fit border-[#102619]">
        Our products
      </h1>
      <h2 className="text-[1.8rem] mb-20 text-left font-medium">
        Our new products
      </h2>
      <LatestProducts />
      <div className="flex flex-col gap-3 lg:flex-row justify-between mb-20">
        <h2 className="text-[1.8rem] text-left font-medium">
          All the products
        </h2>
        <div className="flex flex-row items-center">
          <h2 className="text-[1.5rem] text-left font-medium mr-4">Sort by</h2>
          <CategoriesSelect />
        </div>
      </div>
      <AllProducts />
    </section>
  );
};

export default Products;
