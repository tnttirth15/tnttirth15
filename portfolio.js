// main.js

// Sample data for hypothetical projects
const projects = [
    { title: "Project 1", description: "", image: "project1.jpg" },
    { title: "Project 2", description: "Description for Project 2", image: "project2.jpg" },
    // Add more projects as needed
];

function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Project image
    const image = document.createElement("img");
    image.src = `graphics/${project.image}`;
    image.alt = `${project.title} project image`;
    card.appendChild(image);

    // Project title and description
    card.innerHTML += `<h3>${project.title}</h3><p>${project.description}</p>`;

    return card;
}

function showProjects() {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = ''; // Clear previous content

    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

// Call the showProjects function to display projects on page load
document.addEventListener('DOMContentLoaded', showProjects);
