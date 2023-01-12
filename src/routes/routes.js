const express = require("express");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const {
  getRopaController,
  getRopaByIdController,
  addRopaController,
  updateRopaController,
  deleteRopaController,
} = require("../controllers/RopaController");
const getImageRopaMiddleware = require("../utils/middlewares/getImagenRopaMiddleware");

const router = express.Router();

router.get("/Ropa", getRopaController);
router.get("/Ropa/:id", getRopaByIdController);

router.post(
  "/Ropa",
  body("nombre")
    .isLength({ min: 5, max: 10 })
    .withMessage("El nombre debe poseer entre 5 y 10 letras"),
  body("Talle")
    .isLength({ min: 1, max: 10 })
    .withMessage("El Talle debe poseer entre 1 y 10 letras"),
  body("Tela")
    .isLength({ min: 5, max: 10 })
    .withMessage("El nombre Tela debe poseer entre 5 y 10 letras"),
  validator,
  getImageRopaMiddleware,
  addRopaController
);

router.put(
  "/Ropa/:id",
  body("nombre")
    .isLength({ min: 5, max: 10 })
    .withMessage("El nombre debe poseer entre 5 y 10 letras"),
  body("Talle")
    .isLength({ min: 1, max: 10 })
    .withMessage("El Talle debe poseer entre 1 y 10 letras"),
  body("Tela")
    .isLength({ min: 5, max: 10 })
    .withMessage("El nombre Tela debe poseer entre 5 y 10 letras"),
  validator,
  updateRopaController
);
router.delete("/Ropa/:id", deleteRopaController);
module.exports = router;
