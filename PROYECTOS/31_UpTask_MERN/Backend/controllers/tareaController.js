import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";

const agregartarea = async (req, res) => {
  const { proyecto } = req.body;

  const existeProyecto = await Proyecto.findById(proyecto);

  if (!existeProyecto) {
    const error = new Error(
      "El proyecto al que desea agragar una tarea no existe."
    );
    return res.status(404).json({ msg: error.message });
  }

  if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "No tienes los permisos para añadir tareas porque no eres el creador."
    );
    return res.status(403).json({ msg: error.message });
  }

  try {
    const tareaAlmacenada = await Tarea.create(req.body);
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const obtenerTarea = async (req, res) => {
  const { id } = req.params;

  const tarea = await Tarea.findById(id).populate("proyecto");

  if (!tarea) {
    const error = new Error("Tarea no encontrada.");
    return res.status(404).json({ msg: error.message });
  }

  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida porque no eres el creador de la tarea."
    );
    return res.status(403).json({ msg: error.message });
  }
  res.json(tarea);
};

const actualizarTarea = async (req, res) => {
  const { id } = req.params;

  const tarea = await Tarea.findById(id).populate("proyecto");

  if (!tarea) {
    const error = new Error("Tarea no encontrada.");
    return res.status(404).json({ msg: error.message });
  }

  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida porque no eres el creador de la tarea."
    );
    return res.status(403).json({ msg: error.message });
  }

  tarea.nombre = req.body.nombre || tarea.nombre;
  tarea.descripcion = req.body.descripcion || tarea.descripcion;
  tarea.prioridad = req.body.prioridad || tarea.prioridad;
  tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;
  tarea.estado = req.body.estado || tarea.estado;

  try {
    const tareaAlmacenada = await tarea.save();
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const eliminarTarea = async (req, res) => {
  const { id } = req.params;

  const tarea = await Tarea.findById(id).populate("proyecto");

  if (!tarea) {
    const error = new Error("Tarea no encontrada.");
    return res.status(404).json({ msg: error.message });
  }

  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida porque no eres el creador de la tarea."
    );
    return res.status(403).json({ msg: error.message });
  }
  try {
    await tarea.deleteOne();
    res.json({ msg: "Tarea Eliminada." });
  } catch (error) {
    console.log(error);
  }
};

const cambiarEstado = async (req, res) => {
  const { id } = req.params;
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada.");
    return res.status(404).json({ msg: error.message });
  }
  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida porque no eres el creador de la tarea."
    );
    return res.status(403).json({ msg: error.message });
  }
  try {
    const cambiarEstado = tarea.estado;
    tarea.estado = !cambiarEstado;
    await tarea.save();
    res.json(tarea);
  } catch (error) {
    console.log(error);
  }
};

export {
  agregartarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
};
