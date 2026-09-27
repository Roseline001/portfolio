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