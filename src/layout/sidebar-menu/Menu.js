import React from "react";
import { FaFileContract, FaMoneyCheck, FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./style.css";

export const SidebarMenu = () => {
  return (
    <nav className="mt-[20px]">
      <ul>
        <li className="mx-[20px]">
          <NavLink to={`/projects/`} className="menu-link group">
            <FaFileContract
              className="menu-icon dark:group-hover:text-white"
              fontSize={17}
            />
            Проекты
          </NavLink>
        </li>

        <li className="mx-[20px]">
          <NavLink className="menu-link group" to={`/calendar/`}>
            <FaRegCalendarAlt
              className="menu-icon dark:group-hover:text-white"
              fontSize={17}
            />
            Календарь
          </NavLink>
        </li>

        <li className="mx-[20px]">
          <NavLink className="menu-link group" to={`/finance/`}>
            <FaMoneyCheck
              className="menu-icon dark:group-hover:text-white"
              fontSize={17}
            />
            Финансы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
