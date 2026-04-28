// data/racing.js

export const racingData = {
  equipo: "Racing Club",
  colores: ["#CCCCCC", "#23BCDD"],

  proximosPartidos: [
    {
      rival: "Caracas",
      fecha: "2026-04-29T19:00:00-03:00",
      condicion: "visitante",
      estadio: "Estadio Olímpico de la UCV",
      ciudad: "Caracas, Venezuela",
      competencia: "Copa Sudamericana",
    },
    {
      rival: "Huracan",
      fecha: "2026-05-03T16:00:00-03:00",
      condicion: "local",
      estadio: "Estadio Presidente Juan Domingo Perón",
      ciudad: "Avellaneda, Provincia de Buenos Aires",
      competencia: "Liga Profesional",
    },
    {
      rival: "Botafogo",
      fecha: "2026-05-06T21:30:00-03:00",// null = fecha por confirmar
      condicion: "visitante",
      estadio: "Estádio Nilton Santos",
      ciudad: "Rio de Janeiro",
      competencia: "Copa Sudamericana",
    },
  ],

  ultimosResultados: [
    {
      rival: "Barracas",
      condicionRacing: "local",
      golesRacing: 1,
      golesRival: 1,
      fecha: "2026-04-24T21:30:00-03:00",
      estadio: "Est. Presidente Perón",
      goleadores: "Zaracho",
      competencia: "Liga Profesional",

    },
    {
      rival: "Aldosivi",
      condicionRacing: "visitante",
      golesRacing: 1,
      golesRival: 1,
      fecha: "2026-04-19T13:30:00-03:00",
      estadio: "Estadio José María Minella",
      goleadores: "Zaracho",
      competencia: "Liga Profesional",
    },
    {
      rival: "Botafogo",
      condicionRacing: "local",
      golesRacing: 2,
      golesRival: 3,
      fecha: "2026-04-15T19:00:00-03:00",
      estadio: "Estadio Presidente Juan Domingo Perón",
      goleadores: "Sosa, Martinez",
      competencia: "Copa Sudamericana",

    },
  ],
};