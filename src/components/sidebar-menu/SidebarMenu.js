/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const SidebarMenu = () => {

  const API_URL = `http://localhost:3001/project`;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex-grow w-inherit overflow-y-auto h-full">
      <ul className="h-full overflow-y-auto">
        {projects.map(({ id, name }) => {
          return (
            <li key={id} className="group">
              <NavLink
                to={`project/${id}`}
                className="sidebar-link py-[10px] px-[20px] transition-all flex items-center border-l-[3px] text-gray-800 hover:bg-slate-100 hover:border-blue-600"
              >
                <div className="mr-[10px]">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="text-gray-500"
                    fontSize={17}
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
