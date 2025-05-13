import { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbAlertTriangle } from "react-icons/tb";

const Toast = ({ id, title, message, toggle, removeToast }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      removeToast(id);
    }, 3000);
    return () => clearTimeout(time);
  }, [id, removeToast]);

  return (
    <div
      className={`${
        toggle
          ? "bg-green-200/90 border border-green-500/50"
          : "bg-red-200/90 border border-red-500/50"
      } text-gray-800 px-2 py-3 flex items-center justify-start gap-2 rounded-md shadow-lg pb-3 animate-slide-in`}
    >
      <div className={`${toggle ? "bg-green-500" : "bg-red-500" } min-h-8 min-w-8 rounded-full flex items-center justify-center`}>
        {toggle ? <FaRegCheckCircle className="h-7 text-white" /> : <TbAlertTriangle className="h-7 text-white" />}
      </div>
      <div className="info">
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
