const axios = require("axios");

const getImagenRopaMiddleware = async (req, res, next) => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    if (!data)
      return res.status(400).json({
        message:
          "No se pudo obtener la imagen desde el servidor https://fakestoreapi.com",
      });
    if (data.status === "success") {
      req.imagen = data.message;
      return next();
    } else {
      return res.status(400).json({
        message:
          "No se pudo obtener la imagen desde el servidor https://fakestoreapi.com",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: `No se pudo obtener la imagen desde el servidor https://fakestoreapi.com - ${error}`,
    });
  }
};

module.exports = getImagenRopaMiddleware;
