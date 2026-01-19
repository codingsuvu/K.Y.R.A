import "./UserMessage.css";

export default function UserMessage({ text }) {
  return (
    <div className="message user">
      <div className="bubble">{text}</div>
    </div>
  );
}
