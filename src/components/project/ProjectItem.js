import React from "react";
import { FaRegEdit, FaTrashRestore } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { removeProject } from "../../features/projects/projectsSlice";

export const ProjectItem = ({ projects }) => {
  const dispatch = useDispatch();

  return (
    <>
      {projects.length === 0 ? (
        <div className="flex-col items-center justify-center h-full flex rounded-[5px]">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl mb-[20px]">Создайте проект</h3>
            <p className="text-center">
              Здесь будет список проектов, которые вы выполняете вместе с
              коллегами
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex mt-[20px] text-[14px] items-center bar-project mb-[7px] min-h-[50px] rounded-[8px] border  px-[15px] py-[10px] bg-white dark:bg-[#1F2022] dark:border-[#202020]">
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
                    className="w-full text-[14px] px-[20px] py-[10px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]"
                  >
                    <NavLink
                      className="bar-project-title w-[350px] mr-[20px] hover:text-[#1B4FE2]"
                      to={`/projects/${id}/`}
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
                              {participant}
                            </a>
                          );
                        })}
                    </div>
                    <div className="flex-1 mr-[20px]">
                      {createDate ? createDate : "-"}
                    </div>
                    <div className="flex-1 mr-[20px]">
                      {endDate ? endDate : "-"}
                    </div>
                    <div className="flex-1 mr-[20px] text-green-500">
                      {status ? status : "Активен"}
                    </div>
                    <div className="w-[42px] mr-[5px] text-center">
                      <Link
                        to={`${id}/edit/`}
                        className="flex group items-center border justify-center w-[42px] h-[42px] bg-[#FAFBFC] hover:bg-[#1B4FE2] hover:border-[#1B4FE2] dark:border-[#202020] dark:bg-[#0D0D0D] dark:hover:bg-[#1B4FE2] mx-auto  rounded-[8px]"
                      >
                        <FaRegEdit
                          className="group-hover:text-white group-hover:trans"
                          fontSize={15}
                        />
                      </Link>
                    </div>
                    <div className="w-[42px] text-center">
                      <button
                        onClick={() => dispatch(removeProject({ id }))}
                        className="flex hover:trans group items-center border justify-center w-[42px] h-[42px] bg-[#FAFBFC] dark:border-[#202020] dark:bg-[#0D0D0D] mx-auto hover:bg-red-700 dark:hover:bg-red-900 rounded-[8px]"
                      >
                        <FaTrashRestore
                          className="group-hover:text-white group-hover:trans"
                          fontSize={14}
                        />
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
