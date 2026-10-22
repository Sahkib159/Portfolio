
const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const commands = {
  help: () => [
    "Available commands:",
    "about    - Learn about Sahkib",
    "skills   - View technical skills",
    "projects - Jump to projects",
    "contact  - Get in touch",
    "clear    - Clear terminal output",
    "help     - Show available commands"
  ],

  about: () => [
    "Name: Sahkib Ahad Chowdhury",
    "Role: CSE Undergraduate",
    "Goal: Become a Full-Stack Developer",
    "Currently learning and building projects."
  ],

  skills: () => [
    "HTML | CSS | Python | Java",
    "JavaFX | SQL | Git | GitHub",
    "More skills will be added as I learn."
  ],

  projects: () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
    return ["Navigating to projects..."];
  },

  contact: () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
    return ["Navigating to contact..."];
  }
};

function addLine(text) {
  const line = document.createElement("p");
  line.textContent = text;
  terminalOutput.appendChild(line);
}

terminalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const command = terminalInput.value.trim().toLowerCase();

  if (!command) return;

  addLine(`visitor@shades:~$ ${command}`);

  if (command === "clear") {
    terminalOutput.replaceChildren();
    terminalInput.value = "";
    return;
  }

  if (commands[command]) {
    commands[command]().forEach(addLine);
  } else {
    addLine(`Command not found: ${command}`);
    addLine("Type 'help' to see available commands.");
  }

  terminalInput.value = "";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});
