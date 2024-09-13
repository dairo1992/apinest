import { Persona } from 'src/personas/entities/persona.entity';
import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @Column({ primary: true, generated: true, unique: true })
  ID: number;

  @Column({ unique: true })
  VALUE: number;

  @Column()
  LABEL: string;

  @Column({ default: 'A' })
  ESTADO: string;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToMany(() => Persona, (persona) => persona.ROL)
  personas: Persona[];
}
