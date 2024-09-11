export function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
        <p>&copy; 2024 Setayesh. All rights reserved.</p>
        <p>
            <a href="https://github.com/username" target="_blank">GitHub</a> | 
            <a href="https://www.linkedin.com/in/username" target="_blank">LinkedIn</a> | 
            <a href="mailto:setayesh2332@gmail.com">Email Me</a>
        </p>
    `;
    return footer;
}
