import { Request, Response } from "express";
import PedidoService from "../services/pedidoService";
import Pedido_Exemplar from "../entidades/Pedido_Exemplar";
import { createPedido } from "../DTO/request/pedidoDTO";

export default class PedController{
    private static pedServ=new PedidoService()

    public static async createPed(req:Request,res:Response){
        try{
            const ped:createPedido=req.body 
            const resposta= await PedController.pedServ.create(ped)
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
    
        public static  async deletePed(req:Request,res:Response){
           try{
                const {id}=req.params 
                const resposta=await PedController.pedServ.delete(Number(id))
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
    
        public static async getPed(req:Request,res:Response){
                try{
                                                const filtros:Partial<Pedido_Exemplar>=req.query
                                                      const resposta= await PedController.pedServ.get(filtros)
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