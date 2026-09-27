// Portfolio Website JavaScript

const skillGroups = [
    {
        category: "Programming",
        skills: ["Python", "SQL", "JavaScript", "HTML & CSS"]
    },
    {
        category: "Data & Analytics",
        skills: ["Data Analysis", "Data Visualization", "GIS"]
    },
    {
        category: "Machine Learning",
        skills: ["Machine Learning", "K-Means Clustering", "Predictive Modelling"]
    }
];

const skillsContainer = document.getElementById("skills-container");

skillGroups.forEach(function(group) {
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
        const skillTags = group.skills.map(function(skill) {
        return `<li>${skill}</li>`;
    })
    .join("");
    skillItem.innerHTML = `
        <span>${group.category.toUpperCase()}</span>
        <ul class="skill-tags">${skillTags}</ul>
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
        technologies: ["HTML", "CSS", "JavaScript"],
        links: {
            code: "https://github.com/Roseline001/portfolio"
        }
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
    const links = project.links || {};
    const projectLinks = [
        links.demo ? `<a href="${links.demo}" target="_blank" rel="noopener noreferrer">Live demo →</a>` : "",
        links.code ? `<a href="${links.code}" target="_blank" rel="noopener noreferrer">View code →</a>` : ""
    ].join("");
    projectCard.innerHTML = `
        <span class="project-number">
            ${String(index + 1).padStart(2, "0")}
        </span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${technologyTags}</div>
        ${projectLinks ? `<div class="project-links">${projectLinks}</div>` : ""}
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

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
function setNavOpen(open) {
    navbar.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
navToggle.addEventListener("click", function () {
    setNavOpen(!navbar.classList.contains("nav-open"));
});
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        setNavOpen(false);
    });
});