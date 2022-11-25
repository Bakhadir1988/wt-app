import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "../components/task-item/TaskItem";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modal-task/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

export const TaskItemPage = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modal);
  }, [modal]);

  const pageTitle = useSelector((state) => state.projects[id - 1].name);

  return (
    <main className="p-[20px] w-auto ml-[250px] min-h-screen pt-[100px] pb-[50px] bg-slate-100">
      <div className="flex items-center w-full border-b pb-[20px]">
        <h1 className="h1">Список задач - {pageTitle}</h1>
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
