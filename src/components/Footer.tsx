import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>פרטי התקשרות</h3>
            <ul className="contact-list">
              <li>
                <span className="icon">📞</span>
                <span>03-1234567</span>
              </li>
              <li>
                <span className="icon">✉️</span>
                <span>info@scaffolding.co.il</span>
              </li>
              <li>
                <span className="icon">📍</span>
                <span>רחוב הבנייה 123, תל אביב</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 כל הזכויות שמורות</p>
      </div>
    </footer>
  );
};

export default Footer;
