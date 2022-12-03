import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../features/projects/projectsSlice";

export const ModalProject = ({ setVisible }) => {
  const [inputTitle, setInputTitle] = useState("");

  const dispatch = useDispatch();

  const addProjectItem = () => {
    if (inputTitle) {
      const project = {
        name: inputTitle,
      };

      setVisible(false);
      dispatch(addProject({ project }));

      setInputTitle("");
    }
  };

  return (
    <>
      <div className="task-info p-[20px] w-full h-full overflow-y-auto overflow-x-hidden">
        <h1 className="h1 border-b pb-[20px] mb-[20px]">Новый проект</h1>
        <div className="task-conten bg-white rounded p-[20px]">
          <form action="">
            <input
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              type="text"
              placeholder="Введите название проекта"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-[20px]"
            />
            <textarea
              rows="5"
              placeholder="Описание"
              className=" form-control block w-full px-3 py-1.5 text-base h-[400px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </form>
        </div>
      </div>
      <div className="task-button flex items-center w-full left-[280px] right-[20px] p-[20px] border-t mt-auto">
        <button onClick={addProjectItem} type="submit" className="btn-default">
          Создать проект
        </button>
        <button
          className="btn-transparent ml-[20px]"
          onClick={() => setVisible(false)}
        >
          Отмена
        </button>
      </div>
    </>
  );
};
