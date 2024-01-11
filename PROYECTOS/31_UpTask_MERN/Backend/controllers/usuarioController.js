import generarId from "../helpers/generarId.js";
import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
  // Evitar Registros Duplicados
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email: email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe.");
    return res.status(404).json({ msg: error.message });
  }

  // Comprobar si esta registrado
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido confirmada.");
    return res.status(403).json({ msg: error.message });
  }

  // Comprobar su password
};

export { registrar, autenticar };
