import { useMessage } from "../hooks/message";
import "./Notification.css";
export const Notification = () => {
  const { message, closeModal } = useMessage();
  if (message === null) return null;
  setTimeout(() => closeModal(null), 3000);
  return (
    <div className="messageContainer">
      <div className={`message ${message.isError ? "error" : "success"}`}>
        <div className="load"></div>
        <span>{message.content}</span>
      </div>
    </div>
  );
};
