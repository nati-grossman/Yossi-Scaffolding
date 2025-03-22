import React from "react";
import "./ServicePresentation.css";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "פיגומים למבני מגורים",
    description:
      "פתרונות פיגומים מותאמים אישית למבני מגורים, כולל בניינים רבי קומות ובתים פרטיים",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "פיגומים למבני מסחר",
    description:
      "מערכות פיגומים מתקדמות למבני מסחר, מרכזים מסחריים ומבני משרדים",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "פיגומים לתעשייה",
    description: "פתרונות פיגומים מיוחדים למפעלים, מחסנים ומבני תעשייה אחרים",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const ServicePresentation: React.FC = () => {
  return (
    <section className="service-presentation">
      <h2>השירותים שלנו</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            ></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePresentation;
