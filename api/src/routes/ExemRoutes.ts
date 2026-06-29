import { Router } from "express";
import ExemController from "../controller/exemController";

const route=Router()

route.post("/exemplar",ExemController.createExem)
route.delete("/exemplar/:id",ExemController.deleteExem)
route.get("/exemplar",ExemController.getExem)

export default route