import React from "react";
import {
  FaFileContract,
  FaMoneyCheck,
  FaMoon,
  FaOutdent,
  FaRegCalendarAlt,
  FaSearch,
  FaSkull,
  FaSun,
} from "react-icons/fa";
import { userDarkMode } from "../hooks/userDarkMode";

export const Test = () => {
  const [colorTheme, setColorTheme] = userDarkMode();

  return (
    <div className="h-[100%] dark:text-white flex">
      <aside className="bg-[#fff] fixed left-0 top-0 bottom-0 dark:border-[#202020] border dark:bg-[#0D0D0D] w-[250px]">
        <div className="px-[15px] h-[80px] flex items-center">
          <div className="w-[50px] mr-[15px] h-[50px] rounded-[8px] bg-[#1B4FE2] text-white flex items-center justify-center">
            <FaSkull />
          </div>
          <div className="dark:text-white text-[#202020] flex mt-[7px] flex-col justify-center">
            <strong className="text-[20px] leading-[16px] uppercase">
              Crm
            </strong>
            <span className="text-[14px] text-gray-400">management</span>
          </div>
          <FaOutdent
            className="ml-auto cursor-pointer hover:text-gray-500 dark:text-[#c5c5c5c5] dark:hover:text-white"
            fontSize={20}
          />
        </div>

        <nav className="mt-[20px]">
          <ul>
            <li className="mx-[20px]">
              <a
                className="px-[15px] active bg-[#1B4FE2] rounded-[8px] w-full transition duration-500 ease-in-out text-white text-[14px] flex items-center py-[10px] mb-[5px] cursor-pointer"
                href="/project/"
              >
                <FaFileContract
                  className="mr-[10px] text-white"
                  fontSize={17}
                />
                Проекты
              </a>
            </li>
            <li className="mx-[20px]">
              <a
                className="px-[15px] group rounded-[8px] w-full transition duration-500 ease-in-out dark:text-[#c5c5c5c5] text-[14px] py-[10px] mb-[5px] cursor-pointer text-[#202020] hover:bg-[#FAFBFC] dark:hover:bg-[#1F2022] flex items-center dark:hover:text-white"
                href="/"
              >
                <FaRegCalendarAlt
                  className="mr-[10px] text-[#202020] dark:text-[#c5c5c5c5] transition duration-500 ease-in-out dark:group-hover:text-white"
                  fontSize={17}
                />
                Календарь
              </a>
            </li>
            <li className="mx-[20px]">
              <a
                className="px-[15px] group rounded-[8px] w-full transition duration-500 ease-in-out dark:text-[#c5c5c5c5] text-[14px] py-[10px] mb-[5px] cursor-pointer text-[#202020] hover:bg-[#FAFBFC] dark:hover:bg-[#1F2022] flex items-center dark:hover:text-white"
                href="/"
              >
                <FaMoneyCheck
                  className="mr-[10px] text-[#202020] dark:text-[#c5c5c5c5] transition duration-500 ease-in-out dark:group-hover:text-white"
                  fontSize={17}
                />
                Финансы
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col flex-1 h-screen">
        <header className="bg-[#fff] flex fixed left-0 right-0 ml-[249px] px-[20px] items-center h-[80px] border dark:border-[#202020] dark:bg-[#0D0D0D] dark:text-white">
          <div className="input-group relative flex mr-[20px] items-stretch w-full">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 pl-[20px] pr-[40px] text-base font-normal text-gray-700 dark:bg-[#1F2022] dark:border-[#202020] bg-clip-padding border rounded-[8px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-[42px]"
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

        <main className="bg-[#fff] rounded-[8px] min-h-[calc(100vh - 100px)] ml-[270px] w-auto h-full mr-[20px] mb-[20px] mt-[100px] p-[20px] border dark:border-[#202020] dark:bg-[#0D0D0D] dark:text-white">
          <div className="side-pannel border dark:border-[#202020] rounded-[8px] flex flex-1 bg-[#FAFBFC] dark:bg-[#000000] px-[20px] py-[10px] mb-[10px]">
            1
          </div>

          <div className="w-full p-[20px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div>
          <div className="w-full p-[20px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div>
          <div className="w-full p-[20px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div>
          <div className="w-full p-[20px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div>
          <div className="w-full p-[20px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div>
        </main>
      </div>
    </div>
  );
};
