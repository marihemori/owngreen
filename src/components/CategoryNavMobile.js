import React, { useState } from "react";

// Icons
import { FiX } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

// Link
import { Link } from "react-router-dom";

// components
import SearchForm from "../components/SearchForm";

const CategoryNavMobile = ({ setNavMobile }) => {
  const [searchForm, setSearchForm] = useState(false);
  return (
    <div className="w-full h-full p-8 bg-[#F4F4F4]">
      {/* Close icon */}
      <div className="flex flex-row justify-between">
        <div onClick={() => setNavMobile(false)}>
          <FiX className="text-3xl" />
        </div>
        {/* Search */}
        <div>
          <div
            onClick={() => setSearchForm(true)}
            className="text-3xl flex cursor-pointer"
          >
            <FiSearch />
          </div>
          <div
            className={`${
              searchForm
                ? "search fixed z-50 transition-all h-[100vh] w-[100vw] top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/20"
                : "hidden"
            } f`}
          >
            <SearchForm setSearchForm={setSearchForm} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <ul className="flex flex-col gap-8 text-[1.3rem] items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Our Products</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
        </ul>
      </div>
    </div>
  );
};

export default CategoryNavMobile;
