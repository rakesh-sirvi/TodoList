import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="header-logo">
          <span>&#9993;</span>
        </div>
        <div className="header-body">Todo List</div>
      </nav>
    </div>
  );
}
