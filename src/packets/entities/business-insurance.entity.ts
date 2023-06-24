import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('business')
export class BusinessInsurancePolicyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: number;

  @Column()
  coverageDetails: string;

  @Column()
  businessInformation: string;

  @Column()
  startDate: number;

  @Column()
  endDate: number;
}
