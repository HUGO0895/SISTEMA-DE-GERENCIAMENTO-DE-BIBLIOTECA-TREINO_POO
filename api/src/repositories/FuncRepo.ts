import { AppDataSource } from "../data_conect";
import { Funcionario } from "../entidades/Funcionarios";

export  const FuncRepo=AppDataSource.getRepository(Funcionario).extend({
    async findByEmail(email:string):Promise<Funcionario>{
       return await this.createQueryBuilder("func")
       .select(["func.email","func.senha","func.id","func.cpf","func.cep","func.nomeCompleto"])
       .where("func.email= :email",{email:email})
       .getOne()
    }
})
