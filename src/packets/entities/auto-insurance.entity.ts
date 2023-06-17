import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('auto')
export class AutoInsurancePolicyEntity {
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
}
