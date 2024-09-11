export function createProjectsSection() {
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';
    projectsSection.classList.add('section');
    projectsSection.innerHTML = `
        <h2>Projects</h2>
        <div>
            <h3>Project 1: Portfolio Website</h3>
            <p>A personal portfolio website built using HTML, CSS, and JavaScript.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            <a href="https://github.com/username/portfolio" target="_blank">View Code</a>
        </div>
        <div>
            <h3>Project 2: To-Do List App</h3>
            <p>A simple to-do list application with CRUD functionality.</p>
            <p><strong>Technologies:</strong> React, Node.js</p>
            <a href="https://github.com/username/todo-app" target="_blank">View Code</a>
        </div>
    `;
    return projectsSection;
}
