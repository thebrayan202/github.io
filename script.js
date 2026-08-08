const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeButton = document.querySelector("[data-theme-toggle]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const dialog = document.querySelector("[data-project-dialog]");

const projects = {
  lab: {
    title: "Lab Nutrition",
    challenge:
      "Organizar un proceso de compras con varios estados, registros relacionados y acciones que debían ser fáciles de entender.",
    approach:
      "Definí los flujos principales, construí componentes reutilizables y probé las tareas clave con usuarios para detectar fricciones.",
    learning:
      "Una interfaz clara nace de reglas consistentes. Las pruebas pequeñas y tempranas evitan decisiones basadas solo en intuición.",
    tags: ["Figma", "UX/UI", "Atomic Design", "Usabilidad"],
  },
  nova: {
    title: "Tienda Nova",
    challenge:
      "Representar las operaciones de una tienda sin concentrar toda la lógica en una sola clase o mezclar datos con interfaz.",
    approach:
      "Separé las responsabilidades por entidades, apliqué encapsulamiento y organicé las operaciones en módulos fáciles de revisar.",
    learning:
      "Un buen modelo de clases reduce duplicación, hace visibles las reglas del negocio y facilita los cambios posteriores.",
    tags: ["Java", "POO", "NetBeans", "UML"],
  },
  data: {
    title: "Modelo de datos comercial",
    challenge:
      "Conservar información de clientes, productos y ventas sin duplicidades ni relaciones ambiguas.",
    approach:
      "Partí de las reglas del negocio, diseñé el modelo entidad-relación y normalicé las tablas antes de escribir las consultas.",
    learning:
      "La calidad de una consulta depende de la calidad del modelo. Definir claves y restricciones desde el inicio protege los datos.",
    tags: ["SQL", "Modelo ER", "3FN", "Consultas"],
  },
};

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeButton.setAttribute(
    "aria-label",
    theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro",
  );
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#08101f" : "#f6f8fc";
};

setTheme(getPreferredTheme());

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Abrir menú";
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.querySelector(".sr-only").textContent = willOpen ? "Cerrar menú" : "Abrir menú";
  mobileMenu.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay;
      if (delay) entry.target.style.setProperty("--delay", `${delay}ms`);
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".desktop-nav a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 },
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

const openProject = (projectKey) => {
  const project = projects[projectKey];
  if (!project) return;

  dialog.querySelector("[data-dialog-title]").textContent = project.title;
  dialog.querySelector("[data-dialog-challenge]").textContent = project.challenge;
  dialog.querySelector("[data-dialog-approach]").textContent = project.approach;
  dialog.querySelector("[data-dialog-learning]").textContent = project.learning;

  const tagContainer = dialog.querySelector("[data-dialog-tags]");
  tagContainer.replaceChildren(
    ...project.tags.map((tag) => {
      const element = document.createElement("span");
      element.textContent = tag;
      return element;
    }),
  );

  dialog.showModal();
};

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

dialog.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
