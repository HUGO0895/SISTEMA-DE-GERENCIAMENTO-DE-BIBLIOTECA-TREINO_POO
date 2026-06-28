import { AppDataSource } from "../data_conect";
import { Cliente } from "../entidades/Cliente";

export const ClienteRepo=AppDataSource.getRepository(Cliente).extend({
    async findByEmail(email:string){
       return await  this.findOne({where:{email},
      select:{
         id:true,
         nome:true,
         email:true,
         cep:true,
         cpf:true
      }})
    },

     async findByCpf(cpf:string){
       return await  this.findOne({where:{cpf},
      select:{
         id:true,
         nome:true,
         email:true,
         cep:true,
         cpf:true
      }})
    }
})