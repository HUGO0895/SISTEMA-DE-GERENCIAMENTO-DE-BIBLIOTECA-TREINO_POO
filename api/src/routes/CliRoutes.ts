import { Router } from "express";
import ClienteController from "../controller/cliController";

const route=Router()
route.post("/cliente",ClienteController.createCli)
route.put("/cliente",ClienteController.updateCli)
route.delete("/cliente/:id",ClienteController.deleteCli)
route.get("/cliente",ClienteController.getCli)

export default route