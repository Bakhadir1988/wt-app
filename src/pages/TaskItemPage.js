import React, { useEffect, useState } from "react";
import { TaskItem } from "../components/task-item/TaskItem";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modals/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MainLayout } from "../layout/MainLayout";
import { useParams } from "react-router-dom";

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
      <div className="flex items-center w-full border-b pb-[20px]">
        <h1 className="h1">Проект: {projectTitle[0].name}</h1>
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
      <TaskItem />
    </MainLayout>
  );
};
