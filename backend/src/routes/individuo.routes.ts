import { IndividuoController } from "../api/controller/individuo.controller";

const express = require("express");

const router = express.Router();
const individuoController = new IndividuoController();


router.post("/buscar", individuoController.buscarIndividuo);


export { router };