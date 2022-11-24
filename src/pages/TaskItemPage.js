import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "../components/task-item/TaskItem";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modal-task/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

export const TaskItemPage = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const pageTitle = useSelector((state) => state.projects[id].name);

  return (
    <main className="p-[20px] w-full h-screen bg-slate-100">
      <div className="flex items-center w-full">
        <h1 className="h1">Задачи проекта {pageTitle}</h1>
        <div className="flex items-center ml-auto">
          <button className="btn-transparent">
            <div className="icon">
              <AiFillFilter className="mr-[10px]" fontSize={17} />
            </div>
            Фильтр
          </button>
          <button
            onClick={() => setModal(true)}
            className="btn-default ml-[20px]"
          >
            <div className="icon">
              <AiOutlinePlus className="mr-[10px]" fontSize={17} />
            </div>
            Создать задачу
          </button>
          <Modal visible={modal} setVisible={setModal}>
            <ModalTask setVisible={setModal} />
          </Modal>
        </div>
      </div>
      <TaskItem />
    </main>
  );
};
