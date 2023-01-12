const { model, Schema } = require("mongoose");

const RopaSchema = new Schema({
  id: {
    type: Number,
    required: [true, "el id es requerido"],
    unique: true,
  },

  nombre: {
    type: String,
    required: [true, "el nombre es requerido"],
    unique: false,
  },

  Talle: {
    type: String,
    required: [true, "la Talle es requerido"],
    unique: false,
  },

  Tela: {
    type: String,
    required: [true, "el Tela es requerido"],
    unique: false,
  },

  genero: {
    type: Number,
    required: [true, "el año es requerido"],
    unique: false,
  },

  imagen: {
    type: String,
    required: [true, "el modelo es requerido"],
    unique: false,
  },

  articulo: {
    type: Date,
    required: false,
    unique: false,
  },
});

const RopaModel = model("Ropa", RopaSchema);

module.exports = RopaModel;
