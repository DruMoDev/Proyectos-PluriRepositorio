export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  if (marca === "1") {
    incremento = 1.3;
  }
  if (marca === "2") {
    incremento = 1.15;
  }
  if (marca === "3") {
    incremento = 1.05;
  }

  return incremento;
}

export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString("es-EU", {
        style: "currency",
        currency: "EUR"
    })
}