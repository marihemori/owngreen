import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch.js";
// import components
import Product from "../components/Product";

const LatestProducts = () => {
  // get new products
  const { data } = useFetch("/products?populate=*");
  return (
    <div>
      <div className="grid-cols-1 lg:grid-cols-3 grid gap-28">
        {data?.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
