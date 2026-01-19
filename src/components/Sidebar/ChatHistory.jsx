import "./ChatHistory.css";

export default function ChatHistory({ chats, onSelect }) {
  return (
    <div className="chat-history">
      <p className="history-title">Recent</p>

      {chats.map((chat, index) => (
        <div
          key={index}
          className="history-item"
          onClick={() => onSelect(index)}
        >
          {chat}
        </div>
      ))}
    </div>
  );
}
