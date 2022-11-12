/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SidebarMenu = () => {
  const menu = [
    {
      id: 0,
      name: "Project 1",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 1,
      name: "Project 2",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 2,
      name: "Project 3",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 3,
      name: "Project 4",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },

    {
      id: 4,
      name: "Project 5",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 5,
      name: "Project 6",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 6,
      name: "Project 7",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 7,
      name: "Project 8",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 8,
      name: "Project 9",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
    {
      id: 9,
      name: "Project 10",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          className="text-gray-500 group-hover:text-gray-100"
          fontSize={17}
        />
      ),
    },
  ];

  return (
    <nav className="p-[20px] flex-grow w-inherit overflow-y-auto h-full">
      <ul className="h-full overflow-y-auto">
        {menu.map((item) => {
          return (
            <li key={item.id} className="group mb-[12px] last:mb-0">
              <a
                className="py-[10px] px-[20px] transition-all flex items-center rounded-[5px] bg-slate-100 text-gray-500 hover:bg-blue-600"
                href="#"
              >
                <div className="mr-[10px]">{item.icon}</div>
                <div className="group-hover:text-gray-100">{item.name}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
