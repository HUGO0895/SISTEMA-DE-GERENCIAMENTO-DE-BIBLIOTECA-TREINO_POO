import { Request, Response } from "express";
import { createExemplar } from "../DTO/request/exemplarDTO";
import ExemplarService from "../services/exemplarService";
import { Exemplar } from "../entidades/Exemplar";

export default class ExemController{
    private static ExemServ=new ExemplarService()

    public static async createExem(req:Request,res:Response){
         try{
                const exe:createExemplar=req.body 
                const resposta= await ExemController.ExemServ.create(exe)
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

    public static async deleteExem(req:Request,res:Response){
         try{
            const {id}=req.params 
            const resposta=await ExemController.ExemServ.delete(Number(id))
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

    public static async getExem(req:Request,res:Response){
             try{
                                            const filtros:Partial<Exemplar>=req.query
                                                  const resposta= await ExemController.ExemServ.get(filtros)
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