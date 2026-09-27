// Portfolio Website JavaScript

const skills = [
    "Python",
    "SQL",
    "Data Analysis",
    "Machine Learning",
    "Data Visualization",
    "JavaScript"
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(function(skill) {
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.innerHTML = `
        <span>SKILL</span>
        <h3>${skill}</h3>
    `;
    skillsContainer.appendChild(skillItem);
});

const projects = [
    {
        title: "FloodGuard KE",
        description:
            "A data-driven flood risk and disruption monitoring concept that combines rainfall, geographic data, and predictive analysis to support disaster risk reduction and safer transport planning.",
        technologies: ["Python", "GIS", "Machine Learning", "Data Analysis"]
    },

    {
        title: "Britam Customer Insights",
        description:
            "A data-driven cross-sell and upsell solution designed to help financial advisors identify customer segments, understand customer needs, and improve the use of customer insights.",
        technologies: ["Python", "Machine Learning", "K-Means", "Data Analytics"]
    },

    {
        title: "Data Analytics Portfolio",
        description:
            "A personal portfolio that brings together data science, analytics, and software development projects while demonstrating how data can be transformed into practical digital solutions.",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

const projectsContainer = document.getElementById("projects-container");
projects.forEach(function(project, index) {
    const projectCard = document.createElement("article");
    projectCard.classList.add("project-card");
    const technologyTags = project.technologies.map(function(technology) {
        return `<span>${technology}</span>`
    })
    .join("");
    projectCard.innerHTML = `
        <span class="project-number">
            ${String(index + 1).padStart(2, "0")}
        </span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${technologyTags}</div>
    `;
    projectsContainer.appendChild(projectCard);
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
