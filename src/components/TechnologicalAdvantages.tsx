import React from "react";
import "./TechnologicalAdvantages.css";

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: "מערכות מתקדמות",
    description: "שימוש במערכות פיגומים מתקדמות עם טכנולוגיות חדשניות",
    icon: "⚡",
  },
  {
    id: 2,
    title: "חומרים איכותיים",
    description: "שימוש בחומרים חזקים ועמידים במיוחד",
    icon: "🔧",
  },
  {
    id: 3,
    title: "תכנון דיגיטלי",
    description: "תכנון ממוחשב מדויק לכל פרויקט",
    icon: "💻",
  },
  {
    id: 4,
    title: "מערכות בטיחות",
    description: "מערכות בטיחות מתקדמות עם חיישנים חכמים",
    icon: "🛡️",
  },
];

const TechnologicalAdvantages: React.FC = () => {
  return (
    <section className="tech-advantages">
      <div className="tech-container">
        <h2>יתרונות טכנולוגיים</h2>
        <p className="tech-description">
          אנו משקיעים בטכנולוגיות המתקדמות ביותר כדי לספק לכם את הפתרון הטוב
          ביותר
        </p>
        <div className="tech-grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="tech-card">
              <div className="tech-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologicalAdvantages;
