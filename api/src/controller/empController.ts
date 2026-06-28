import { Request, Response } from "express";
import EmpService from "../services/empService";
import { empCreate } from "../DTO/request/empDTO";
import { Emprestimo } from "../entidades/Emprestimo";

export default class EmpController{
    private static empServ=new EmpService()

    public static async createEmp(req:Request,res:Response){
    try{
        const emp:empCreate=req.body 
        const resposta= await EmpController.empServ.create(emp)
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

    public static  async deleteEmp(req:Request,res:Response){
       try{
            const {id}=req.params 
            const resposta=await EmpController.empServ.delete(Number(id))
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

    public static async getEmp(req:Request,res:Response){
            try{
                                            const filtros:Partial<Emprestimo>=req.query
                                                  const resposta= await EmpController.empServ.get(filtros)
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