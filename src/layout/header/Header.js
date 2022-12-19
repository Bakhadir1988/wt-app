import React from "react";
import { FaBars, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { userDarkMode } from "../../hooks/userDarkMode";

export const Header = () => {
  const [colorTheme, setColorTheme] = userDarkMode();

  return (
    <header className="header">
      <FaBars
        className="ml-0 mr-auto cursor-pointer hover:text-gray-500 dark:text-[#c5c5c5c5] dark:hover:text-white"
        fontSize={20}
      />
      <div className="input-group relative flex mr-[20px] items-stretch w-[40%]">
        <input
          type="search"
          className="input-search"
          placeholder="Поиск"
          aria-label="Поиск"
          aria-describedby="button-addon2"
        />
        <button className="absolute right-[15px] top-0 bottom-0">
          <FaSearch
            fontSize={17}
            className="text-[#c5c5c5c5] hover:text-white"
          />
        </button>
      </div>

      <div
        className="group flex ml-auto bg-[#FAFBFC] border dark:border-none hover:bg-[#E6E6E6] dark:bg-[#1F2022] w-[35px] h-[35px] items-center justify-center rounded-[100%] dark:group-hover:bg-[#272727]"
        onClick={() => setColorTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <button className="">
            <FaSun
              className="text-white dark:text-[#c5c5c5c5] dark:group-hover:text-white"
              fontSize={17}
            />
          </button>
        ) : (
          <button className="">
            <FaMoon className="text-black dark:text-black" fontSize={17} />
          </button>
        )}
      </div>
    </header>
  );
};
