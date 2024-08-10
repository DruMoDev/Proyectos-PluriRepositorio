export const MARCAS = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

export const YEARS = [];
const ultimos20Años = () => {
  let YEARMAX = new Date().getFullYear();

  for (let i = 0; i < 20; i++) {
    YEARS.push(YEARMAX);
    YEARMAX = YEARMAX - 1;
  }
  return YEARS;
};
ultimos20Años();

export const PLANES = [
    { id: 1, nombre: "Básico" },
    { id: 2, nombre: "Completo" },
  ];
  

