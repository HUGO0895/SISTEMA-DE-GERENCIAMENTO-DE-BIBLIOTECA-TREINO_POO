import { createFunc,updateFunc } from "../DTO/request/funcDTO";
import GenericService from "./genericService";
import { Funcionario } from "../entidades/Funcionarios";
import bcrypt from "bcryptjs";
import { DeepPartial, Repository } from "typeorm";

export default class FuncService extends GenericService<createFunc,Funcionario,updateFunc>{
    constructor(private FunRepo:Repository<Funcionario>){
        super(FunRepo)
    }
     public async  create(elemento:createFunc){
            elemento.senha=await bcrypt.hash(elemento.senha,10)
            const elementoSave=this.FunRepo.create(elemento as DeepPartial<Funcionario>)
            return await this.FunRepo.save(elementoSave)

          }
}