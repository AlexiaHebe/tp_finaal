const RopaModel = require("../models/RopaModel");

const getRopaService = async () => {
  const Ropas = await RopaModel.find();
  return Ropas;
};

const getRopaByIdService = async (req) => {
  const id = req.params.id;
  const Ropa = await RopaModel.findOne({ id });
  return Ropa;
};

const getRopaByTalleService = async (Talle) => {
  const Ropas = await RopaModel.find({ Talle });
  return Ropas;
};

const getRopaByNombreService = async (nombre) => {
  const Ropas = await RopaModel.find({ nombre });
  return Ropas;
};

const getRopaByTelaService = async (Tela) => {
  const Ropas = await RopaModel.find({ Tela });
  return Ropas;
};

const addRopaService = async (req) => {
  const Ropa = req.body;
  Ropa.imagen = req.imagen;
  const newRopa = new RopaModel(Ropa);
  await newRopa.save();
  return `Se agregó la Ropa ${Ropa.nombre}`;
};

const updateRopaService = async (req) => {
  const { id } = req.params;
  const newValsRopa = req.body;

  const Ropa = await RopaModel.findOne({ id });
  if (Ropa == null) return "Ropa no se encuentra";

  Ropa.Talle = newValsRopa.Talle;
  Ropa.nombre = newValsRopa.nombre;
  Ropa.Tela = newValsRopa.Tela;
  Ropa.genero = newValsRopa.genero;
  Ropa.imagen = newValsRopa.imagen;
  Ropa.articulo = newValsRopa.articulo;

  await Ropa.save();

  return `se modificaron los datos de la Ropa id= ${Ropa.id}`;
};

const deleteRopaService = async (req) => {
  const id = req.params.id;
  const reponse = await RopaModel.deleteOne({ id });
  if (reponse.deletedCount == 0) throw new Error("No se encontró Ropa");
  return `Se elimino la Ropa id= ${id}`;
};

module.exports = {
  getRopaService,
  getRopaByIdService,
  getRopaByNombreService,
  getRopaByTalleService,
  getRopaByTelaService,
  updateRopaService,
  deleteRopaService,
  addRopaService,
};
