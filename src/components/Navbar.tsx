import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "תכונות", href: "#features" },
    { title: "סוגי פיגומים", href: "#scaffolding-types" },
    { title: "שליחת הודעה", href: "#contact" },
    { title: "פרטי התקשרות", href: "#footer" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">גרוסמן פיגומים </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="navbar-link"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
