import express from "express";
import CarController from "../controllers/carsController.js";
const router = express.Router();
router
.get("/cars", CarController.listarCars)
.get("/cars/busca", CarController.listarCarsPorTipo) /*
Para efetuar essa consulta, deve inserir um ? depois de busca
seguido de editora=seuparamdeconsulta*/
.get("/cars/:id", CarController.listarCarsPorId)
.post("/cars", CarController.cadastrarCar)
.put("/cars/:id", CarController.atualizarCar)
.delete("/cars/:id", CarController.excluirCar)
export default router;