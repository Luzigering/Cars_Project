import express from "express";
import MontadorasController from "../controllers/montadorasController.js";
const router = express.Router();
router
.get("/montadoras", MontadorasController.listarMontadoras)
.post("/montadoras", MontadorasController.cadastrarMontadora)
.put("/montadoras/:id", MontadorasController.atualizarMontadora)
.delete("/montadoras/:id", MontadorasController.excluirMontadora)
export default router;