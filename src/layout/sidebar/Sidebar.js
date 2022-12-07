import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalProject } from "../../components/modals/ModalProject";
import { SidebarMenu } from "../../components/sidebar-menu/SidebarMenu";
import { Modal } from "../../modal/Modal";

export const Sidebar = () => {
  const [modalProject, setModalProject] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalProject);
  }, [modalProject]);

  return (
    <aside className="fixed shadow w-[225px] h-full text-black left-0">
      {/* <div className="pt-[20px] shadow pb-[20px] w-[250px] text-center left-0 right-0">
        <button
          onClick={() => setModalProject(true)}
          className="btn-default w-[220px] mx-auto justify-center"
        >
          <div className="icon">
            <AiOutlinePlus className="mr-[10px]" fontSize={17} />
          </div>
          Создать проект
        </button>
      </div> */}

      {/* <SidebarMenu /> */}

      <Modal visible={modalProject} setVisible={setModalProject}>
        <ModalProject setVisible={setModalProject} />
      </Modal>
    </aside>
  );
};
