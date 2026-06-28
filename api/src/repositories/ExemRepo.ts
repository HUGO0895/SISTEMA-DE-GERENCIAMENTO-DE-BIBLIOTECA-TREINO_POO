import { AppDataSource } from "../data_conect";
import { Exemplar } from "../entidades/Exemplar";

export const ExemRepo=AppDataSource.getRepository(Exemplar).extend({
    
    async findByLivro(LivroId:number){
      return await this.find({where:{livro:{id:LivroId}},relations:{livro:true}})

    }

})