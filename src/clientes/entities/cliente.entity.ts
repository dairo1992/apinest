import { Persona } from 'src/personas/entities/persona.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente {
  @Column({ primary: true, generated: true, unique: true })
  ID: number;

  @Column()
  NOMBRE: string;

  @Column()
  ROUTE: string;

  @Column()
  IMAGE: string;

  @Column()
  COLOR: string;

  @Column()
  CANT_TORRES: number;

  @Column({ default: 'A' })
  ESTADO: string;

  @UpdateDateColumn()
  FECHA_CREACION: Date;

  @UpdateDateColumn()
  ULTIMA_ACTUALIZACION: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Persona, (persona) => persona.CONJUNTO)
  personas: Persona[];
}
