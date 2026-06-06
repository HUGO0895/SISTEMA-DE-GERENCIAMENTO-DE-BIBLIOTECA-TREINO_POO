import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

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

    
}