import "./navbar.css";
// import Notification from "../../img/notification.svg";
// import Message from "../../img/message.svg";
// import Settings from "../../img/settings.svg";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //Esto iria en searchbar
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }, i) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span
        key={i}
        className="notification"
      >{`${senderName} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div
          className="icon"
          onClick={() => (open ? setOpen(false) : setOpen(true))}
        >
          <img
            src="https://www.svgrepo.com/show/154861/notification.svg"
            className="iconImg"
            alt="img"
          />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img
            src="https://www.svgrepo.com/show/332117/message.svg"
            className="iconImg"
            alt="img"
          />
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img
            src="https://www.svgrepo.com/show/10700/settings.svg"
            className="iconImg"
            alt="img"
          />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n, i) => displayNotification(n, i))}
          {console.log(notifications)}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
