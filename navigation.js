// navigation.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.className = "main-nav";

  nav.innerHTML = `
    <ul class="nav-list">
      <li><a href="index.html">About Me</a></li>
      <li><a href="education.html">Education</a></li>
      <li><a href="work.html">Work Experience</a></li>
      <li><a href="involvement.html">Involvement</a></li>
      <li><a href="skills.html">Skills</a></li>
    </ul>
  `;

  document.body.prepend(nav);
});
