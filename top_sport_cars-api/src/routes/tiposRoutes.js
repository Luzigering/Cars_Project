import express from "express";
import TiposController from "../controllers/tiposController.js";
const router = express.Router();
router
.get("/tipos", TiposController.listarTipos)
.post("/tipos", TiposController.cadastrarTipo)
.put("/tipos/:id", TiposController.atualizarTipo)
.delete("/tipos/:id", TiposController.excluirTipo)
export default router;