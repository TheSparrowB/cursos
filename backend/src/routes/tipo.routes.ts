import { TipoController } from "../api/controller/tipo.controller";

const express = require("express");

const router = express.Router();
const tipoController = new TipoController();


router.get("/listar", tipoController.listarTipo);
router.post("/obtener", tipoController.obtenerTipo);
router.post("/buscar", tipoController.buscarTipo);

router.post("/registrar", tipoController.registrarTipo);
router.post("/actualizar", tipoController.actualizarTipo);
router.post("/eliminar", tipoController.eliminarTipo);


export { router };