import { DeepPartial } from "typeorm";
import { createCliente, updateCliente } from "../DTO/request/clienteDTO";
import { Cliente } from "../entidades/Cliente";
import { ClienteRepo } from "../repositories/CliRepo";
import GenericService from "./genericService";

export default class ClienteService extends GenericService<createCliente,Cliente,updateCliente>{
    constructor(){
        super(ClienteRepo)
    }
    
}
