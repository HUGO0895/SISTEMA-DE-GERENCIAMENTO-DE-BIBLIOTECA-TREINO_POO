import { Request, Response } from "express";
import ClienteService from "../services/CliService";
import { createCliente, updateCliente } from "../DTO/request/clienteDTO";
import { Cliente } from "../entidades/Cliente";

export default class ClienteController{
     private static CliServ=new ClienteService()

     public static async createCli(req:Request,res:Response){
        try{
                const cli:createCliente=req.body
                const resposta=await ClienteController.CliServ.create(cli)
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
     public static async updateCli(req:Request,res:Response){
            try{
                const cli:updateCliente=req.body
                const resposta=await ClienteController.CliServ.update(cli,cli.id)
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

     public static async deleteCli(req:Request,res:Response){
         try{
            const {id}=req.params 
            const resposta=await ClienteController.CliServ.delete(Number(id))
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

     public static async getCli(req:Request,res:Response){
           try{
                       const filtros:Partial<Cliente>=req.query
                             const resposta= await ClienteController.CliServ.get(filtros)
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
