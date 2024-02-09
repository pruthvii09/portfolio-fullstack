import React from "react";
import { XCircle } from "lucide-react";

const Dialog = ({ openDialog, setOpenDialog, title, children }) => {
  return (
    <div className={openDialog ? `block` : `hidden`}>
      <div className="bg-gray-700 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 rounded-md py-2 z-50 sm:w-[450px] w-[300px] rounded-7">
        <div className="flex justify-between items-center">
          <h4 className="sm:text-2xl text-xl">{title}</h4>
          <XCircle onClick={() => setOpenDialog(!openDialog)} />
        </div>
        <div className="mt-5 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-rounded-100">
          {children}
        </div>
      </div>

      <div
        className="fixed top-0 left-0 h-full w-full bg-black opacity-75 cursor-pointer overflow-hidden z-40"
        onClick={() => setOpenDialog(!openDialog)}
      ></div>
    </div>
  );
};

export default Dialog;
