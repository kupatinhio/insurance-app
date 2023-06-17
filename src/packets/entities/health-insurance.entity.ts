import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

@Entity('health')
export class HealthInsurancePolicy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: number;

  @Column()
  coverageLimits: string;

  @Column()
  startDate: number;

  @Column()
  endDate: number;

  
}
