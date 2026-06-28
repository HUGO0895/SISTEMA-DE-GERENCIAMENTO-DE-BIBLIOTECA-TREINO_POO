import { Router } from "express";
import EmpController from "../controller/empController";

const route=Router()

route.post("/emprestimo",EmpController.createEmp)
route.delete("/emprestimo/:id",EmpController.deleteEmp)
route.get("/emprestimo",EmpController.getEmp)

export default route