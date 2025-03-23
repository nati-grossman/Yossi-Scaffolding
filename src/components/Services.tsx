import React from "react";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      icon: "🏗️",
      title: "הספקת פיגומים",
      description:
        "הספקת פיגומים מקצועיים לכל סוגי הפרויקטים, כולל פיגומים מודולריים, פיגומי צנרת ופיגומי תחזוקה",
    },
    {
      icon: "🔧",
      title: "התקנת פיגומים",
      description:
        "התקנה מקצועית של פיגומים על ידי צוות מיומן, תוך הקפדה על כל תקני הבטיחות והאיכות",
    },
    {
      icon: "🛡️",
      title: "תחזוקת פיגומים",
      description:
        "שירותי תחזוקה שוטפת לפיגומים, כולל בדיקות תקופתיות, תיקונים והחלפת חלקים",
    },
    {
      icon: "📋",
      title: "בדיקות פיגומים",
      description:
        "בדיקות מקצועיות לפיגומים, כולל בדיקות בטיחות, בדיקות עומסים ובדיקות תקינות",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="animate-on-scroll">השירותים שלנו</h2>
        <p className="animate-on-scroll">
          אנו מספקים שירותים מקיפים בתחום הפיגומים, החל מהספקה והתקנה ועד
          לתחזוקה ובדיקות
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
