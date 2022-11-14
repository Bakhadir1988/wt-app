import { faDeleteLeft, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TaskItems = () => {
  return (
    <>
      <div className="flex mt-[50px] items-center bar-task mb-[7px] shadow min-h-[50px] rounded-[5px] border px-[15px] py-[10px] bg-white">
        <div className="bar-task-checkbox w-[25px] mr-[20px]">
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer mt-[2px]"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
        <div className="bar-task-title w-[350px] mr-[20px]">Название</div>
        <div className="bar-task-name flex-1 mr-[20px]">Постановщик</div>
        <div className="bar-task-executor flex-1 mr-[20px]">Исполнитель</div>
        <div className="bar-task-status flex-1 mr-[20px]">Статаус</div>
        <div className="bar-task-date flex-1 mr-[20px]">Дата создания</div>
        <div className="bar-task-date w-[42px] mr-[10px]"></div>
        <div className="bar-task-date w-[42px]"></div>
      </div>
      <ul className="mt-[10px]">
        <li className="mb-[7px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white">
          <div className="bar-task-checkbox w-[25px] mr-[20px]">
            <div className="form-check">
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer mt-[2px]"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </div>
          <div className="bar-task-title w-[350px] mr-[20px]">
            Сделать верстку блока на главной странице
          </div>
          <div className="bar-task-name flex-1 mr-[20px]">
            Лапочкина Кристина
          </div>
          <div className="bar-task-executor flex-1 mr-[20px] ">
            Иркабаев Бахадир
          </div>
          <div className="bar-task-status flex-1 mr-[20px]">
            Ждет выполнения
          </div>
          <div className="bar-task-date flex-1 mr-[20px]">13 ноября, 02:04</div>
          <div className="bar-task-date w-[42px] mr-[10px] text-center">
            <button className="flex items-center justify-center bg-blue-600 w-[42px] h-[42px] hover:bg-blue-700 mx-auto text-white font-semibold border border-blue-700 rounded">
              <FontAwesomeIcon icon={faPencilAlt} color="#fff" fontSize={15} />
            </button>
          </div>
          <div className="bar-task-date w-[42px] text-center">
            <button className="flex items-center justify-center bg-blue-600 w-[42px] h-[42px] hover:bg-blue-700 mx-auto text-white font-semibold border border-blue-700 rounded">
              <FontAwesomeIcon icon={faTrash} color="#fff" fontSize={15} />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
