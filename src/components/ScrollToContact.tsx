import React, { useEffect, useState } from "react";
import "./ScrollToContact.css";

const ScrollToContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      className={`scroll-to-contact ${isVisible ? "visible" : ""}`}
      onClick={scrollToContact}
      aria-label="צור קשר"
    >
      <div className="button-content">
        <span className="icon">📞</span>
        <span className="text">צור קשר</span>
      </div>
      <div className="pulse"></div>
    </button>
  );
};

export default ScrollToContact;
