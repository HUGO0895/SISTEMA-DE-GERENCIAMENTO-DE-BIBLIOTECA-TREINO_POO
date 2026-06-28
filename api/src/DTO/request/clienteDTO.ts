export interface createCliente{
       nome:string 
       email:string 
       cpf:string
       cep:string
}

export interface updateCliente{
       id:number
       email?:string
       cep?:string
}