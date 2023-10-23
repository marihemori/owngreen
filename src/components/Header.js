import React, { useContext, useState } from "react";

// images

// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

// link
import { Link } from "react-router-dom";

// components
import SearchForm from "../components/SearchForm";
import Cart from "../components/Cart";
import CategoryNavMobile from "../components/CategoryNavMobile";

// cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [navMobile, setNavMobile] = useState(false);
  const [searchForm, setSearchForm] = useState(false);

  return (
    <>
      <header className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex-row justify-between items-center my-10 hidden lg:flex">
        {/* Logo */}
        <div className="">
          <Link to={"/"}>
            <img src="/images/svg/owngreen.svg" alt="Logo" />
          </Link>
        </div>
        {/* Menu Links */}
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-8 text-[1.3rem]">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Our Products</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        {/* Icons */}
        <div className="flex flex-row text-[1.3rem] gap-8">
          <div
            onClick={() => setSearchForm(true)}
            className="text-3xl flex cursor-pointer"
          >
            <FiSearch />
          </div>
          <div
            className="text-3xl relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SlBag />
            <div className="bg-accent text-white rounded-full absolute w-[30px] h-[30px] bottom-3 -right-5 text-[1.2rem] flex justify-center items-center tracking-[-0.1em]">
              {itemsAmount}
            </div>
          </div>
          <div
            className={`${
              searchForm
                ? "search fixed z-30 transition-all h-[100vh] w-[100vw] top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/20"
                : "hidden"
            } f`}
          >
            <SearchForm setSearchForm={setSearchForm} />
          </div>
        </div>
        {/* Cart */}
        <div
          className={`
        ${isOpen ? "right-0" : "-right-full"}
        search block shadow-2xl fixed top-0 bottom-0 w-full md:max-w-[500px] transition-all duration-300 bg-[#F4F4F4] rounded-l-xl p-[2rem] z-30  overflow-y-auto overflow-x-hidden`}
          id="search"
        >
          <Cart />
        </div>
      </header>

      <header className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-row items-center justify-between  my-10 lg:hidden">
        {/* Menu */}
        <div
          onClick={() => setNavMobile(true)}
          className="text-3xl lg:hidden cursor-pointer"
        >
          <FiMenu />
          {/* Nav mobile */}
          <div
            className={`${
              navMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition`}
          >
            <CategoryNavMobile setNavMobile={setNavMobile} />
          </div>
        </div>

        {/* Logo */}
        <div className="">
          <Link to={"/"}>
            <img src="/images/svg/owngreen.svg" alt="Logo" />
          </Link>
        </div>

        {/* Bag */}
        <div>
          <div
            className="text-3xl relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SlBag />
            <div className="bg-accent text-white rounded-full absolute w-[30px] h-[30px] bottom-3 -right-5 text-[1.2rem] flex justify-center items-center tracking-[-0.1em]">
              {itemsAmount}
            </div>
          </div>
          <div
            className={`
            ${isOpen ? "right-0" : "-right-full"}
            search block shadow-2xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300 bg-[#F4F4F4] rounded-l-xl p-[2rem]`}
            id="search"
          >
            <Cart />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
