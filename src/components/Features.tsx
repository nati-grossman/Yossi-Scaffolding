import React from "react";
import "./Features.css";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "בטיחות מקסימלית",
    description:
      "כל הפיגומים שלנו עומדים בתקני הבטיחות המחמירים ביותר ומבטיחים סביבת עבודה בטוחה",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "איכות גבוהה",
    description:
      "שימוש בחומרים איכותיים וציוד מתקדם להקמת פיגומים חזקים ויציבים",
    icon: "⭐",
  },
  {
    id: 3,
    title: "מקצועיות",
    description:
      "צוות מקצועי ומיומן עם ניסיון רב בהקמת פיגומים לכל סוגי המבנים",
    icon: "👷",
  },
  {
    id: 4,
    title: "זמינות",
    description: "שירות זמין 24/7 עם תגובה מהירה לכל קריאה",
    icon: "⚡",
  },
];

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>למה אנחנו?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
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
