const {
  getRopaService,
  getRopaByIdService,
  getRopaByNombreService,
  getRopaByTalleService,
  getRopaByTelaService,
  addRopaService,
  updateRopaService,
  deleteRopaService,
} = require("../services/RopaService");

const getRopaController = async (req, res) => {
  try {
    const { nombre, Talle, Tela } = req.query;
    if (nombre) {
      const Ropas = await getRopaByNombreService(nombre);
      if (Ropas.length > 0) {
        res.status(200).json(Ropas);
        return;
      }
      res.status(200).json({ message: "No se encontro Ropa con ese nombre" });
      return;
    }
    if (Talle) {
      const Ropas = await getRopaByTalleService(Talle);
      if (Ropas.length > 0) {
        res.status(200).json(Ropas);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron Ropas con esa Talle" });
      return;
    }
    if (Tela) {
      const Ropas = await getRopaByTelaService(Tela);
      if (Ropas.length > 0) {
        res.status(200).json(Ropas);
        return;
      }
      res.status(200).json({ message: "No se encontraron Ropas con ese Tela" });
      return;
    }

    const Ropas = await getRopaService();
    res.status(200).json(Ropas);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getRopaByIdController = async (req, res) => {
  try {
    const Ropa = await getRopaByIdService(req);
    if (Ropa) {
      res.status(200).json(Ropa);
      return;
    }
    res.status(200).json({ message: "Id de Ropa no encontrada" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addRopaController = async (req, res) => {
  try {
    const response = await addRopaService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateRopaController = async (req, res) => {
  try {
    const respuestaUpdate = await updateRopaService(req);
    res.status(200).json({ message: respuestaUpdate });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteRopaController = async (req, res) => {
  try {
    const response = await deleteRopaService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};
module.exports = {
  getRopaController,
  getRopaByIdController,
  addRopaController,
  updateRopaController,
  deleteRopaController,
};
