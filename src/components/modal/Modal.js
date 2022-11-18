import React from "react";
import { createPortal } from "react-dom";

import "./style.css";

export const Modal = ({ children, visible, setVisible }) => {
  return createPortal(
    <div
      className={`modal ${visible ? "active" : ""} `}
      onClick={() => setVisible(false)}
    >
      <div
        className="modal-wrapper ml-[250px] w-full h-full bg-slate-100 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">{children}</div>
        <div className="modal-close" onClick={() => setVisible(false)}>
          Закрыть
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
