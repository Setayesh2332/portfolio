export function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.classList.add('section');
    contactSection.innerHTML = `
        <h2>Contact Me</h2>
        <form>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="message">Message:</label><br>
            <textarea id="message" name="message"></textarea><br>
            <button type="submit">Send</button>
        </form>
    `;
    return contactSection;
}
