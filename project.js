const projects = {
  lab: {
    type: "Producto digital · Proyecto académico",
    title: "Lab Nutrition",
    summary: "Sistema logístico diseñado para registrar marcas, modelos y compras dentro de un flujo ordenado, verificable y fácil de aprender.",
    intro: "Lab Nutrition nació de una necesidad concreta: reunir en un solo sistema operaciones que normalmente se controlaban desde pantallas y registros separados. El proyecto no se limitó a diseñar interfaces bonitas; primero se definieron reglas, estados y relaciones. Después se construyeron los flujos, se probaron con usuarios y se iteró sobre los resultados.",
    challenge: "El proceso de compras tenía varias entidades relacionadas y acciones que podían confundirse entre sí. Era necesario mostrar qué información era obligatoria, qué registro se estaba editando y cuál era el estado de cada compra sin sobrecargar la pantalla.",
    solution: "Un prototipo navegable con Dashboard, Registrar Marca, Registrar Modelo, Registrar Compra y Aprobar Compra. Se añadieron códigos automáticos, estados visibles, validaciones, menús desplegables y acciones consistentes para guardar, editar, limpiar y eliminar.",
    role: "Como Alumno 2 trabajé en el diseño y refinamiento de más de tres pantallas, la construcción de componentes y variantes, las interacciones del prototipo, la organización del UX Kit y el análisis de las pruebas de usabilidad.",
    theme: "lab",
    tags: ["Figma", "UX/UI", "Prototipado", "Atomic Design", "Usabilidad"],
    facts: [["5+", "evaluaciones"], ["5", "módulos"], ["6", "etapas documentadas"]],
    cover: "assets/lab-dashboard.svg",
    gallery: [
      {src:"assets/lab-dashboard.svg", title:"Dashboard y navegación", text:"Vista general de indicadores y acceso a los módulos principales del sistema."},
      {src:"assets/lab-prototype.svg", title:"Registro y aprobación", text:"Flujo con código automático, campos validados, tabla de resultados y estados visibles."}
    ],
    log: [
      ["Etapa 01", "Definición del problema", "Se identificaron los usuarios, las operaciones principales y las reglas que debía respetar el sistema.", "Mapa inicial de necesidades y alcance."],
      ["Etapa 02", "Arquitectura del flujo", "Se ordenaron los módulos y se definió cómo pasaría el usuario desde el registro hasta la aprobación de una compra.", "Flujo de navegación y estructura de pantallas."],
      ["Etapa 03", "Sistema de diseño", "Se establecieron colores, tipografía, botones, campos, tablas, estados y componentes reutilizables.", "Design System y Atomic Design."],
      ["Etapa 04", "Prototipo funcional", "Se conectaron botones, dropdowns, calendario y variantes para representar guardar, editar, eliminar y limpiar.", "Prototipo navegable en Figma."],
      ["Etapa 05", "Pruebas de usabilidad", "Se evaluaron tareas clave con participantes y se registraron hallazgos cuantitativos y cualitativos.", "Evidencias, métricas y observaciones."],
      ["Etapa 06", "Iteración final", "Se corrigieron textos, jerarquías, estados y comportamientos que generaban dudas durante las pruebas.", "Versión refinada y documentada."]
    ],
    learnings: [
      ["Consistencia antes que decoración", "Repetir patrones de interacción reduce la carga mental y permite que el usuario aprenda el sistema más rápido."],
      ["Probar cambia decisiones", "Las pruebas revelaron problemas que no eran evidentes al observar únicamente el diseño estático."],
      ["Documentar mejora el producto", "La bitácora y el sistema de diseño facilitaron justificar cada cambio y mantener coherencia entre pantallas."]
    ],
    next: "nova"
  },
  nova: {
    type: "Aplicación de escritorio · Proyecto académico",
    title: "Tienda Nova",
    summary: "Aplicación Java orientada a objetos para organizar productos, inventario y operaciones básicas de una tienda.",
    intro: "Tienda Nova fue planteado como un ejercicio completo de programación orientada a objetos. El reto consistió en pasar de una descripción del negocio a una estructura de clases comprensible, evitando mezclar la interfaz con toda la lógica. El resultado es una aplicación modular que valida datos y mantiene cada responsabilidad en el lugar correcto.",
    challenge: "Una tienda necesita registrar y consultar información sin duplicar código ni aceptar datos incompletos. Si toda la lógica se concentra en una sola clase, el proyecto se vuelve difícil de entender, probar y ampliar.",
    solution: "Una aplicación de escritorio organizada por módulos, con clases para representar las entidades del negocio, métodos para gestionar las operaciones y validaciones antes de registrar cambios.",
    role: "Participé en el análisis de requisitos, el diseño UML, la creación de clases y métodos, la construcción de la interfaz en NetBeans y la preparación de la documentación y presentación del proyecto.",
    theme: "nova",
    tags: ["Java", "POO", "NetBeans", "UML", "Validaciones"],
    facts: [["POO", "arquitectura"], ["4", "módulos"], ["5", "etapas documentadas"]],
    cover: "assets/nova-system.svg",
    gallery: [
      {src:"assets/nova-system.svg", title:"Gestión de inventario", text:"Interfaz de escritorio para consultar, registrar y actualizar productos."},
      {src:"assets/nova-uml.svg", title:"Modelo de clases", text:"Organización de entidades, atributos, métodos y relaciones del sistema."}
    ],
    log: [
      ["Etapa 01", "Análisis de requisitos", "Se identificaron las operaciones de la tienda y los datos necesarios para realizarlas.", "Lista de funcionalidades y reglas."],
      ["Etapa 02", "Modelado orientado a objetos", "Se separaron las entidades y sus responsabilidades antes de comenzar la interfaz.", "Diagrama UML y estructura de clases."],
      ["Etapa 03", "Implementación en Java", "Se programaron constructores, atributos, métodos y validaciones usando encapsulamiento.", "Clases funcionales y lógica del sistema."],
      ["Etapa 04", "Interfaz de escritorio", "Se conectaron formularios, tablas y botones con la lógica desarrollada.", "Pantallas operativas en NetBeans."],
      ["Etapa 05", "Pruebas y presentación", "Se revisaron casos válidos e inválidos y se organizó la explicación técnica del proyecto.", "Versión final, documentación y guion."]
    ],
    learnings: [
      ["Modelar antes de programar", "Definir las responsabilidades de cada clase evitó duplicar lógica durante la implementación."],
      ["Validar protege el sistema", "Comprobar campos y reglas antes de guardar hace que los datos sean más confiables."],
      ["Código que se puede explicar", "Una estructura clara facilita presentar el proyecto, encontrar errores y continuar mejorándolo."]
    ],
    next: "data"
  },
  data: {
    type: "Base de datos · Proyecto académico",
    title: "Modelo de datos comercial",
    summary: "Base de datos relacional diseñada para conectar clientes, productos y ventas con información consistente y consultas útiles.",
    intro: "Este proyecto aborda la base de cualquier sistema de información: la estructura de sus datos. Antes de escribir SQL se analizaron las reglas del negocio y se definió qué representa cada entidad. El modelo fue normalizado y después traducido a tablas, claves y consultas que permiten trabajar con la información de forma segura.",
    challenge: "Registrar clientes, productos y ventas sin una estructura adecuada puede generar datos repetidos, relaciones ambiguas y resultados distintos para una misma consulta.",
    solution: "Un modelo entidad-relación convertido en cinco tablas relacionadas mediante claves primarias y foráneas, normalizado hasta tercera forma normal y acompañado por consultas SQL de registro y análisis.",
    role: "Trabajé en la identificación de entidades, definición de cardinalidades, normalización de primera a tercera forma normal, creación de tablas, carga de datos de prueba y construcción de consultas.",
    theme: "data",
    tags: ["SQL", "Modelo ER", "1FN–3FN", "Consultas", "Integridad"],
    facts: [["3FN", "normalización"], ["5", "tablas relacionadas"], ["5", "etapas documentadas"]],
    cover: "assets/data-model.svg",
    gallery: [
      {src:"assets/data-model.svg", title:"Modelo entidad-relación", text:"Entidades y relaciones principales antes de traducir el diseño a tablas."},
      {src:"assets/data-sql.svg", title:"Consultas y resultados", text:"Ejemplo visual del script SQL y una consulta que combina información relacionada."}
    ],
    log: [
      ["Etapa 01", "Reglas del negocio", "Se definió qué información debía almacenarse y cómo se relacionaban las operaciones.", "Diccionario inicial de datos."],
      ["Etapa 02", "Modelo entidad-relación", "Se identificaron entidades, atributos, claves y cardinalidades.", "Diagrama ER validado."],
      ["Etapa 03", "Normalización", "Se reorganizaron los atributos para eliminar grupos repetidos y dependencias innecesarias.", "Modelo normalizado hasta 3FN."],
      ["Etapa 04", "Implementación SQL", "Se crearon tablas, restricciones y registros de prueba respetando el orden de dependencias.", "Script de creación e inserción."],
      ["Etapa 05", "Consultas y validación", "Se probaron filtros, uniones y agregaciones para comprobar que el modelo respondía correctamente.", "Consultas operativas y resultados revisados."]
    ],
    learnings: [
      ["El modelo define la calidad", "Una consulta clara depende de relaciones y claves bien pensadas desde el inicio."],
      ["Normalizar con propósito", "La normalización no es solo una regla académica: reduce errores y facilita las actualizaciones."],
      ["Probar también los datos", "Los registros de prueba ayudaron a detectar relaciones incompletas antes de dar el diseño por terminado."]
    ],
    next: "lab"
  }
};

