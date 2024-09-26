import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FuelTickets {
  @PrimaryGeneratedColumn()
  fuelTicketId: number;
  @Column()
  amount: number;
  @Column()
  sequential: number;
  @Column()
  barcode: string;
  @Column()
  deliveryMonth: number;
  @Column()
  expirationDate: Date;
  @Column()
  status: number;
  @Column()
  employeeNumber: number;
  @Column()
  registerDate: Date;
}
