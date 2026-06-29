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

    @ManyToOne(()=>Cliente,(cliente)=>cliente.emprestimos,{ nullable: false,eager: true })
    cliente:Cliente


    @Column("date")
    data_devolucao:string


    @ManyToOne(()=>Funcionario,(funcionario)=>funcionario.emprestimos,{ nullable: false,eager: true })
    funcionario:Funcionario
    
    @ManyToOne(()=>Exemplar,(exemplar)=>exemplar.emprestimos,{ nullable: false,eager: true })
    exemplar:Exemplar

    @Column({default:status.ANDAMENTO})
    status:status
    
}