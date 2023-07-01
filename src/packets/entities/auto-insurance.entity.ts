import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('auto')
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: number;

  @Column()
  coverageDetails: string;

  @Column()
  vehicleInformation: string;

  @Column()
  startDate: number;

  @Column()
  endDate: number;

  @ManyToMany(() => UserEntity, user => user.packages )
  user: UserEntity
}
