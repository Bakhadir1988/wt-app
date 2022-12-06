import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Modal } from "../modal/Modal";
import { ModalTask } from "../components/modals/ModalTask";
import { AiOutlinePlus } from "react-icons/ai";
import { MainLayout } from "../layout/MainLayout";

export const ProjectPage = () => {
  // const { id } = useParams();
  const [modalTask, setModalTask] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalTask);
  }, [modalTask]);

  // const pageTitle = useSelector((state) => state.projects[id].name);

  return (
    <MainLayout>
      <div className="flex items-center w-full border-b pb-[20px]">
        <div className="flex items-center ml-auto">
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

      <div className="bg-white flex-col items-center justify-center min-h-[746px] flex rounded-[5px]">
        <div>
          <h3 className="text-3xl">Проект создан</h3>
        </div>
        <hr className="w-[300px] my-[20px]" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl mb-[20px]">Создать задачу</h3>
          <p className="w-[530px] text-center">
            Здесь будет список задач, которые вы выполняете или поручаете своим
            сотрудникам. Создайте первую задачу, чтобы увидеть как она появится
            в списке
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
