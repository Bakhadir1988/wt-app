import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "../components/task-item/TaskItem";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modals/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ModalProject } from "../components/modals/ModalProject";

export const TaskItemPage = () => {
  const { id } = useParams();
  const [modalTask, setModalTask] = useState(false);
  const [modalProject, setModalProject] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalTask);
    document.body.classList.toggle("modal-open", modalProject);
  }, [modalTask, modalProject]);

  const pageTitle = useSelector((state) => state.projects[id - 1].name);

  return (
    <main className="p-[20px] w-auto ml-[250px] min-h-screen pt-[100px] bg-slate-100">
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
            onClick={() => setModalProject(true)}
            className="btn-default ml-[20px]"
          >
            <div className="icon">
              <AiOutlinePlus className="mr-[10px]" fontSize={17} />
            </div>
            Создать проект
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
          <Modal visible={modalProject} setVisible={setModalProject}>
            <ModalProject setVisible={setModalProject} />
          </Modal>
        </div>
      </div>
      <TaskItem />
    </main>
  );
};
