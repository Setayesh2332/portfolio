export function createResumeSection() {
    const resumeSection = document.createElement('section');
    resumeSection.id = 'resume';
    resumeSection.classList.add('section');
    resumeSection.innerHTML = `
        <h2>Resume</h2>
        <p><a href="resume.pdf" download>Download My Resume</a></p>
    `;
    return resumeSection;
}
