import React from "react";
import { AiFillDelete, AiFillEdit, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeProject } from "../../features/projects/projectsSlice";

export const ProjectItems = () => {
  const projects = useSelector((state) => state.projects.project);

  const dispatch = useDispatch();

  return (
    <>
      {projects.length === 0 && (
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
      {projects.length > 0 && (
        <>
          <div className="flex mt-[20px] items-center bar-project mb-[7px] shadow min-h-[50px] rounded-[5px] border px-[15px] py-[10px] bg-white">
            <div className="bar-project-title w-[350px] mr-[20px]">
              Название
            </div>
            <div className="bar-project-name flex-1 mr-[20px]">Менеджер</div>
            <div className="bar-project-executor flex-1 mr-[20px]">
              Оптимизатор
            </div>
            <div className="bar-project-status flex-1 mr-[20px]">Участники</div>
            <div className="bar-project-date flex-1 mr-[20px]">
              Дата создания
            </div>
            <div className="bar-project-date flex-1 mr-[20px]">
              Дата окончания
            </div>
            <div className="bar-project-date flex-1 mr-[20px]">Статус</div>
            <div className="bar-project-date w-[42px] mr-[10px]"></div>
            <div className="bar-project-date w-[42px]"></div>
          </div>
          <ul>
            {projects?.map(
              ({
                id,
                name,
                status,
                createDate,
                participants,
                manager,
                optimizer,
                endDate,
              }) => {
                return (
                  <li
                    key={id}
                    className="mb-[7px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white"
                  >
                    <NavLink
                      className="bar-project-title w-[350px] mr-[20px]"
                      to={`project/${id}/`}
                    >
                      {name ? name : "-"}
                    </NavLink>
                    <div className="bar-project-name flex-1 mr-[20px]">
                      {manager?.value ? manager?.value : "-"}
                    </div>
                    <div className="bar-project-name flex-1 mr-[20px]">
                      {optimizer?.value ? optimizer?.value : "-"}
                    </div>

                    <div className="bar-project-status flex flex-1 flex-wrap mr-[20px]">
                      {participants?.value &&
                        participants?.value.map((participant, index) => {
                          return (
                            <a
                              key={index}
                              href={participant}
                              className="mr-[2px] mb-[2px]"
                              title={participant}
                            >
                              <AiOutlineUser
                                color="#2AC764"
                                fontSize={10}
                                className={`cursor-pointer ${
                                  participants?.value.length >= 4
                                    ? "w-[18px] h-[18px]"
                                    : "w-[25px] h-[25px]"
                                } rounded-[100%] border border-green-500 flex items-center justify-center`}
                              />
                            </a>
                          );
                        })}
                    </div>
                    <div className="bar-project-name flex-1 mr-[20px]">
                      {createDate ? createDate : "-"}
                    </div>
                    <div className="bar-project-name flex-1 mr-[20px]">
                      {endDate ? endDate : "-"}
                    </div>
                    <div className="bar-project-name flex-1 mr-[20px] text-green-500">
                      {status ? status : "Активен"}
                    </div>
                    <div className="bar-project-date w-[42px] mr-[10px] text-center">
                      <button className="flex items-center justify-center bg-blue-600 w-[42px] h-[42px] hover:bg-blue-700 mx-auto text-white font-semibold border border-blue-700 rounded">
                        <AiFillEdit fontSize={17} />
                      </button>
                    </div>
                    <div
                      onClick={() => dispatch(removeProject({ id }))}
                      className="bar-project-date w-[42px] text-center"
                    >
                      <button className="flex items-center justify-center bg-red-600 w-[42px] h-[42px] hover:bg-red-700 mx-auto text-white font-semibold border border-red-700 rounded">
                        <AiFillDelete fontSize={17} />
                      </button>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </>
      )}
    </>
  );
};
