import { Router } from "express";
import PedController from "../controller/pedController";

const route=Router()

route.post("/pedido",PedController.createPed)
route.delete("/pedido/:id",PedController.deletePed)
route.get("/pedido",PedController.getPed)

export default route