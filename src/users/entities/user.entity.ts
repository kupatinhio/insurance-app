import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    email:string

    @Column()
    password: string

    @Column()
    address: string
    
    @Column()
    mobile: number

}
