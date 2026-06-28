import { empCreate } from "../DTO/request/empDTO";
import { Emprestimo } from "../entidades/Emprestimo";
import GenericService from "./genericService";
import { EmpRepo } from "../repositories/EmpRepo";

export default class EmpService extends GenericService<empCreate,Emprestimo,undefined>{
    constructor(){
        super(EmpRepo)
    }
}