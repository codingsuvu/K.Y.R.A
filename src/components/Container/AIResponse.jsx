import "./AIResponse.css";

export default function AIResponse({ text }) {
  return (
    <div className="message ai">
      <div className="bubble">{text}</div>
    </div>
  );
}
