const projects = {
  lab: {
    type: "Prototipo interactivo · Proyecto académico",
    title: "Lab Nutrition",
    summary: "Sistema logístico en Figma para registrar marcas, modelos y compras, aprobar operaciones y comprobar la experiencia mediante pruebas de usabilidad.",
    intro: "Lab Nutrition reúne en un mismo flujo el registro de marcas, modelos y compras. El entregable incluye un plugin de Figma escrito en JavaScript que genera dos páginas de trabajo, nueve pantallas, componentes reutilizables, variables de estado e interacciones para guardar, editar, eliminar, aprobar y rechazar registros. La documentación adjunta permite seguir el proyecto desde la construcción del prototipo hasta la evaluación con usuarios.",
    challenge: "El flujo logístico relaciona varias entidades y estados. La interfaz debía indicar qué campos son obligatorios, mostrar códigos automáticos, mantener visible el registro seleccionado y comunicar con claridad cuándo una compra está pendiente, aprobada o rechazada.",
    solution: "Un prototipo navegable con Dashboard, Registrar Marca, Registrar Modelo, Registrar Compra y Aprobar Compra, acompañado por pantallas reutilizables para agregar, editar y eliminar. El sistema visual usa componentes, variantes, dropdowns, calendario y variables de Figma para simular cambios de estado sin depender de pantallas estáticas desconectadas.",
    role: "Mi trabajo documentado abarcó la construcción y ordenamiento del prototipo, la definición de componentes y variables, la conexión de interacciones, la preparación de la prueba moderada y no moderada, la consolidación de resultados y el plan de versiones. Los documentos con nombres de participantes y códigos personales se mantienen fuera del sitio público.",
    theme: "lab",
    tags: ["Figma", "JavaScript", "Figma Plugin API", "UX/UI", "Pruebas de usabilidad"],
    facts: [["9", "pantallas interactivas"], ["4/4", "tareas completadas"], ["22,5 s", "tiempo promedio"]],
    stack: {
      title: "Tecnologías usadas en Lab Nutrition.",
      note: "El proyecto combina construcción visual, lógica de interacción y evaluación de usabilidad; no utiliza un backend ni un framework web.",
      groups: [
        ["Interfaz y prototipo", ["Figma", "Componentes y variantes", "Variables y estilos", "Prototipo interactivo"]],
        ["Lógica y validación", ["JavaScript", "Figma Plugin API", "Atomic Design", "Pruebas de usabilidad"]]
      ]
    },
    cover: "assets/lab-dashboard.svg",
    gallery: [
      {src: "assets/lab-dashboard.svg", title: "Dashboard logístico", text: "Vista reconstruida a partir de los datos de demostración definidos en el código: cuatro marcas registradas, una compra pendiente y una aprobada."},
      {src: "assets/lab-prototype.svg", title: "Registro y aprobación", text: "Dos momentos del flujo: registro de una marca con código automático y aprobación de una compra con total, fecha y estado visibles."},
      {src: "assets/lab-roadmap.png", title: "Plan de versiones", text: "Hoja de ruta presentada para diferenciar la fase entregada en julio de 2026 de las mejoras planificadas para octubre de 2026 y enero de 2027."}
    ],
    evidence: [
      ["Código", "Plugin de Figma", "Archivo JavaScript que crea el sistema visual, las nueve pantallas, variables, componentes y reacciones del prototipo."],
      ["Investigación", "Informe de usabilidad", "Una sesión moderada y una prueba no moderada centradas en la tarea Registrar modelo."],
      ["Datos", "Matriz de respuestas", "Cuatro respuestas: 100 % completó la tarea, tres valoraciones Fácil y una Regular; promedio de 22,5 segundos."],
      ["Proceso", "Manejo de versiones", "Plan v1.0, v1.1 y v2.0 que separa lo entregado de las mejoras futuras."]
    ],
    log: [
      ["Etapa 01", "Definición del alcance", "Se delimitaron las entidades, tareas y estados que debía representar el sistema logístico.", "Alcance funcional y cinco módulos principales."],
      ["Etapa 02", "Arquitectura de pantallas", "Se organizó el recorrido desde el Dashboard hasta el registro y la aprobación de una compra.", "Mapa de navegación y estructura de nueve pantallas."],
      ["Etapa 03", "Sistema visual", "Se definieron paleta, tipografía Inter, botones, campos, tarjetas, tablas y estados reutilizables.", "Biblioteca de componentes y estilos en Figma."],
      ["Etapa 04", "Variables e interacciones", "Se programaron dropdowns, calendario, códigos automáticos, mensajes y cambios de estado mediante la Figma Plugin API.", "Plugin JavaScript y prototipo navegable."],
      ["Etapa 05", "Flujos CRUD", "Se conectaron guardar, editar, eliminar y limpiar; también se incorporaron confirmaciones para aprobar o rechazar compras.", "Flujos interactivos con respuestas visibles."],
      ["Etapa 06", "Diseño de la prueba", "Se prepararon el guion moderado, las instrucciones no moderadas y las preguntas para evaluar Registrar modelo.", "Guion, formulario y criterios de observación."],
      ["Etapa 07", "Análisis de resultados", "Se consolidaron cuatro respuestas no moderadas: finalización completa, sin dificultades reportadas y facilidad mayormente positiva.", "Indicadores, tiempos y hallazgos documentados."],
      ["Etapa 08", "Plan de mejora", "Se separó la versión actual de las mejoras previstas en textos, validaciones, inventario, reportes y accesibilidad.", "Hoja de ruta v1.0 a v2.0."]
    ],
    learnings: [
      ["El estado debe ser visible", "Los usuarios entienden mejor el flujo cuando el código, la acción actual y el resultado aparecen en la misma pantalla."],
      ["Medir evita suposiciones", "La prueba permitió reportar finalización, facilidad y tiempo real sin inventar métricas ni conclusiones."],
      ["Planificar no es prometer", "La hoja de ruta distingue con claridad lo ya construido de las funciones que aún están planificadas."]
    ],
    next: "nova"
  },
  nova: {
    type: "Aplicación de escritorio · Proyecto académico",
    title: "Tienda Nova",
    summary: "Sistema de ventas en Java 17 y Swing para gestionar productos, clientes, ventas, stock, comprobantes, historial y reportes desde una sola aplicación.",
    intro: "Tienda Nova convierte un proceso manual de ventas en una aplicación de escritorio organizada por capas. El proyecto incluye código fuente, ejecutable JAR, diagrama UML, documentación técnica, comprobantes de demostración, persistencia local, reporte CSV y un video donde se recorren los módulos. La solución fue construida para funcionar en una computadora sin base de datos ni librerías externas.",
    challenge: "Los registros dispersos dificultan conocer el stock disponible, repetir correctamente los cálculos de subtotal e IGV y reconstruir el historial de una venta. Además, concentrar interfaz y lógica en una sola clase habría hecho el sistema difícil de mantener y probar.",
    solution: "Una aplicación con inicio de sesión, CRUD de productos y clientes, carrito de venta, validación de existencias, cálculo de subtotal, IGV y total, comprobantes correlativos, historial con anulación y reposición de stock, indicadores y exportación CSV. La arquitectura separa vista, servicio, dominio, persistencia y utilidades.",
    role: "Desarrollé el análisis del problema, los requisitos, el modelo UML, las clases de dominio, la capa de servicio, la persistencia local y la interfaz Swing. También preparé la documentación, los casos de prueba y la demostración. El sitio muestra capturas del sistema sin publicar el video original ni datos personales visibles en la grabación.",
    theme: "nova",
    tags: ["Java 17", "Swing", "POO", "NetBeans", "UML", "Persistencia local"],
    facts: [["23", "archivos fuente Java"], ["11/11", "casos conformes"], ["0", "librerías externas"]],
    stack: {
      title: "Tecnologías usadas en Tienda Nova.",
      note: "Aplicación de escritorio desarrollada sin frameworks web, base de datos ni librerías externas.",
      groups: [
        ["Interfaz", ["Java 17", "Java Swing", "NetBeans", "Formularios y tablas"]],
        ["Lógica y persistencia", ["POO", "TiendaService", "Serialización local", "Archivos CSV"]]
      ]
    },
    cover: "assets/nova-dashboard.png",
    gallery: [
      {src: "assets/nova-dashboard.png", title: "Panel principal", text: "Captura real de la aplicación con indicadores de ventas, ingresos y productos, además del menú lateral de módulos."},
      {src: "assets/nova-products.png", title: "Gestión de productos", text: "Formulario y tabla para registrar, consultar, editar, eliminar y buscar productos con categoría, precio, stock y estado."},
      {src: "assets/nova-reports.png", title: "Reportes e indicadores", text: "Resumen de ventas emitidas, total vendido, clientes registrados, stock bajo y ranking de productos más vendidos."},
      {src: "assets/nova-uml.png", title: "Diagrama UML entregado", text: "Modelo de clases con herencia, composición, agregación, asociaciones y dependencias entre dominio, servicio y persistencia."}
    ],
    evidence: [
      ["Código", "Proyecto Java completo", "Veintitrés archivos fuente organizados en modelo, servicio, persistencia, utilidades y vista."],
      ["Pruebas", "Once casos conformes", "Cobertura de acceso, CRUD, validaciones, venta, stock, anulación, persistencia y exportación CSV."],
      ["Diseño", "UML y arquitectura", "Relaciones y responsabilidades documentadas antes de explicar la implementación."],
      ["Demostración", "Recorrido funcional", "Video de 2 min 05 s que muestra productos, clientes, nueva venta y reportes; las capturas públicas fueron recortadas para proteger la identidad."]
    ],
    log: [
      ["Etapa 01", "Problema y alcance", "Se identificaron los riesgos del registro manual: stock incierto, cálculos repetidos y poca trazabilidad.", "Objetivo general, beneficios y límites de la versión académica."],
      ["Etapa 02", "Requisitos", "Se definieron nueve requisitos funcionales y criterios para usabilidad, portabilidad, mantenibilidad e integridad.", "Matriz de requisitos RF-01 a RF-09."],
      ["Etapa 03", "Modelado orientado a objetos", "Se diseñaron Persona, Cliente, Producto, Venta, DetalleVenta y Factura con responsabilidades específicas.", "Diagrama UML y justificación de relaciones."],
      ["Etapa 04", "Arquitectura por capas", "La vista quedó separada de TiendaService, el modelo de dominio, la persistencia y las utilidades.", "Paquetes y dependencias organizados."],
      ["Etapa 05", "Módulos CRUD", "Se implementaron formularios y tablas para productos y clientes, con búsqueda, validaciones y estados activos o inactivos.", "Paneles Swing conectados a la capa de servicio."],
      ["Etapa 06", "Flujo de venta", "La aplicación valida cliente y existencias, crea detalles, descuenta stock, calcula importes y emite un comprobante correlativo.", "Venta completa con subtotal, IGV y total."],
      ["Etapa 07", "Persistencia y reportes", "El estado se serializa primero en un archivo temporal y luego reemplaza el anterior; los resultados también pueden exportarse a CSV.", "Archivo tienda.dat, comprobantes y reporte de ventas."],
      ["Etapa 08", "Verificación y entrega", "Se compiló con JDK 17 y se comprobaron once escenarios, incluidos duplicados, stock insuficiente, anulación y reapertura del sistema.", "Once casos conformes, documentación y video de demostración."]
    ],
    learnings: [
      ["Las reglas viven en el servicio", "Centralizar validaciones y operaciones en TiendaService evita que cada pantalla aplique criterios diferentes."],
      ["Persistir exige integridad", "Escribir primero un archivo temporal reduce el riesgo de dejar el estado incompleto si ocurre un fallo durante el guardado."],
      ["Las pruebas deben cubrir errores", "Duplicados, documentos inválidos, stock insuficiente y anulaciones demostraron más que un recorrido únicamente exitoso."]
    ],
    next: "lab"
  }
};

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("id");
const id = projects[requestedId] ? requestedId : "lab";
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

