import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TaskItemBar } from "../task-item-bar/TaskItemBar";

export const TaskItem = ({ items }) => {
  return (
    <>
      <TaskItemBar />

      <ul>
        {items?.map(({ id, title, director, executor, status, date }) => {
          return (
            <li
              key={id}
              className="mb-[7px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white"
            >
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
              <div className="bar-task-title w-[350px] mr-[20px]">{title}</div>
              <div className="bar-task-name flex-1 mr-[20px]">{director}</div>
              <div className="bar-task-executor flex-1 mr-[20px] ">
                {executor}
              </div>
              <div className="bar-task-status flex-1 mr-[20px]">{status}</div>
              <div className="bar-task-date flex-1 mr-[20px]">{date}</div>
              <div className="bar-task-date w-[42px] mr-[10px] text-center">
                <button className="flex items-center justify-center bg-blue-600 w-[42px] h-[42px] hover:bg-blue-700 mx-auto text-white font-semibold border border-blue-700 rounded">
                  <AiFillEdit fontSize={17} />
                </button>
              </div>
              <div className="bar-task-date w-[42px] text-center">
                <button className="flex items-center justify-center bg-red-600 w-[42px] h-[42px] hover:bg-red-700 mx-auto text-white font-semibold border border-red-700 rounded">
                  <AiFillDelete fontSize={17} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
