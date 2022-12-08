import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import "./style.css";

export const Modal = ({ children, visible, setVisible, width }) => {

  console.log("visible", visible);

  return createPortal(
    <div
      className={`modal ${
        visible ? "active" : "hidden"
      } fixed justify-end top-0 left-0 right-0 bottom-0 z-10`}
      onClick={() => setVisible(false)}
    >
      <div
        className={`${
          width ? `w-[${width}]` : "w-full"
        } modal-wrapper relative ml-[250px] bg-slate-100 shadow`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content flex items-start flex-col h-full">
          {children}
        </div>
        <button
          className="modal-close w-[40px] h-[40px] flex items-center justify-center cursor-pointer absolute top-[20px] bg-slate-100 shadow left-[-60px] hover:bg-slate-200 rounded"
          onClick={() => setVisible(false)}
        >
          <AiOutlineClose fontSize={17} />
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
