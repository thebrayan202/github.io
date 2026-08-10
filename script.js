const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeButton = document.querySelector("[data-theme-toggle]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

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

const protectedEmail = () => atob("YnJheWFuLmJwZGltaUBpY2xvdWQuY29t");
const emailText = document.querySelector("[data-email-text]");
const emailReveal = document.querySelector("[data-email-reveal]");
const emailCompose = document.querySelector("[data-email-compose]");

emailReveal?.addEventListener("click", () => {
  emailText.textContent = protectedEmail();
  emailReveal.setAttribute("aria-label", "Correo profesional mostrado");
  emailReveal.classList.add("revealed");
});

emailCompose?.addEventListener("click", () => {
  const subject = encodeURIComponent("Oportunidad profesional - Brayan Borja");
  window.location.href = `mailto:${protectedEmail()}?subject=${subject}`;
});

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
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

document.querySelector("[data-year]").textContent = new Date().getFullYear();
