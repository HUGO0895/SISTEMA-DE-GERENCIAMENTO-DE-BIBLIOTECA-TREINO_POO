import { Request, Response } from "express";
import { FuncRepo } from "../repositories/FuncRepo";
import FuncService from "../services/funcService";
import { createFunc, updateFunc } from "../DTO/request/funcDTO";
import { Funcionario } from "../entidades/Funcionarios";

export  default class FuncController{
    private static funServ=new FuncService(FuncRepo)

    public static async createFunc(req:Request,res:Response){
        try{
         const func:createFunc=req.body
         const resposta=await FuncController.funServ.create(func)
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

    public static  async updateFunc(req:Request,res:Response){
        try{
         const func:updateFunc=req.body
         const resposta=await FuncController.funServ.update(func,func.id)
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

    public static async deleteFunc(req:Request,res:Response){
        try{
            const {id}=req.params 
            const resposta=await FuncController.funServ.delete(Number(id))
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

    public static async getFunc(req:Request,res:Response){
        try{
            const filtros:Partial<Funcionario>=req.query
                  const resposta= await FuncController.funServ.get(filtros)
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