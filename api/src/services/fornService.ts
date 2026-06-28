import { forneCreate } from "../DTO/request/fornDTO";
import { Fornecedores } from "../entidades/Fornecedores";
import { FornecedoresRepo } from "../repositories/FornecedoresRepo";
import GenericService from "./genericService";

export default class FornService extends GenericService<forneCreate,Fornecedores,undefined>{
    constructor(){
        super(FornecedoresRepo)
    }
}