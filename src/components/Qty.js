import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleSelect, handleInput } = useContext(CartContext);
  return (
    <div className="flex gap-x-6 items-center">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}
          className="p-2 border-[3px] rounded-[0.3rem] border-[#000000] h-12 text-primary"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          className="text-[1.2rem] border-[3px] rounded-[0.3rem] border-[#000000] font-medium placeholder:text-black p-1 w-[120px] outline-sky-600"
          type="text"
          placeholder={`${item.amount}`}
        />
      )}
    </div>
  );
};

export default Qty;
