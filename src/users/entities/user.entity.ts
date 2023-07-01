import { Package } from "src/packets/entities/auto-insurance.entity";
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

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

    @ManyToMany(() => Package, packages => packages.user)
    @JoinTable({
        name: 'user_packagessss'
    })
    packages: Package[];

}
