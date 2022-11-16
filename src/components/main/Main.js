import React from "react";
import { useParams } from "react-router-dom";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskItems } from "../task-items/TaskItems";

export const Main = () => {
  const { id } = useParams();
 
  return (
    <main className="p-[20px] w-full h-screen bg-slate-100">
      <div className="flex items-center w-full">
        <h1 className="text-3xl font-semibold">Задача {id}</h1>
        <div className="flex items-center ml-auto">
          <button className="flex items-center bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <div className="icon">
              <FontAwesomeIcon
                className="mr-[10px]"
                icon={faFilter}
                fontSize={17}
              />
            </div>
            Фильтр
          </button>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 ml-[20px] text-white font-semibold py-2 px-4 border border-blue-700 rounded">
            <div className="icon">
              <FontAwesomeIcon
                className="mr-[10px]"
                icon={faPlus}
                fontSize={17}
              />
            </div>
            Создать задачу
          </button>
        </div>
      </div>
      <TaskItems />
    </main>
  );
};
