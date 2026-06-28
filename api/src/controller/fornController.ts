import { Request, Response } from "express";
import FornService from "../services/fornService";
import { forneCreate } from "../DTO/request/fornDTO";
import { Fornecedores } from "../entidades/Fornecedores";

export default class FornController{
    private static FornServ=new FornService()

    public static async createForn(req:Request,res:Response){
           try{
                          const forne:forneCreate=req.body
                          const resposta=await FornController.FornServ.create(forne)
                           return res.status(200).json({
                                 status:"sucess",
                                 resposta
                              })
                         }catch(erro){
                            return res.status(200).json({
                                 status:"error",
                                 resposta:erro.message
                              })
                         }
          
    }

   public static async deleteForn(req:Request,res:Response){
           try{
            const {id}=req.params 
            const resposta=await FornController.FornServ.delete(Number(id))
              return res.status(200).json({
                status:"sucess",
                resposta
             })
        }catch(erro){
            return res.status(200).json({
                status:"error",
                resposta:erro.message
             })
        }
   }

   public static async getForn(req:Request,res:Response){
             try{
                                 const filtros:Partial<Fornecedores>=req.query
                                       const resposta= await FornController.FornServ.get(filtros)
                                       return res.status(200).json({
                                             status:"sucess",
                                             resposta
                                         })
                             }catch(erro){
                                  return res.status(200).json({
                                     status:"error",
                                     resposta:erro.message
                                  })
                             }
   }
}