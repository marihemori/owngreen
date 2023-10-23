import React, { useEffect, useState } from "react";
// Icons
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
// Hook
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setSearchForm }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {}, 1000);
    // Clear timeout event
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      // document.querySelector(".search").style.display = "none";
      setSearchTerm("");
    }
  };

  return (
    <div className="w-[60rem] h-[14rem] bg-[#F4F4F4] flex flex-col justify-center rounded-lg  px-14 py-6 trnasition">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[100%]">
        <div className="flex flex-row items-center justify-between mb-6">
          <label className="font-medium">Search some item</label>
          <FiX
            onClick={() => setSearchForm(false)}
            className="cursor-pointer text-2xl"
          />
        </div>
        <div className="relative">
          <input
            onChange={handleSearchInput}
            className="bg-transparent border-b-[3px] border-[#102619] w-[100%]"
            type="text"
            placeholder="Search here"
          />
          <button className="absolute top-[0rem] right-0">
            <FiSearch className="text-2xl opacity-60" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
