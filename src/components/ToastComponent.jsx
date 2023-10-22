import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

function ToastComponent() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const showSuccessToast = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const showErrorToast = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => showSuccessToast("Success!")}>
        Show Success Toast
      </button>
      <button onClick={() => showErrorToast("Error!")}>Show Error Toast</button>

      {successMessage && (
        <div className="toast success">
          <FaCheckCircle />
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="toast error">
          <FaExclamationCircle />
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default ToastComponent;
