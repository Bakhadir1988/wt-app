import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import { useSelector } from "react-redux";

export const SidebarMenu = () => {
  const projects = useSelector((state) => state.projects.project);

  return (
    <nav className="flex-grow w-inherit overflow-y-auto h-[calc(100vh-161.5px)]">
      <ul className="h-full overflow-y-auto">
        {projects.map(({ id, name }) => {
          return (
            <li key={id} className="group">
              <NavLink
                to={`project/${id}/`}
                className="group sidebar-link py-[10px] px-[20px] transition-all flex items-center border-l-[3px] text-gray-800 hover:bg-slate-100 hover:border-blue-600 hover:text-blue-600"
              >
                <div className="mr-[10px]">
                  <AiFillFileText
                    fontSize={17}
                    className="text-gray-500 group-hover:fill-blue-600"
                  />
                </div>
                <div>{name}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
