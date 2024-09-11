export function createHomeSection() {
    const homeSection = document.createElement('section');
    homeSection.id = 'home';
    homeSection.classList.add('section');
    homeSection.innerHTML = `
    <h1>Welcome to My Portfolio</h1>
    <p>Hello, my name is Setayesh and I am a Computer Science student.</p>
  `;
    return homeSection;
}
