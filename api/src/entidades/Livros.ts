import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Exemplar } from "./Exemplar";
import Pedido_Exemplar from "./Pedido_Exemplar";

@Entity()
export class Livros{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    titulo:string

    @Column()
    autor:string 

    @Column()
    editora:string

    @OneToMany(()=>Exemplar,(exemplar)=>exemplar.livro)
    exemplares:Exemplar[]

    @OneToMany(()=>Pedido_Exemplar,(pedido)=>pedido.livro)
    pedidos:Pedido_Exemplar[]
}