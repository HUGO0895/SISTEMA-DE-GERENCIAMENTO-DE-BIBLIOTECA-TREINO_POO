import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Livros } from "./Livros";
import { Emprestimo } from "./Emprestimo";
import Pedido_Exemplar from "./Pedido_Exemplar";

@Entity()
export class Exemplar{
    @PrimaryGeneratedColumn()
    id:number 

    @ManyToOne(()=>Livros,(livros)=>livros.exemplares,{ nullable: false,eager: true })
    livro:Livros
    
    @OneToOne(()=>Pedido_Exemplar,(Pedido_Exemplar)=>Pedido_Exemplar.exemplar)
    @JoinColumn()
    pedido:Pedido_Exemplar

    @OneToMany(()=>Emprestimo,(emprestimos)=>emprestimos.exemplar,{ nullable: false })
    emprestimos:Emprestimo[]

}