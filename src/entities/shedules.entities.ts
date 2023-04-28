import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { RealEstate } from "./realEstate.entities";
import { User } from "./users.entities";

@Entity("shedules_users_properties")
export class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string | Date;

  @Column({ type: "time" })
  hour: string | Timestamp;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.shedules)
  realEstate: RealEstate;
}
