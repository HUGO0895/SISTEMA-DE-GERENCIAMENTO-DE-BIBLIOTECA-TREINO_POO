import { createPedido } from "../DTO/request/pedidoDTO";
import Pedido_Exemplar from "../entidades/Pedido_Exemplar";
import { PedRepo } from "../repositories/PedRepo";
import GenericService from "./genericService";

export default class PedidoService extends GenericService<createPedido,Pedido_Exemplar,undefined>{
    constructor(){
        super(PedRepo)
    }
}