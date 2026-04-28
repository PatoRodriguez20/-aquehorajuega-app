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
      fecha: null,//;"2026-05-03T14:00:00-03:00",
      condicion: "local",
      estadio: "Estadio Presidente Juan Domingo Perón",
      ciudad: "Avellaneda, Provincia de Buenos Aires",
      competencia: "Liga Profesional",
    },
    {
      rival: "Botafogo",
      fecha: "2026-05-06T21:30:00-03:00",//null, // null = fecha por confirmar
      condicion: "visitante",
      estadio: "Estádio Nilton Santos",
      ciudad: "Rio de Janeiro",
      competencia: "Liga Sudamericana",
    },
  ],

  ultimosResultados: [
    {
      rival: "Barracas",
      condicionRacing: "local",
      golesRacing: 1,
      golesRival: 1,
      fecha: "24 Abril",
      estadio: "Est. Presidente Perón",
      goleadores: "Zaracho",
    },
    {
      rival: "Aldosivi",
      condicionRacing: "visitante",
      golesRacing: 1,
      golesRival: 1,
      fecha: "19 Abril",
      estadio: "Estadio José María Minella",
      goleadores: "Zaracho",
    },
    {
      rival: "Botafogo",
      condicionRacing: "local",
      golesRacing: 2,
      golesRival: 3,
      fecha: "15 Abril",
      estadio: "Estadio Presidente Juan Domingo Perón",
      goleadores: "Sosa, Martinez",
    },
  ],
};