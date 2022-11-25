import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="shadow h-[80px] z-10 flex w-full items-center fixed top-0 border-b left-0 bg-white">
      <div className="logo w-[250px] text-center px-[20px] h-[80px] flex bg-white border-b items-center justify-center">
        <img className="w-[50px]" src={Logo} alt="logo" />
      </div>

      <div className="flex justify-center px-[20px] flex-1">
        <div className="input-group relative flex items-stretch w-full">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-[42px]"
            placeholder="Поиск"
            aria-label="Поиск"
            aria-describedby="button-addon2"
          />
          <button className="btn-default">
            <AiOutlineSearch fontSize={17} />
          </button>
        </div>
      </div>
    </header>
  );
};
