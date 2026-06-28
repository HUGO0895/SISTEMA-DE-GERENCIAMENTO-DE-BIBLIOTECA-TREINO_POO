import { AppDataSource } from "../data_conect";
import { Fornecedores } from "../entidades/Fornecedores";

export const FornecedoresRepo=AppDataSource.getRepository(Fornecedores).extend({
    async findByCnpj(cnpj:string){
        return await this.find({where:cnpj})
    },
    async findByName(name:string){
        return await  this.find({where:name})
    }
})