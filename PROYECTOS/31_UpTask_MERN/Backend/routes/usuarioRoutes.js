import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Autenticación, Registro y Configuración de Usuarios
router.post("/", registrar); // Crea un nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar); // Los ":" generan un routing dinamico con express
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); //.route para multiples rutas con el mismo url pero diferente método.
router.get("/perfil", checkAuth, perfil);

export default router;
