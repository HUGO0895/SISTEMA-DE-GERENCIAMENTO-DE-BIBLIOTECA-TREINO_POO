import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import Pedido_Exemplar from "./Pedido_Exemplar";

@Entity()

export class Fornecedores{
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nome:string

    @Column()
    estadoSigla:string

    @Column({unique:true})
    cnpj:string

   @OneToMany(()=>Pedido_Exemplar,(pedidos)=>pedidos.funcionario)
   pedidos:Pedido_Exemplar[]
}