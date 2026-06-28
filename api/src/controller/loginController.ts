import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export default  class LoginController{
        private static AuthServ=new AuthService()

        public static async Login(req:Request,res:Response){
            try{
            const {senha,email}=req.body
             const resposta= await LoginController.AuthServ.login(senha,email)
             return res.status(200).json({
                status:"sucess",
                resposta
             })
            }catch(erro){
                 return res.status(200).json({
                status:"sucess",
                resposta:erro.message
             })
            }
        }

        public static Authentic(req:Request,res:Response){
            try{
           const {token}=req.body
           if(LoginController.AuthServ.authToken(token))
           return res.status(200).json({
            status:"sucess",
            resposta:"Token Valido"
           })
            }catch(erro){
                return res.status(200).json({
            status:"error",
            resposta:erro.message
           })
            }
        }


}