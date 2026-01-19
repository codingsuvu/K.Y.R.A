import ChatHistory from "./ChatHistory";
import "./Sidebar.css";

export default function Sidebar({ open, closeSidebar }) {
  const chats = [
    "Self tuning PFC unit",
    "React UI with CSS",
    "ChatGPT clone design",
    "Final year project ideas"
  ];

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">T.I.V.A.</h2>
        <button className="close-btn" onClick={closeSidebar}>✕</button>
      </div>

      <button className="new-chat">+ New chat</button>

      <nav className="menu">
        <div className="menu-item">Images</div>
        <div className="menu-item">Apps</div>
        <div className="menu-item">Projects</div>
      </nav>

      <ChatHistory chats={chats} />
    </aside>
  );
}
