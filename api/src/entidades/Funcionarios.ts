import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Emprestimo } from "./Emprestimo";
import Pedido_Exemplar from "./Pedido_Exemplar";

@Entity()
export class Funcionario{
    @PrimaryGeneratedColumn()
    id:number 

    @Column()
    nomeCompleto:string

    @Column({unique:true})
    cpf:string

    @Column()
    cep:string

    @Column({unique:true})
    email:string

    @Column({select:false})
    senha:string

    @OneToMany(()=>Emprestimo,(emprestimo)=>emprestimo.funcionario)
    emprestimos:Emprestimo[]

    @OneToMany(()=>Pedido_Exemplar,(pedido_exemplar)=>pedido_exemplar.funcionario)
    pedidos:Pedido_Exemplar[]
}