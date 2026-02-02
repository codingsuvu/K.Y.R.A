import UserMessage from "./UserMessage";
import AIResponse from "./AIResponse";
import "./Container.css";

export default function Container({ messages }) {
  if (!messages || messages.length === 0) {
    return (
      <div className="chat-container empty">
        <img
          src="/logo.png"
          alt="K.Y.R.A Logo"
          className="center-logo"
        />
        <h1>What can I help with?</h1>
      </div>
    );
  }

  return (
    <div className="chat-container">
      {messages.map((msg, index) =>
        msg.role === "user" ? (
          <UserMessage key={index} text={msg.text} />
        ) : (
          <AIResponse key={index} text={msg.text} />
        )
      )}
    </div>
  );
}
