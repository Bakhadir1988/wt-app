import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";

export const ProjectItems = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <>
      {!projects && (
        <div className="bg-white flex-col items-center justify-center min-h-[746px] flex rounded-[5px]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl mb-[20px]">Создайте проект</h3>
            <p className="text-center">
              Здесь будет список проектов, которые вы выполняете вместе с
              коллегами
            </p>
          </div>
        </div>
      )}

      <div className="flex mt-[20px] items-center bar-task mb-[7px] shadow min-h-[50px] rounded-[5px] border px-[15px] py-[10px] bg-white">
        <div className="bar-task-title w-[350px] mr-[20px]">Название</div>
        <div className="bar-task-name flex-1 mr-[20px]">Статус</div>
        <div className="bar-task-executor flex-1 mr-[20px]">Дата создания</div>
        <div className="bar-task-status flex-1 mr-[20px]">Дата окончания</div>
        <div className="bar-task-date flex-1 mr-[20px]">Менеджер</div>
        <div className="bar-task-date flex-1 mr-[20px]">Оптимизатор</div>
        <div className="bar-task-date flex-1 mr-[20px]">Участники</div>
        <div className="bar-task-date w-[42px] mr-[10px]"></div>
        <div className="bar-task-date w-[42px]"></div>
      </div>

      <ul>
        {projects?.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="mb-[7px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white"
            >
              <div className="bar-task-title w-[350px] mr-[20px]">{name}</div>
              <div className="bar-task-name flex-1 mr-[20px]">Статус</div>
              <div className="bar-task-name flex-1 mr-[20px]">
                Дата создания
              </div>
              <div className="bar-task-name flex-1 mr-[20px]">
                Дата окончания
              </div>
              <div className="bar-task-name flex-1 mr-[20px]">Менеджер</div>
              <div className="bar-task-name flex-1 mr-[20px]">Оптимизатор</div>
              <div className="bar-task-status flex-1 mr-[20px]">Участники</div>
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
