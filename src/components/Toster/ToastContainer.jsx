import { useEffect, useState } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    window.showRecipeToast = (toggle, title, message) => {
      setToast({ id: Date.now(), title, message, toggle });
    };
  }, []);

  const removeToast = () => {
    setToast(null);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[22rem] max-w-full">
      {toast && (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          message={toast.message}
          toggle={toast.toggle}
          removeToast={removeToast}
        />
      )}
    </div>
  );
};

export default ToastContainer;
