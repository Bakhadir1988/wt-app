import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskItem } from "../components/task-item/TaskItem";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modal-task/ModalTask";
import { AiFillFilter, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

export const TaskItemPage = () => {
  const { id } = useParams();
  const [taskItems, setTaskItems] = useState([]);
  const [modal, setModal] = useState(false);

  const createTask = (newTask) => {
    setTaskItems([...taskItems, newTask]);
  };

  /** Получение задач */
  const TASK_LIST_URL = `http://localhost:3001/project/${id}`;

  useEffect(() => {
    axios
      .get(TASK_LIST_URL)
      .then((response) => {
        setTaskItems(response.data.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /** Получение лузеров :) */
  const USERS_URL = "http://localhost:3001/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(USERS_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <main className="p-[20px] w-full h-screen bg-slate-100">
      <div className="flex items-center w-full">
        <h1 className="h1">Задача {id}</h1>
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
            <ModalTask
              users={users}
              create={createTask}
              setVisible={setModal}
            />
          </Modal>
        </div>
      </div>
      <TaskItem items={taskItems} />
    </main>
  );
};
