import React from "react";
import "./ServiceBenefits.css";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    title: "חיסכון בזמן",
    description:
      "מערכות פיגומים מתקדמות המאפשרות התקנה ופירוק מהירים, חיסכון בזמן יקר בפרויקטים שלכם",
    icon: "⏱️",
  },
  {
    title: "חיסכון בעלויות",
    description:
      "תמחור תחרותי ופתרונות יעילים המאפשרים חיסכון משמעותי בעלויות הפרויקט",
    icon: "💰",
  },
  {
    title: "בטיחות מקסימלית",
    description:
      "תקני בטיחות מחמירים, בדיקות קבועות ומערכות הגנה מתקדמות להבטחת בטיחות העובדים",
    icon: "🛡️",
  },
  {
    title: "גמישות מקסימלית",
    description: "פתרונות מותאמים אישית לכל סוג פרויקט, עם אפשרויות התאמה רבות",
    icon: "🔄",
  },
];

const ServiceBenefits: React.FC = () => {
  return (
    <section className="service-benefits">
      <h2>היתרונות שלנו</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBenefits;
