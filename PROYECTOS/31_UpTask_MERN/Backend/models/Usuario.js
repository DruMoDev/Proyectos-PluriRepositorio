import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Código para hashear la password antes de que se guarde con bcrypt
usuarioSchema.pre("save", async function (next) {
  // Comprueba que no se haya modificado ya para no hashear algo hasheado ya. Utiliza isModified de moongose.
  if (!this.isModified("password")) {
    next(); //Next es un metodo de express para mandarte al siguiente midleware sin hacer un return.
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Código para comprobar el password | El methods.X crea un metodo para Usuario, que puede utilizar cuando quieras.
usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password); // Compara el password que el usuario escribe con el de la base de datos
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
