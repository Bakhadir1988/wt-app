import React, { useState } from "react";
import locale from "antd/lib/date-picker/locale/ru_RU";
import ru from "date-fns/locale/ru";
import { useDispatch, useSelector } from "react-redux";
import { Select, DatePicker } from "antd";
import { MainLayout } from "../../layout/MainLayout";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { addProject } from "../../features/projects/projectsSlice";

export const ProjectForm = ({ title, button }) => {
  const dispatch = useDispatch();

  /** id проекта */
  const id = uuidv4();
  /** Название */
  const [inputTitle, setInputTitle] = useState("");
  /** Список людей */
  const users = useSelector((state) => state.users);
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

  const addProjectItem = () => {
    if (inputTitle) {
      const project = {
        id: id,
        name: inputTitle,
        createDate: todayDate,
        endDate: endDate,
        manager: manager,
        optimizer: optimizer,
        participants: participant,
        status: "Активен",
      };

      dispatch(addProject(project));

      setInputTitle("");
    }
  };

  return (
    <MainLayout>
      <div className="flex items-start dark:text-white flex-col h-full">
        <div className="task-info w-full h-full overflow-y-auto overflow-x-hidden flex items-start dark:text-white flex-col">
          <div className="flex items-center w-full justify-end bg-[#fff] mb-[20px] dark:bg-[#0D0D0D] dark:text-white">
            <h1 className="mr-auto text-[28px]">{title}</h1>
          </div>
          <div className="task-content w-full bg-white dark:border-[#202020] dark:bg-[#0D0D0D] rounded">
            <form action="" className="h-[615px]">
              <input
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                type="text"
                placeholder="Введите название проекта"
                className="form-input mb-[10px]"
              />
              <textarea
                rows="5"
                placeholder="Описание"
                className="form-textarea"
              />
              <div className="flex items-center mt-[20px]">
                <div className="bloc mb-1 pr-4 mr-[20px] min-w-[140px] text-[14px]">
                  Участники
                </div>
                <Select
                  className="form-select w-[80px]"
                  mode="multiple"
                  placeholder="Выберите участников"
                  onChange={participantSelect}
                  options={users}
                />
              </div>
              <div className="flex items-center mt-[20px]">
                <div className="bloc mb-1 pr-4 mr-[20px] text-[14px] min-w-[140px]">
                  Менеджер
                </div>
                <Select
                  className="form-select w-[80px]"
                  onClear={(e) => setManager(e.target.value)}
                  placeholder="Выберите менеджера"
                  onChange={managerSelect}
                  options={users}
                />
              </div>
              <div className="flex items-center mt-[20px]">
                <div className="bloc mb-1 pr-4 mr-[20px] text-[14px] min-w-[140px]">
                  Оптимизатор
                </div>
                <Select
                  className="form-select w-[80px]"
                  placeholder="Выберите оптимизатора"
                  onChange={optimizerSelect}
                  options={users}
                />
              </div>
              <div className="flex items-center mt-[20px]">
                <div className=" bloc mb-1 pr-4 mr-[20px] min-w-[140px] text-[14px]">
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
        <div className="task-button flex items-center dark:border-[#202020] mt-[20px] w-full pt-[20px] border-t">
          <Link
            to={`/projects/`}
            onClick={addProjectItem}
            type="submit"
            className="btn-default"
          >
            {button} проект
          </Link>
          <Link to={`/projects/`} className="btn-default btn-cancel ml-[20px]">
            Отмена
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};
