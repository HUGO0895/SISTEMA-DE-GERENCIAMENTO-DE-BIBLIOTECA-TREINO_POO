import { fornResponse } from "./fornResponse"
import { FuncResponse } from "./funcResponse"
import LivroResponse from "./livroResponse"

export interface pedidoResponse{
    id:number 
    status:string 
    emissaoPedido:Date 
    livro:LivroResponse
    funcionario:FuncResponse
    fornecedor:fornResponse
    data_entrega:string
}