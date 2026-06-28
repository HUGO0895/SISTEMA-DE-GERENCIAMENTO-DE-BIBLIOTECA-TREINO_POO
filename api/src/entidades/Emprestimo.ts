import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionarios";
import { Exemplar } from "./Exemplar";
enum status{
      ANDAMENTO="ANDAMENTO",
      CONCLUIDO="CONCLUIDO"
}
@Entity()
export class Emprestimo{
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn()
    data_emp:Date

    @ManyToOne(()=>Cliente,(cliente)=>cliente.emprestimos)
    cliente:Cliente


    @Column("date")
    data_devolucao:string

    @UpdateDateColumn({nullable:true})
    data_extensao:Date

    @ManyToOne(()=>Funcionario,(funcionario)=>funcionario.emprestimos)
    funcionario:Funcionario
    
    @ManyToOne(()=>Exemplar,(exemplar)=>exemplar.emprestimos)
    exemplar:Exemplar

    @Column({default:status.ANDAMENTO})
    status:status
    
}