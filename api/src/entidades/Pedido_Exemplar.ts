import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, ManyToOne, OneToOne} from "typeorm";
import { Livros } from "./Livros";
import { Funcionario } from "./Funcionarios";
import { Fornecedores } from "./Fornecedores";
import { Exemplar } from "./Exemplar";
enum status{
    ENTREGUE="ENTREGUE",
    ANDAMENTO="ANDAMENTO"
}
@Entity()

export default  class Pedido_Exemplar{
    @PrimaryGeneratedColumn()
    id:number 

    @Column({default:status.ANDAMENTO})
    status:status

    @OneToOne(()=>Exemplar,(Exemplar)=>Exemplar.pedido)
    exemplar:Exemplar | null

    @CreateDateColumn()
    emissaoPedido:Date

    @ManyToOne(()=>Livros,(livros)=>livros.pedidos)
    livro:Livros

    @ManyToOne(()=>Funcionario,(funcionarii)=>funcionarii.pedidos)
    funcionario:Funcionario

    @ManyToOne(()=>Fornecedores,(Fornecedores)=>Fornecedores.pedidos)
    fornecedor:Fornecedores

    @Column("date",{nullable:true})
    dataEntrega:string
}