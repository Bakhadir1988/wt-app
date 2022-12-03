import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalProject } from "../components/modals/ModalProject";
import { ProjectItems } from "../components/project-items/ProjectItems";
import { IndexLayout } from "../layout/IndexLayout";
import { Modal } from "../modal/Modal";

export const Home = () => {
  const [modalProject, setModalProject] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalProject);
  }, [modalProject]);

  return (
    <IndexLayout>
      <div className="flex items-center justify-end  ml-auto mb-[20px]">
        <div className="w-[250px] text-center left-0 right-0">
          <button
            onClick={() => setModalProject(true)}
            className="btn-default w-[220px] mx-auto justify-center"
          >
            <div className="icon">
              <AiOutlinePlus className="mr-[10px]" fontSize={17} />
            </div>
            Создать проект
          </button>
          <Modal visible={modalProject} setVisible={setModalProject}>
            <ModalProject setVisible={setModalProject} />
          </Modal>
        </div>
      </div>
      <ProjectItems />
    </IndexLayout>
  );
};
