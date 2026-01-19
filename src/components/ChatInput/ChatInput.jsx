import "./ChatInput.css";

export default function ChatInput() {
  return (
    <div className="input-wrapper">
      <div className="input-box">
        <button className="icon-btn left">＋</button>

        <input
          type="text"
          placeholder="Ask T.I.V.A."
        />

        <button className="icon-btn right">🎤</button>
      </div>
    </div>
  );
}
