import React from "react";
import "./Features.css";

const Features: React.FC = () => {
  const features = [
    {
      icon: "🏗️",
      title: "פיגומים מקצועיים",
      description:
        "אנו מספקים פיגומים מקצועיים ואיכותיים לכל סוגי הפרויקטים, תוך הקפדה על כל תקני הבטיחות",
    },
    {
      icon: "⚡",
      title: "התקנה מהירה",
      description:
        "צוות מקצועי ומיומן מבצע התקנה מהירה ויעילה של הפיגומים, תוך שמירה על לוחות זמנים",
    },
    {
      icon: "🛡️",
      title: "בטיחות מקסימלית",
      description:
        "כל הפיגומים שלנו עומדים בתקני הבטיחות המחמירים ביותר ומבטיחים סביבת עבודה בטוחה",
    },
    {
      icon: "💪",
      title: "עמידות לאורך זמן",
      description:
        "הפיגומים שלנו מיוצרים מחומרים איכותיים ועמידים, המבטיחים שימוש ארוך טווח",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="animate-on-scroll">היתרונות שלנו</h2>
        <p className="animate-on-scroll">
          אנו מציעים פתרונות פיגומים מתקדמים עם דגש על איכות, בטיחות ונוחות
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-on-scroll">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
