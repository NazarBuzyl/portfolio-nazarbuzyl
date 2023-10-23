import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

function ToastComponent() {
  const { successToast, errorToast } = useStateContext();

  return (
    <div className="fixed bottom-[1rem] left-[1rem] flex flex-col gap-1">
      {successToast && (
        <div className="rounded-full p-2 bg-white bg-opacity-80 toast success flex items-center gap-1 text-green-900 text-2xl">
          <FaCheckCircle />
          Success
        </div>
      )}

      {errorToast && (
        <div className="rounded-full p-2 bg-white bg-opacity-80 toast error flex items-center gap-1 text-red-900 text-2xl">
          <FaExclamationCircle />
          Error
        </div>
      )}
    </div>
  );
}

export default ToastComponent;
