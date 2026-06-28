import { AppDataSource } from "../data_conect";
import { Livros } from "../entidades/Livros";

export const LivRepo=AppDataSource.getRepository(Livros).extend({
    async findByFilter(filtros:Partial<Livros>){
       return await this.find({where:filtros})
    }
    
})