const params = new URLSearchParams(window.location.search);
const id = projects[params.get("id")] ? params.get("id") : "lab";
const project = projects[id];
const root = document.documentElement;

const preferredTheme = localStorage.getItem("portfolio-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  document.querySelector("[data-theme-toggle]").setAttribute("aria-label", theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#08101f" : "#f6f8fc";
};
setTheme(preferredTheme);
document.querySelector("[data-theme-toggle]").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

document.title = `${project.title} | Brayan Borja`;
document.querySelector("[data-case-theme]").dataset.caseTheme = project.theme;
document.querySelector("[data-project-type]").textContent = project.type;
document.querySelector("[data-project-title]").textContent = project.title;
document.querySelector("[data-project-summary]").textContent = project.summary;
document.querySelector("[data-project-intro]").textContent = project.intro;
document.querySelector("[data-project-challenge]").textContent = project.challenge;
document.querySelector("[data-project-solution]").textContent = project.solution;
document.querySelector("[data-project-role]").textContent = project.role;

const cover = document.querySelector("[data-project-cover]");
cover.src = project.cover;
cover.alt = `Vista principal del proyecto ${project.title}`;
document.querySelector("[data-project-cover-link]").href = project.cover;

document.querySelector("[data-project-tags]").replaceChildren(...project.tags.map(tag => {
  const span = document.createElement("span"); span.textContent = tag; return span;
}));

