import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()

export class Fornecedores{
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    nome:string

    @Column()
    estadoSigla:string

    @Column({unique:true})
    endereco:string


}