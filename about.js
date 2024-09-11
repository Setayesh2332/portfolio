export function createAboutSection() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.classList.add('section');
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <p>I am a Computer Science student with a passion for web development and data science.</p>
        <p>I enjoy solving complex problems and working on innovative projects.</p>
        <p>Outside of CS, I like hiking, reading, and photography.</p>
    `;
    return aboutSection;
}
