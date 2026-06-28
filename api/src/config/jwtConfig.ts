import jwt from "jsonwebtoken";
import { Funcionario } from "../entidades/Funcionarios";
import * as dotenv from "dotenv";
import path = require("node:path");
dotenv.config({path:path.resolve(__dirname,"..","..",".env")});
export default class JWT{
    public static GetToken(user:Funcionario){
        return  jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})
    }

    public static VerifyToken(token:string){
        return jwt.verify(token,process.env.JWT_SECRET)
    }
}