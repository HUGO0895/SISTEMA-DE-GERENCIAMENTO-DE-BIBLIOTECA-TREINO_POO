import { Router } from "express";
import FornController from "../controller/fornController";

const route=Router()

route.post("/fornecedor",FornController.createForn)
route.delete("/fornecedor/:id",FornController.deleteForn)
route.get("/fornecedor",FornController.getForn)

export default route