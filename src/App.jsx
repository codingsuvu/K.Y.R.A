import React from "react";
import { Plus, Mic } from "lucide-react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">TIVA</h1>

        <nav className="nav" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button>+ New chat</button>
          <button>Images</button>
          <button>Apps</button>
          <button>Projects</button>
        </nav>

        <p className="chat-title">Your chats</p>
        <ul className="chat-list">
          <li>30 Words for C</li>
          <li>Self-tuning PFC Unit</li>
          <li>No-Cost EMI Explanation</li>
          <li>Unique Characteristics Overview</li>
        </ul>

        <div className="plan">Free plan</div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <div className="badge">TIVA Free</div>

        <h2 className="heading">What’s on your mind today?</h2>

        <div className="input-box">
          <Plus size={20} />
          <input type="text" placeholder="Ask TIVA" />
          <Mic size={20} />
        </div>
      </main>
    </div>
  );
}
