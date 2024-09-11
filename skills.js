export function createSkillsSection() {
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills';
    skillsSection.classList.add('section');
    skillsSection.innerHTML = `
        <h2>Skills</h2>
        <ul>
            <li>Programming Languages: Python, Java, JavaScript</li>
            <li>Web Development: HTML, CSS, React</li>
            <li>Tools: Git, VS Code, IntelliJ</li>
            <li>Soft Skills: Problem-solving, Communication, Teamwork</li>
        </ul>
    `;
    return skillsSection;
}
