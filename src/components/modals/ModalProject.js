import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../features/projects/projectsSlice";
import { format } from "date-fns";
import { Select, DatePicker } from "antd";
import { v4 } from "uuid";
import ru from "date-fns/locale/ru";
import locale from "antd/lib/date-picker/locale/ru_RU";

export const ModalProject = ({ setVisible, title }) => {
  const users = useSelector((state) => state.users);
  /** Название */
  const [inputTitle, setInputTitle] = useState("");
  /** Дата создания */
  const todayDate = format(new Date(), "dd MMMM yyyy", {
    locale: ru,
  });
  /** Менеджер */
  const [manager, setManager] = useState();
  /** Оптимизатор */
  const [optimizer, setOptimizer] = useState();
  /** Участники */
  const [participant, setParticipant] = useState();
  /** Конец даты */
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  const addProjectItem = () => {
    if (inputTitle) {
      const project = {
        id: v4(),
        name: inputTitle,
        createDate: todayDate,
        endDate: endDate,
        manager: manager,
        optimizer: optimizer,
        participants: participant,
        status: "Активен",
      };

      setVisible(false);
      dispatch(addProject({ project }));

      setInputTitle("");
    }
  };

  const participantSelect = (value) => {
    setParticipant({ value });
  };

  const managerSelect = (value) => {
    setManager({ value });
  };

  const optimizerSelect = (value) => {
    setOptimizer({ value });
  };

  const onChangeEndDate = (date) => {
    const endDateFormat = format(new Date(date), "dd MMMM yyyy", {
      locale: ru,
    });

    setEndDate(endDateFormat);
  };

  return (
    <>
      <div className="task-info p-[20px] w-full h-full overflow-y-auto overflow-x-hidden">
        <h1 className="h1 border-b pb-[20px] mb-[20px]">
          {title}
        </h1>
        <div className="task-conten bg-white rounded p-[20px]">
          <form action="">
            <input
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              type="text"
              placeholder="Введите название проекта"
              className="form-input"
            />
            <textarea
              rows="5"
              placeholder="Описание"
              className="form-textarea"
            />
            <div className="flex items-center mt-[20px]">
              <div className="bloc mb-1 pr-4 mr-[20px] min-w-[140px]">
                Участники
              </div>
              <Select
                className="form-select"
                mode="multiple"
                allowClear
                placeholder="Выбрите участников"
                onChange={participantSelect}
                options={users}
              />
            </div>
            <div className="flex items-center mt-[20px]">
              <div className="bloc mb-1 pr-4 mr-[20px] min-w-[140px]">
                Менеджер
              </div>
              <Select
                className="form-select"
                allowClear
                placeholder="Выбрите менеджера"
                onChange={managerSelect}
                options={users}
              />
            </div>
            <div className="flex items-center mt-[20px]">
              <div className="bloc mb-1 pr-4 mr-[20px] min-w-[140px]">
                Оптимизатор
              </div>
              <Select
                className="form-select"
                allowClear
                placeholder="Выбрите оптимизатора"
                onChange={optimizerSelect}
                options={users}
              />
            </div>
            <div className="flex items-center mt-[20px]">
              <div className=" bloc mb-1 pr-4 mr-[20px] min-w-[140px]">
                Дата окончания
              </div>
              <DatePicker
                className="form-date"
                placeholder="Выберете дату"
                locale={locale}
                onChange={onChangeEndDate}
              />
            </div>
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
