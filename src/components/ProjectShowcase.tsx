import React, { useState } from "react";
import "./ProjectShowcase.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "מבנה מגורים",
    description: "הקמת פיגומים למבנה מגורים בן 8 קומות",
    image: "/images/project1.jpg",
    category: "מגורים",
  },
  {
    id: 2,
    title: "מרכז מסחרי",
    description: "פיגומים למרכז מסחרי חדש",
    image: "/images/project2.jpg",
    category: "מסחרי",
  },
  {
    id: 3,
    title: "מבנה תעשייתי",
    description: "פיגומים למבנה תעשייתי",
    image: "/images/project3.jpg",
    category: "תעשייתי",
  },
  {
    id: 4,
    title: "שיפוץ מבנה",
    description: "פיגומים לשיפוץ מבנה היסטורי",
    image: "/images/project4.jpg",
    category: "שיפוץ",
  },
];

const categories = ["הכל", "מגורים", "מסחרי", "תעשייתי", "שיפוץ"];

const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("הכל");

  const filteredProjects =
    selectedCategory === "הכל"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="project-showcase">
      <div className="project-container">
        <h2>הפרויקטים שלנו</h2>
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
