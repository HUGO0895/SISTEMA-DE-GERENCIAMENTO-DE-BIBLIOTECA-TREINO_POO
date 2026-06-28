import { Router } from "express";
import FuncController from "../controller/funcController";

const route=Router()

route.post("/funcionario",FuncController.createFunc)
route.put("/funcionario",FuncController.updateFunc)
route.delete("/funcionario/:id",FuncController.deleteFunc)
route.get("/funcionario",FuncController.getFunc)

export default route