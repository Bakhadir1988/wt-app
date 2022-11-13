import React from "react";

export const TaskItems = () => {
  return (
    <>
      <div className="bar-task">123</div>
      <ul className="mt-[30px]">
        <li className="mb-[7px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white">
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="id-item">2</div>
          <div className="title">3</div>
          <div className="date">4</div>
          <div className="status">5</div>
        </li>
        <li className="mb-[15px] shadow min-h-[60px] rounded-[5px] border px-[15px] flex items-center py-[10px] bg-white">
          <div className="form-check">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div className="id-item">2</div>
          <div className="title">3</div>
          <div className="date">4</div>
          <div className="status">5</div>
        </li>
      </ul>
    </>
  );
};
