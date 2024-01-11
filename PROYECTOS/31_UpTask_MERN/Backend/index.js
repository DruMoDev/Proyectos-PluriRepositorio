import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRouter from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Routing
app.use("/api/usuarios", usuarioRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
