import { Request, Response } from "express";
import LivrosService from "../services/LivroService";
import { createLivro, updateLivro } from "../DTO/request/livroDTO";
import { Livros } from "../entidades/Livros";

export default class LivroController{
    private static LivService=new LivrosService()
    public  static async   createLivro(req:Request,res:Response){
        try{
        const livro:createLivro=req.body
        const resposta= await LivroController.LivService.create(livro)
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

    public  static async updateLivro(req:Request,res:Response){
      try{
        const livro:updateLivro=req.body
        const resposta=await LivroController.LivService.update(livro,livro.id)
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

    public static async deleteLivro(req:Request,res:Response){
         try{
        const {id}=req.params
        const resposta=await LivroController.LivService.delete(Number(id))
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

    public static async getLivros(req:Request,res:Response){
        try{
      const filtros:Partial<Livros>=req.query
      const resposta= await LivroController.LivService.get(filtros)
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