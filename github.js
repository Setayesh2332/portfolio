export function createGithubSection() {
    const githubSection = document.createElement('section');
    githubSection.id = 'github';
    githubSection.classList.add('section');
    githubSection.innerHTML = `
        <h2>GitHub</h2>
        <p>You can view my code and contributions on my <a href="https://github.com/username" target="_blank">GitHub profile</a>.</p>
    `;
    return githubSection;
}
