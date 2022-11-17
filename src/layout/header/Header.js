import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className="shadow h-[80px] z-10 flex w-full items-center sticky top-0 border-b left-0 bg-white">
      <div className="logo w-[250px] text-center px-[20px] h-[80px] flex bg-white border-b items-center justify-center">
        <img className="w-[50px]" src={Logo} alt="logo" />
      </div>

      <div className="flex justify-center px-[20px] flex-1">
        <div className="input-group relative flex items-stretch w-full">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Поиск"
            aria-label="Поиск"
            aria-describedby="button-addon2"
          />
          <button
            className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon icon={faSearch} color="#fff" fontSize={17} />
          </button>
        </div>
      </div>
    </header>
  );
};
