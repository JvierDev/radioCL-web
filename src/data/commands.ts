export const commands = [
  {
    name: "/play",
    description: "Reproduce una radio con autocompletado.",
    important: true,
  },
  {
    name: "/stop",
    description: "Detiene la reproducción.",
    important: false,
  },
  {
    name: "/leave",
    description: "Desconecta radioCL del canal.",
    important: false,
  },
  {
    name: "/list",
    description: "Muestra todas las radios disponibles.",
    important: true,
  },
  {
    name: "/nowplaying",
    description: "Muestra qué radio está sonando.",
    important: true,
  },
  {
    name: "/setup",
    description: "Crea el panel interactivo.",
    important: true,
  },
  {
    name: "/support",
    description: "Muestra las opciones para apoyar radioCL.",
    important: false,
  },
] as const;
