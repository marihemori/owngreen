import React from "react";
//link
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const url = process.env.REACT_APP_API_IMAGE;

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border-[3px] rounded-md border-[#000000] group overflow-hidden relative p-8 max-h-[27rem]">
        {product.attributes.isNew ? (
          <div className="absolute text-accent text-[16px] font-semibold top-4 right-4 p-1 rounded-sm z-10">
            <p>New</p>
          </div>
        ) : (
          ""
        )}
        {/* Image */}
        <div className="w-full flex items-center justify-center relative mb-8">
          <img
            className=""
            src={url + `${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
        {/* Description */}
        <div className=" flex flex-col items-center gap-4">
          {/* Title */}
          <div>
            <p className="text-[1.4rem] font-semibold">
              {product.attributes.title.substring(0, 35)}
            </p>
          </div>
          {/* Tag */}
          <div>
            <p className="bg-accent text-white w-fit text-[1.1rem] p-2 rounded-md font-normal">
              {product.attributes.categories.data[0].attributes.title}
            </p>
          </div>
          {/* Price */}
          <div>
            <p className="text-[1.2rem]">${product.attributes.price}</p>
          </div>
          {/* Add to cart */}
          <div>
            <button className="text-[1.2rem] border-[3px] px-4 py-2 rounded-[0.3rem] border-[#000000] font-medium hover:bg-[#BCD2C5] transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
