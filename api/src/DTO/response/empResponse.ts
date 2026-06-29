import ClienteResponse from "./clienteResponse"
import exemplarReponse from "./exemplarResponse"
import { FuncResponse } from "./funcResponse"

export interface empResponse{
    id:number
    data_emp:Date
    data_devolucao:string 
    status:string
    cliente:ClienteResponse
    funcionario:FuncResponse
    exemplar:exemplarReponse
}