import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    // Esto es solo para saber información de conexion y mostrarlo en un clg
    const url = `${connection.connection.host}: ${connection.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;
