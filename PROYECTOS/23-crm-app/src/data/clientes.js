export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultado = await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultado = await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE"
      
    });
    const resultado = await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}