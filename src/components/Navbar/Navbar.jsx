import "./Navbar.css";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      <span className="title">T.I.V.A.</span>
      <button className="offer">Free offer</button>
    </header>
  );
}
