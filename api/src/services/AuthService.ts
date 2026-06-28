import { FuncRepo } from "../repositories/FuncRepo"
import bcrypt from "bcryptjs"
import JWT from "../config/jwtConfig"
export default class  AuthService{
       public async login(senhaF:string,email:string){
         const user= await FuncRepo.findByEmail(email)
         if (!await bcrypt.compare(senhaF,user.senha)) throw new Error("Login Incorreto")
         const token=JWT.GetToken(user)
         const {senha,...semsenha}=user
           return [semsenha,token]
       } 
       
       public authToken(token:string){
        
         return JWT.VerifyToken(token)
       
       }

}