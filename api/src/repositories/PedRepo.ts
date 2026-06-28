import { AppDataSource } from "../data_conect";
import Pedido_Exemplar from "../entidades/Pedido_Exemplar";


export const PedRepo=AppDataSource.getRepository(Pedido_Exemplar).extend({
    async pedLivro(id_livro:number){
      return await  this.find({
        where:{
            livro:{id:id_livro}
        },
        relations:{
            fornecedor:true,
            funcionario:true
        }
      })
    }
})