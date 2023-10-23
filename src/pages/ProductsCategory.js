import React, { useEffect, useState } from "react";
// hooks
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LatestProducts from "../components/LatestProducts";
import CategoriesSelect from "../components/CategoriesSelect";
import Product from "../components/Product";

const ProductsCategory = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });
  return (
    <main className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col mt-[6rem] mb-[8rem]">
      <section>
        <Link to={"/products"}>
          <p className="font-normal text-[1.3rem] mb-10">Return</p>
        </Link>
        <h1 className=" text-[1.3rem] mb-10">
          Products in <span className="font-semibold">{title}</span> category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {data?.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default ProductsCategory;
