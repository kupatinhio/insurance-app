import { InsuranceEntity } from "src/packages/entities/insurance.entity";
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

    @ManyToMany(() => InsuranceEntity, packages => packages.user)
    @JoinTable({
        name: 'user_packagessss'
    })
    packages: InsuranceEntity[];

}
