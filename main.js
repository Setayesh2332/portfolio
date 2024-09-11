import './style.css';
import { createNavbar } from './navbar.js';
import { createHomeSection } from './home.js';
import { createSkillsSection } from './skills.js';
import { createProjectsSection } from './projects.js';
import { createResumeSection } from './resume.js';
import { createAboutSection } from './about.js';
import { createContactSection } from './contact.js';
import { createGithubSection } from './github.js';
import { createFooter } from './footer.js';

const app = document.querySelector('#app');

app.appendChild(createNavbar()); // Add Navbar
app.appendChild(createHomeSection());
app.appendChild(createSkillsSection());
app.appendChild(createProjectsSection());
app.appendChild(createResumeSection());
app.appendChild(createAboutSection());
app.appendChild(createContactSection());
app.appendChild(createGithubSection());
app.appendChild(createFooter()); // Add Footer
