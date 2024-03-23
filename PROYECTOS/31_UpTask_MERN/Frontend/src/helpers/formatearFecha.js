export default function formatearFecha(fechaString) {
  const fecha = new Date(fechaString);
  const opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
  return fecha.toLocaleDateString("es-ES", opciones);
}

// Ejemplo de uso
// const fechaFormateada = formatearFecha("2024-03-20T08:50:22.562Z");
// console.log(fechaFormateada); // Output: "20/03/2024"
