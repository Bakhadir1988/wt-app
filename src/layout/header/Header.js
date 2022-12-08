import React from "react";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { userDarkMode } from "../../hooks/userDarkMode";

export const Header = () => {
  const [colorTheme, setColorTheme] = userDarkMode();

  return (
    <header className="header">
      <div className="input-group relative flex mr-[20px] items-stretch w-full">
        <input
          type="search"
          className="input"
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
        className="flex ml-auto bg-[#767976] dark:bg-[#767976] w-[35px] h-[35px] items-center justify-center  rounded-[100%]"
        onClick={() => setColorTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <button className="">
            <FaSun className="text-white dark:text-black" fontSize={17} />
          </button>
        ) : (
          <button className="">
            <FaMoon className="text-white dark:text-black" fontSize={17} />
          </button>
        )}
      </div>
    </header>
  );
};
