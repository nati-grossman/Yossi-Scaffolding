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
    title: "חומרים מתקדמים",
    description: "שימוש בחומרים חדשניים בעלי עמידות גבוהה ותוחלת חיים ארוכה",
    icon: "🔬",
  },
  {
    id: 2,
    title: "מערכות בטיחות",
    description: "מערכות בטיחות מתקדמות המבטיחות את שלומם של העובדים",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "תכנון דיגיטלי",
    description: "שימוש בתוכנות מתקדמות לתכנון מדויק של הפיגומים",
    icon: "💻",
  },
  {
    id: 4,
    title: "ניטור בזמן אמת",
    description: "מערכות ניטור מתקדמות המאפשרות מעקב אחר מצב הפיגומים",
    icon: "📊",
  },
];

const TechnologicalAdvantages: React.FC = () => {
  return (
    <section className="technological-advantages">
      <div className="advantages-container">
        <h2 className="animate-on-scroll">יתרונות טכנולוגיים</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className={`advantage-card animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="advantage-icon">{advantage.icon}</div>
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
