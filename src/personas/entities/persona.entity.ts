// import { Cliente } from 'src/clientes/entities/cliente.entity';
// import { Role } from 'src/roles/entities/role.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  //   OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  ID: number;

//   @Column()
//   CONJUNTO: number;

  @Column()
  TIPO_DOCUMENTO: string;

  @Column()
  DOCUMENTO: number;

  @Column()
  NOMBRE: string;

  @Column()
  TORRE: number;

  @Column()
  APTO: number;

//   @Column()
//   ROL: number;

  @Column()
  TELEFONO: number;

  @Column()
  CORREO: string;

  @Column()
  TIPO_VEHICULO: string;

  @Column()
  PLACA: string;

  @Column({ default: 'A' })
  ESTADO: string;

  @UpdateDateColumn()
  FECHA_REGISTRO: Date;

  @UpdateDateColumn()
  FECHA_ACTUALIZACION: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @ManyToOne(() => Role, (rol) => rol.VALUE, { eager: true })
  ROL: Role;

  @ManyToOne(() => Cliente, (cliente) => cliente.ID, { eager: true })
  CONJUNTO: Cliente;
}
