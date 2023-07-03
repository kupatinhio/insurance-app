import { UserEntity } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { InsuranceTypeEnum } from '../enums/insurance.type.enum';

@Entity('insurance')
export class InsuranceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('enum', { enum: InsuranceTypeEnum, default: InsuranceTypeEnum.HELTH })
  public type: InsuranceTypeEnum;

  @Column('varchar', { length: 255, nullable: false })
  public policyNumber: number;

  @Column()
  public coverageDetails: string;

  @Column()
  public vehicleInformation: string;

  @Column()
  public startDate: number;

  @Column()
  public endDate: number;

  @ManyToMany(() => UserEntity, user => user.packages )
  public user: UserEntity
}
