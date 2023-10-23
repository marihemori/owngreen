import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  const url = process.env.REACT_APP_API_IMAGE;

  return (
    <div className="flex justify-between gap-8">
      <div className="h-[7rem] w-[7rem] border-[3px] rounded-md border-[#000000] relative">
        <Link to={`product/${item.id}`} className="w-[12rem]">
          <img
            src={url + `${item.attributes.image.data.attributes.url}`}
            alt="Product"
            className="absolute h-[5rem] left-[2rem] top-[1rem]"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex gap-x-4 justify-between">
          <Link
            to={`product/${item.id}`}
            className="text-[1.3rem] font-semibold mb-4"
          >
            {item.attributes.title}
          </Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] transition-all"
          >
            <IoTrashBinOutline />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center mb-4">
          <div>
            <Qty item={item} />
          </div>
          <div className="font-semibold text-[1.1rem]">
            ${item.attributes.price * item.amount}
          </div>
        </div>
        <div>
          <span className="font-semibold text-sm">
            ${item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
