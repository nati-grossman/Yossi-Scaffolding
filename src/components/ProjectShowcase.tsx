import React, { useState } from "react";
import "./ProjectShowcase.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "מגדל משרדים מודרני",
    description: "בניית מגדל משרדים בן 30 קומות עם תכנון מודרני ומערכות חכמות",
    image:
      "https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "מבני משרדים",
    tags: ["בנייה גבוהה", "מערכות חכמות", "אנרגיה ירוקה"],
  },
  {
    id: 2,
    title: "מרכז מסחרי",
    description: "הקמת מרכז מסחרי חדשני עם אזורי בילוי ופנאי",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    category: "מסחר",
    tags: ["קניות", "בילוי", "חניה תת-קרקעית"],
  },
  {
    id: 3,
    title: "מתחם מגורים יוקרתי",
    description: "בניית מתחם מגורים יוקרתי עם גינות ופארקים",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "מגורים",
    tags: ["דירות יוקרה", "גינות", "מערכות אבטחה"],
  },
];

const categories = ["הכל", "מבני משרדים", "מסחר", "מגורים"];

const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("הכל");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "הכל"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="project-showcase">
      <div className="project-container">
        <h2>הפרויקטים שלנו</h2>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div
                  className={`project-overlay ${
                    hoveredProject === project.id ? "active" : ""
                  }`}
                >
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
