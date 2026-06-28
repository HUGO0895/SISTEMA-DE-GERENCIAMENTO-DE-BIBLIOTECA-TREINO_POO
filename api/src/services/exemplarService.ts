import { createExemplar } from "../DTO/request/exemplarDTO";
import { Exemplar } from "../entidades/Exemplar";
import { ExemRepo } from "../repositories/ExemRepo";
import GenericService from "./genericService";

export default class ExemplarService extends GenericService<createExemplar,Exemplar,undefined>{
           constructor(){
            super(ExemRepo)
           }
}