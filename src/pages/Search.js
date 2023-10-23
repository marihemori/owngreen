import React from "react";
// useLocation hook
import { useLocation } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  // get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <main className="mb-[8rem]">
      <section className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] mt-24">
        <p className="mb-10 text-[1.1rem] uppercase">
          {data?.length > 0
            ? `${data.length} results for ${searchTerm}`
            : `no results found for ${searchTerm}`}
        </p>
        <h1 className="mb-16 text-[1.6rem]">
          Your search result for{" "}
          <span className="font-medium">{searchTerm}</span>
        </h1>
        <div>
          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-col-4 gap-[15px]">
            {data?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
