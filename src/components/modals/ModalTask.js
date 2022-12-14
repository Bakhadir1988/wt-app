import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addTask } from "../../features/task/taskSlice";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import Select from "react-select";

export const ModalTask = ({ setVisible }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [textareaText, setTextareaText] = useState("");
  const [select, setSelect] = useState();
  const { id } = useParams();
  const todayDate = format(new Date(), "dd MMMM yyyy, HH:mm", {
    locale: ru,
  });

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const addTaskItem = () => {
    if (inputTitle) {
      const task = {
        id: id,
        title: inputTitle,
        content: textareaText,
        status: "Ждет выполнения",
        executor: select.label,
        director: "Рахматулин Альберт",
        date: todayDate,
      };

      setVisible(false);
      dispatch(addTask({ task }));

      setInputTitle("");
      setTextareaText("");
    }
  };

  const handleChange = (selectedOptions) => {
    setSelect(selectedOptions);
  };

  return (
    <>
      <div className="task-info p-[20px] w-full h-full overflow-y-auto overflow-x-hidden">
        <h1 className="h1 border-b pb-[20px] mb-[20px]">Новая задача</h1>
        <div className="task-conten bg-white rounded p-[20px]">
          <form action="">
            <input
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder="Введите название задачи"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-[20px]"
            />
            <textarea
              value={textareaText}
              onChange={(e) => setTextareaText(e.target.value)}
              rows="5"
              placeholder="Описание"
              className=" form-control block w-full px-3 py-1.5 text-base h-[400px] font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <div className="flex items-center mt-[20px]">
              <div className="bloc mb-1 pr-4 mr-[20px]">
                Выбрать исполнителя
              </div>
              <Select
                onChange={handleChange}
                className="form-select appearance-none block text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-[20%]"
                options={users}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="task-button flex items-center w-full left-[280px] right-[20px] p-[20px] border-t mt-auto">
        <button
          onClick={() => addTaskItem(id)}
          type="submit"
          className="btn-default"
        >
          Поставить задачу
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
