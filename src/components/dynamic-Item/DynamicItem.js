import React from "react";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DynamicItem = (item) => {
  return (
    <li key={item.id} className="group">
      <a
        className="py-[10px] px-[20px] transition-all flex items-center border-l-[3px] text-gray-800 hover:bg-slate-100 hover:border-blue-600"
        href={item.url}
      >
        <div className="mr-[10px]">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="text-gray-500"
            fontSize={17}
          />
        </div>
        <div>{item.name}</div>
      </a>
    </li>
  );
};