const stackPanel = document.querySelector("[data-project-stack-panel]");
if (project.stack?.groups?.length) {
  stackPanel.hidden = false;
  stackPanel.dataset.stackTheme = project.theme;
  document.querySelector("[data-project-stack-title]").textContent = project.stack.title;
  document.querySelector("[data-project-stack-note]").textContent = project.stack.note;
  document.querySelector("[data-project-stack]").replaceChildren(...project.stack.groups.map(([label, technologies], groupIndex) => {
    const article = document.createElement("article");
    const groupLabel = document.createElement("h4");
    groupLabel.textContent = label;
    const list = document.createElement("ul");
    list.replaceChildren(...technologies.map((technology, technologyIndex) => {
      const item = document.createElement("li");
      const number = document.createElement("span");
      number.textContent = String(groupIndex * 4 + technologyIndex + 1).padStart(2, "0");
      const name = document.createElement("strong");
      name.textContent = technology;
      item.append(number, name);
      return item;
    }));
    article.append(groupLabel, list);
    return article;
  }));
}

const evidencePanel = document.querySelector("[data-project-evidence-panel]");
if (project.evidence?.length) {
  evidencePanel.hidden = false;
  document.querySelector("[data-project-evidence]").replaceChildren(...project.evidence.map(([label, title, description]) => {
    const item = document.createElement("article");
    const itemLabel = document.createElement("span");
    itemLabel.textContent = label;
    const itemTitle = document.createElement("strong");
    itemTitle.textContent = title;
    const itemText = document.createElement("p");
    itemText.textContent = description;
    item.append(itemLabel, itemTitle, itemText);
    return item;
  }));
}

