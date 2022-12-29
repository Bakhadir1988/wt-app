import React, { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modals/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MainLayout } from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import { TaskItem } from "../components/task/TaskItem";

export const TaskItemPage = () => {
  const [modalTask, setModalTask] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalTask);
  }, [modalTask]);

  const projects = useSelector((state) => state.projects.project);

  const projectTitle = projects.filter((item) =>
    item.id === id ? item.id : null
  );

  return (
    <MainLayout>
      <div className="flex items-center w-full">
        <div className="flex items-center w-full justify-end bg-[#fff] mb-[20px] dark:bg-[#0D0D0D] dark:text-white">
          <h1 className="mr-auto text-[28px]">
            Проект: {projectTitle[0].name}
          </h1>

          <div className="flex items-center ml-auto">
            <button className="btn-transparent">
              <div className="icon">
                <AiFillFilter className="mr-[10px]" fontSize={17} />
              </div>
              Фильтр
            </button>
            <button
              onClick={() => setModalTask(true)}
              className="btn-default ml-[20px]"
            >
              <div className="icon">
                <AiOutlinePlus className="mr-[10px]" fontSize={17} />
              </div>
              Создать задачу
            </button>
            <Modal visible={modalTask} setVisible={setModalTask}>
              <ModalTask setVisible={setModalTask} />
            </Modal>
          </div>
        </div>
      </div>
      <TaskItem />
    </MainLayout>
  );
};
