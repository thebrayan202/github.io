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
    next: "stock"
  },
  stock: {
    type: "Gestión operativa · Proyecto aplicado",
    title: "StockPilot",
    summary: "Sistema de inventario pensado para controlar movimientos, detectar faltantes y apoyar decisiones de reposición en un pequeño negocio.",
    intro: "StockPilot parte de un problema común en comercios pequeños: el inventario suele controlarse en cuadernos o archivos separados y los errores aparecen cuando ya falta un producto. El proyecto plantea una solución trazable, con reglas de negocio, modelo de datos y un tablero operativo. Se trabajó con información ficticia para demostrar el flujo sin exponer datos de una empresa real.",
    challenge: "Cuando las entradas, ventas y ajustes no quedan conectados, el stock mostrado deja de ser confiable. Esto provoca quiebres, compras urgentes, productos inmovilizados y poca claridad sobre quién realizó cada movimiento.",
    solution: "Un prototipo técnico con catálogo de productos, proveedores, entradas, salidas, ajustes, stock mínimo y alertas. Cada movimiento actualiza existencias y conserva un historial; el dashboard resume productos críticos, rotación y compras sugeridas.",
    role: "Definí el alcance, las reglas de inventario y los casos de uso; diseñé el modelo relacional, la interfaz operativa y las consultas para indicadores. También preparé datos ficticios, casos de prueba y una propuesta de evolución hacia una API y control por roles.",
    theme: "stock",
    tags: ["Java", "SQL", "Power BI", "Inventario", "Reglas de negocio"],
    facts: [["6", "módulos"], ["8", "reglas clave"], ["7", "etapas documentadas"]],
    cover: "assets/stock-dashboard.svg",
    gallery: [
      {src:"assets/stock-dashboard.svg", title:"Panel operativo de inventario", text:"Resumen de existencias, alertas de stock mínimo, movimientos recientes y productos que requieren reposición."},
      {src:"assets/stock-flow.svg", title:"Flujo y arquitectura de datos", text:"Relación entre catálogo, movimientos, existencias y dashboard, con validaciones antes de actualizar el stock."}
    ],
    log: [
      ["Etapa 01", "Contexto y alcance", "Se definió como usuario principal al responsable de almacén de un pequeño comercio y se limitó el alcance a inventario, movimientos y reposición.", "Documento de alcance, usuario y objetivos medibles."],
      ["Etapa 02", "Reglas de negocio", "Se documentaron reglas para stock mínimo, entradas, salidas, ajustes, productos inactivos, cantidades válidas y movimientos que no pueden dejar existencias negativas.", "Matriz de ocho reglas y casos límite."],
      ["Etapa 03", "Modelo de datos", "Se separaron productos, categorías, proveedores, usuarios y movimientos para conservar trazabilidad y evitar que el stock dependa de un dato manual aislado.", "Modelo relacional y diccionario de datos."],
      ["Etapa 04", "Diseño del flujo", "Se organizaron las tareas críticas: registrar producto, recibir mercadería, registrar salida, revisar alertas y preparar una reposición.", "Mapa de navegación y wireframes operativos."],
      ["Etapa 05", "Lógica y consultas", "Se planteó la actualización transaccional del stock y consultas para identificar faltantes, rotación, valorización y últimos movimientos.", "Pseudocódigo, consultas SQL y validaciones."],
      ["Etapa 06", "Dashboard y alertas", "Se priorizaron indicadores accionables y se diseñó una alerta que explica qué producto falta, cuánto queda y cuál es la cantidad sugerida.", "Dashboard de control y criterios de alerta."],
      ["Etapa 07", "Pruebas y mejoras", "Se probaron escenarios con datos ficticios: ingreso, venta, ajuste, duplicado y salida superior al stock disponible. Después se documentaron mejoras futuras.", "Casos de prueba, resultados y hoja de ruta."],
    ],
    learnings: [
      ["El stock es un resultado", "La existencia confiable debe calcularse a partir de movimientos válidos y trazables, no depender de una cifra editada sin contexto."],
      ["Una alerta debe orientar", "Mostrar un número en rojo no basta: una buena alerta explica el riesgo y propone la siguiente acción."],
      ["Primero consistencia, luego análisis", "Los indicadores solo son útiles cuando las reglas de registro y el modelo de datos protegen la calidad de la información."]
    ],
    next: "farma"
  },
  farma: {
    type: "Analítica geoespacial · Proyecto aplicado",
    title: "FarmaRadar Perú",
    summary: "Herramienta para comparar zonas del Perú y estimar la oportunidad de abrir una farmacia mediante datos públicos, ubicación y escenarios de costos.",
    intro: "FarmaRadar Perú nace de una pregunta empresarial concreta: ¿en qué zona tendría mejores condiciones una nueva farmacia? El proyecto cruza población, farmacias y boticas autorizadas, cercanía a establecimientos de salud, oferta de medicamentos y variables financieras ingresadas por el usuario. El resultado es un análisis por departamento, provincia y distrito con fecha de corte visible. No afirma que una ubicación será rentable: permite comparar escenarios y entender qué supuestos sostienen cada resultado.",
    challenge: "La población alta por sí sola no demuestra una oportunidad. Una zona puede tener mucha demanda potencial, pero también competencia intensa, alquiler elevado, baja disponibilidad de locales o márgenes insuficientes. Además, las fuentes públicas usan estructuras y fechas distintas que deben normalizarse antes de compararlas.",
    solution: "Un pipeline en Python que limpia y une datos mediante ubigeo, geocodifica establecimientos y calcula variables espaciales en PostGIS. El dashboard muestra competencia dentro de un radio configurable, población por farmacia autorizada, proximidad a IPRESS, rango de precios, punto de equilibrio y escenarios conservador, base y optimista.",
    role: "Definí la pregunta de negocio, seleccioné fuentes peruanas verificables, diseñé el modelo geoespacial y documenté la fórmula de rentabilidad estimada. También planteé controles de calidad, supuestos editables, advertencias y una interfaz que permite explicar por qué una zona obtiene determinado puntaje.",
    theme: "farma",
    tags: ["Python", "Pandas", "GeoPandas", "PostgreSQL", "PostGIS"],
    facts: [["4", "fuentes oficiales"], ["5", "variables clave"], ["8", "etapas documentadas"]],
    cover: "assets/farma-dashboard.svg",
    gallery: [
      {src:"assets/farma-dashboard.svg", title:"Mapa de oportunidad y simulador", text:"Comparación de zonas del Perú con filtros territoriales, competencia cercana, demanda potencial y resultado mensual estimado."},
      {src:"assets/farma-method.svg", title:"Fuentes, modelo y fórmula", text:"Proceso que une datos oficiales, análisis espacial y costos editables antes de calcular escenarios y punto de equilibrio."}
    ],
    log: [
      ["Etapa 01", "Pregunta y alcance", "Se definió que la herramienta compararía oportunidades a nivel de distrito y no recomendaría un local específico sin inspección presencial. La rentabilidad se trataría como escenario, no como certeza.", "Documento de alcance, usuario y límites del análisis."],
      ["Etapa 02", "Inventario de fuentes", "Se seleccionaron DIGEMID para establecimientos y precios, INEI para población y SUSALUD–RENIPRESS para IPRESS. Para cada fuente se registraron responsable, cobertura y fecha de corte.", "Catálogo de fuentes y matriz de actualización."],
      ["Etapa 03", "Limpieza territorial", "Se estandarizaron departamento, provincia, distrito y ubigeo; se revisaron duplicados, direcciones incompletas y registros sin coordenadas antes de unir las tablas.", "Pipeline reproducible en Python y reporte de calidad."],
      ["Etapa 04", "Modelo geoespacial", "Los establecimientos se representaron como puntos y los distritos como áreas. PostGIS permitió contar competidores por radio y calcular distancia a IPRESS cercanas.", "Esquema espacial, consultas y diccionario de variables."],
      ["Etapa 05", "Índice de oportunidad", "Se combinaron población por farmacia autorizada, competencia cercana, proximidad a IPRESS, disponibilidad/precio y presión de costos. Los pesos quedaron visibles y editables.", "Fórmula documentada y análisis de sensibilidad."],
      ["Etapa 06", "Escenario financiero", "Se calculó ingreso mensual como tickets por día × ticket promedio × días de atención. El margen bruto menos alquiler, personal, servicios y logística produce el resultado operativo estimado.", "Simulador conservador, base y optimista con punto de equilibrio."],
      ["Etapa 07", "Mapa y explicación", "La interfaz permite filtrar territorio, comparar zonas y abrir una ficha que explica qué variables elevan o reducen el puntaje, evitando un ranking sin contexto.", "Dashboard geográfico y ficha comparativa por distrito."],
      ["Etapa 08", "Validación y advertencias", "Se revisaron totales por fuente, coordenadas fuera del distrito, fechas desactualizadas y escenarios extremos. Se añadió una advertencia para validar alquiler, tránsito peatonal, licencias y competencia en campo.", "Checklist de calidad, limitaciones y plan de actualización."],
    ],
    learnings: [
      ["Un puntaje debe poder explicarse", "Una zona no es atractiva solo porque aparece verde: el usuario debe ver las variables, los pesos y la fecha que produjeron el resultado."],
      ["Los datos públicos no reemplazan el terreno", "Población y competencia orientan la búsqueda, pero alquiler, flujo peatonal, seguridad y permisos necesitan validación local."],
      ["Rentabilidad significa escenario", "Separar datos observados de supuestos financieros evita presentar una estimación como si fuera una ganancia garantizada."]
    ],
    sources: [
      {label:"DIGEMID", title:"Observatorio de Precios de Medicamentos", text:"Farmacias y boticas autorizadas, ubicación, oferta y comparación de precios por territorio.", url:"https://www.digemid.minsa.gob.pe/webDigemid/notas/2026/consigue-medicamentos-de-calidad-a-bajo-costo-consultando-el-observatorio-de-precios-de-la-digemid/"},
      {label:"INEI", title:"Población proyectada por distrito", text:"Población territorial usada para construir medidas de demanda potencial y cobertura.", url:"https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib0012/N53/anexo031.htm"},
      {label:"SUSALUD", title:"Registro Nacional de IPRESS", text:"Ubicación oficial de establecimientos de salud públicos, privados y mixtos del país.", url:"https://datos.susalud.gob.pe/dataset/registro-nacional-de-ipress-renipress"},
      {label:"DIGEMID", title:"Regulación de establecimientos", text:"Requisito de autorización sanitaria y contexto normativo para farmacias y boticas.", url:"https://www.digemid.minsa.gob.pe/webDigemid/establecimientos/"}
    ],
    next: "citas"
  },
  citas: {
    type: "Aplicación web · Proyecto aplicado",
    title: "CitaFácil",
    summary: "Sistema responsive de reservas para consultar horarios disponibles, confirmar citas y reducir cruces en negocios que atienden por agenda.",
    intro: "CitaFácil fue pensado para barberías, consultorios y otros servicios que coordinan horarios mediante mensajes. Cuando la agenda depende de conversaciones separadas, confirmar, reprogramar o cancelar consume tiempo y puede producir cruces. El proyecto organiza ese proceso en un flujo simple y documenta las reglas necesarias para que la disponibilidad sea confiable.",
    challenge: "El cliente necesita reservar rápido, mientras el negocio debe evitar dobles reservas, respetar la duración de cada servicio y mantener claridad sobre citas pendientes, confirmadas, completadas o canceladas.",
    solution: "Un prototipo web responsive con selección de servicio, profesional, fecha y hora; validación de disponibilidad; confirmación y panel diario. La propuesta incluye estados de cita, reprogramación y reglas para liberar horarios cancelados.",
    role: "Analicé los actores y escenarios, definí reglas de agenda, diseñé el flujo responsive y la estructura de datos. También preparé validaciones de interfaz, estados vacíos, mensajes de error y casos de prueba para conflictos de horario.",
    theme: "citas",
    tags: ["HTML", "CSS", "JavaScript", "UX/UI", "Responsive"],
    facts: [["4", "estados"], ["3", "roles"], ["7", "etapas documentadas"]],
    cover: "assets/citas-calendar.svg",
    gallery: [
      {src:"assets/citas-calendar.svg", title:"Agenda y panel diario", text:"Vista de horarios, próximas citas, estados y capacidad disponible para organizar la jornada."},
      {src:"assets/citas-flow.svg", title:"Flujo de reserva responsive", text:"Secuencia para elegir servicio, profesional, horario y confirmar la cita con retroalimentación clara."}
    ],
    log: [
      ["Etapa 01", "Usuarios y escenarios", "Se definieron tres actores: cliente, profesional y administrador. Para cada uno se identificaron tareas, información necesaria y posibles errores.", "Mapa de actores y escenarios de uso."],
      ["Etapa 02", "Reglas de disponibilidad", "Se documentaron duración del servicio, horario laboral, descansos, anticipación mínima, cancelaciones y prohibición de reservas superpuestas.", "Matriz de reglas de agenda."],
      ["Etapa 03", "Arquitectura de información", "Se organizaron servicios, profesionales, horarios y citas para que el flujo muestre solo opciones válidas en cada paso.", "Mapa del sitio y modelo conceptual."],
      ["Etapa 04", "Diseño responsive", "Se priorizó la reserva desde celular con controles grandes, progreso visible y un resumen permanente antes de confirmar.", "Wireframes móvil y escritorio."],
      ["Etapa 05", "Prototipo e interacciones", "Se definieron selección, retroceso, confirmación, reprogramación y cancelación, incluyendo estados de carga, vacío, éxito y error.", "Prototipo navegable y catálogo de estados."],
      ["Etapa 06", "Validación funcional", "Se probaron horarios ocupados, fechas pasadas, cambios de profesional, cancelaciones y dos intentos de reserva sobre el mismo bloque.", "Casos de prueba y correcciones del flujo."],
      ["Etapa 07", "Accesibilidad y evolución", "Se revisaron contraste, foco de teclado, etiquetas y mensajes. La hoja de ruta considera recordatorios, autenticación y una API para persistencia.", "Checklist de accesibilidad y hoja de ruta."],
    ],
    learnings: [
      ["La disponibilidad es una regla", "Un calendario bonito no evita conflictos si el sistema no valida duración, bloqueos y superposición antes de confirmar."],
      ["Diseñar también los errores", "Fechas no disponibles, cancelaciones y estados vacíos forman parte central del producto, no son excepciones menores."],
      ["Menos pasos, más confianza", "Un resumen claro y retroalimentación inmediata permiten reservar con rapidez sin perder el control de la información."]
    ],
    next: "lab"
  }
};

const params = new URLSearchParams(window.location.search);
const aliases = { finance: "farma" };
const requestedId = aliases[params.get("id")] || params.get("id");
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

const sourcesPanel = document.querySelector("[data-project-sources-panel]");
if (project.sources?.length) {
  sourcesPanel.hidden = false;
  document.querySelector("[data-project-sources]").replaceChildren(...project.sources.map((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const label = document.createElement("span"); label.textContent = source.label;
    const title = document.createElement("strong"); title.textContent = source.title;
    const text = document.createElement("p"); text.textContent = source.text;
    const arrow = document.createElement("i"); arrow.textContent = "Abrir fuente ↗";
    link.append(label, title, text, arrow);
    return link;
  }));
}

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
  const link = document.createElement("a"); link.href = item.src; link.target = "_blank"; link.rel = "noopener noreferrer";
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
