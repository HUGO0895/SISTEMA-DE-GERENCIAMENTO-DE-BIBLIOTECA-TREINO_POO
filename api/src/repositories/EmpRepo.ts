import { AppDataSource } from "../data_conect";
import { Emprestimo } from "../entidades/Emprestimo";
import { Exemplar } from "../entidades/Exemplar";

export const EmpRepo=AppDataSource.getRepository(Emprestimo).extend({
   async empExemplar(idExemplar:number){
      return await this.find({where:{exemplar:idExemplar}})
   },
   async empLivro(idLivro:number){
      return await  this.find({where:{
        exemplar:{
            livro:{id:idLivro}
        }
    },
    relations:{
        exemplar:{
            livro:true
        },
        cliente:true,
        funcionario:true
    }
    })
   }
})
