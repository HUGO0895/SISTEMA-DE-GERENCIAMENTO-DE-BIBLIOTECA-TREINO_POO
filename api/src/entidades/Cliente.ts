import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
import { Emprestimo } from "./Emprestimo";

@Entity()
export class Cliente{
    @PrimaryGeneratedColumn()
     id:number;

     @Column()
     nome:string;

     @Column({unique:true})
     email:string

     @Column({unique:true})
     cpf:string

     @Column()
     cep:string

     @OneToMany(()=>Emprestimo,(emprestimo)=>emprestimo.cliente)
     emprestimos:Emprestimo[]

}
