export  interface createFunc{
    nomeCompleto:string 
    cpf:string 
    cep:string 
    email:string
    senha:string
}

export interface updateFunc{
    id:number 
    nomeCompleto?:string 
    cep:string 
    email:string 
    senha:string 


}