const cover = document.querySelector("[data-project-cover]");
cover.src = project.cover;
cover.alt = `Vista principal del proyecto ${project.title}`;
document.querySelector("[data-project-cover-link]").href = project.cover;

document.querySelector("[data-project-tags]").replaceChildren(...project.tags.map((tag) => {
  const span = document.createElement("span");
  span.textContent = tag;
  return span;
}));

document.querySelector("[data-project-facts]").replaceChildren(...project.facts.map(([value, label]) => {
  const item = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = value;
  const span = document.createElement("span");
  span.textContent = label;
  item.append(strong, span);
  return item;
}));

document.querySelector("[data-project-gallery]").replaceChildren(...project.gallery.map((item, index) => {
  const figure = document.createElement("figure");
  const link = document.createElement("a");
  link.href = item.src;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  const image = document.createElement("img");
  image.src = item.src;
  image.alt = `${item.title} de ${project.title}`;
  image.loading = index ? "lazy" : "eager";
  const badge = document.createElement("span");
  badge.textContent = "Ampliar imagen";
  link.append(image, badge);
  const caption = document.createElement("figcaption");
  const title = document.createElement("strong");
  title.textContent = item.title;
  const text = document.createElement("p");
  text.textContent = item.text;
  caption.append(title, text);
  figure.append(link, caption);
  return figure;
}));

document.querySelector("[data-project-log]").replaceChildren(...project.log.map(([stage, title, text, output]) => {
  const article = document.createElement("article");
  article.innerHTML = `<div class="timeline-marker"></div><span>${stage}</span><h3>${title}</h3><p>${text}</p><div class="timeline-output"><b>Entregable</b>${output}</div>`;
  return article;
}));

document.querySelector("[data-project-learnings]").replaceChildren(...project.learnings.map(([title, text], index) => {
  const article = document.createElement("article");
  article.innerHTML = `<span>0${index + 1}</span><h3>${title}</h3><p>${text}</p>`;
  return article;
}));

const next = projects[project.next];
document.querySelector("[data-next-title]").textContent = next.title;
document.querySelector("[data-next-link]").href = `proyecto.html?id=${project.next}`;
document.querySelector("[data-year]").textContent = new Date().getFullYear();
