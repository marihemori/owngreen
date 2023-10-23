import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className="mx-auto">Loading details ...</div>;
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  const url = process.env.REACT_APP_API_IMAGE;

  return (
    <main className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col mt-[6rem] mb-[8rem]">
      <section className="flex flex-col">
        <h1 className="text-[2rem] mb-[6rem] self-center font-medium border-b-[3px] w-fit border-[#102619]">
          Product details
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div>
            <h2 className="text-[1.8rem] font-semibold mb-4">
              {data[0].attributes.title}
            </h2>
            <p className="bg-accent text-white w-fit text-[1.1rem] p-2 rounded-md font-normal mb-4">
              {data[0].attributes.categories.data[0].attributes.title}
            </p>
            <p className="text-[1.3rem] mb-4">
              {data[0].attributes.description}
            </p>
            <p className="text-[1.3rem] mb-4 font-semibold">
              ${data[0].attributes.price}
            </p>
            <button
              onClick={() => addToCart(data, id)}
              className="text-[1.2rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition mb-4"
            >
              Add to cart
            </button>
          </div>
          <div className="w-full max-w-[65%]">
            <img
              src={url + `${data[0].attributes.image.data.attributes.url}`}
              alt=""
              className="h-[15rem] float-none lg:float-right"
            />
          </div>
        </div>
        <RelatedProducts categoryTitle={categoryTitle} />
      </section>
    </main>
  );
};

export default ProductDetails;
