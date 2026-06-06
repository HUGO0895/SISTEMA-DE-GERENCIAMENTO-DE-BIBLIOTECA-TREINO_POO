import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

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


}
