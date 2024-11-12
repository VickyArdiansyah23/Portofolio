const apiKey = "2b42r5qsao8435s3elzhn8961t5l761jwba67qv4dcy0v6x73w3lba9n719wxgos";
const apiUrl = `https://exampleapi.com/projects?api_key=${apiKey}`;

async function fetchProjects() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const projects = await response.json();

        displayProjects(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

function displayProjects(projects) {
    const container = document.getElementById("projects-container");
    container.innerHTML = ""; // Clear previous projects if any

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.title}">
            <p>${project.description}</p>
        `;

        container.appendChild(projectElement);
    });
}

// Call fetchProjects on page load
fetchProjects();
