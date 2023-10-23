import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-[#F4F4F4]">
      <div className="mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1450px] flex flex-col py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
          <div>
            <h1 className="uppercase text-[1.4rem] font-medium mb-4">
              Owngreen
            </h1>
            <ul className="flex flex-col gap-3 text-[1.2rem] ">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Our products</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-[1.4rem] font-medium mb-4">
              Products
            </h1>
            <ul className="flex flex-col gap-3 text-[1.2rem] ">
              <li>
                <Link to={"/"}>Seeds</Link>
              </li>
              <li>
                <Link to={"/products"}>Remedy</Link>
              </li>
              <li>
                <Link to={"/contact"}>Tools</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-[1.4rem] font-medium mb-4">Legal</h1>
            <ul className="flex flex-col gap-3 text-[1.2rem] ">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Our products</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between lg:items-center mt-10">
          <div className="flex flex-row items-center gap-6">
            <img
              className="w-auto"
              src="/images/mastercard.png"
              alt="Mastercard"
            />
            <img className="h-[2rem]" src="/images/visa.png" alt="Visa" />
          </div>
          <div>
            <p className="text-[1.2rem]">Evergreen © 2023 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