document.querySelector("[data-project-facts]").replaceChildren(...project.facts.map(([value,label]) => {
  const item = document.createElement("div");
  const strong = document.createElement("strong"); strong.textContent = value;
  const span = document.createElement("span"); span.textContent = label;
  item.append(strong, span); return item;
}));

document.querySelector("[data-project-gallery]").replaceChildren(...project.gallery.map((item,index) => {
  const figure = document.createElement("figure");
  const link = document.createElement("a"); link.href = item.src; link.target = "_blank"; link.rel = "noreferrer";
  const image = document.createElement("img"); image.src = item.src; image.alt = `${item.title} de ${project.title}`; image.loading = index ? "lazy" : "eager";
  const badge = document.createElement("span"); badge.textContent = "Ampliar imagen";
  link.append(image,badge);
  const caption = document.createElement("figcaption");
  const title = document.createElement("strong"); title.textContent = item.title;
  const text = document.createElement("p"); text.textContent = item.text;
  caption.append(title,text); figure.append(link,caption); return figure;
}));

document.querySelector("[data-project-log]").replaceChildren(...project.log.map(([stage,title,text,output]) => {
  const article = document.createElement("article");
  article.innerHTML = `<div class="timeline-marker"></div><span>${stage}</span><h3>${title}</h3><p>${text}</p><div class="timeline-output"><b>Entregable</b>${output}</div>`;
  return article;
}));

document.querySelector("[data-project-learnings]").replaceChildren(...project.learnings.map(([title,text],index) => {
  const article = document.createElement("article");
  article.innerHTML = `<span>0${index+1}</span><h3>${title}</h3><p>${text}</p>`;
  return article;
}));

const next = projects[project.next];
document.querySelector("[data-next-title]").textContent = next.title;
document.querySelector("[data-next-link]").href = `proyecto.html?id=${project.next}`;
document.querySelector("[data-year]").textContent = new Date().getFullYear();
