import { Router } from "express";
import LoginController from "../controller/loginController";

const route=Router()

route.post("/login",LoginController.Login)
route.post("/auth",LoginController.Authentic)

export default route