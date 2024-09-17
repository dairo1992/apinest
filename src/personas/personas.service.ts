import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personasRepository: Repository<Persona>,

    @InjectRepository(Role)
    private rolRepository: Repository<Role>,

    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto) {
    try {
      const ROL = await this.rolRepository.findOneBy({
        VALUE: createPersonaDto.ROL,
      });
      const CONJUNTO = await this.clienteRepository.findOneBy({
        ID: createPersonaDto.CONJUNTO,
      });

      if (!ROL) {
        throw new BadRequestException(`ESTE ROL NO EXISTE`);
      }

      if (!CONJUNTO && createPersonaDto.CONJUNTO != 0) {
        throw new BadRequestException(`ESTE CONJUNTO NO EXISTE`);
      }

      return await this.personasRepository.save({
        ...createPersonaDto,
        ROL,
        CONJUNTO,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    return await this.personasRepository.find();
  }

  async findOne(id: number) {
    return this.personasRepository.findOneBy({ ID: id });
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const ROL = await this.rolRepository.findOneBy({
      VALUE: updatePersonaDto.ROL,
    });
    const CONJUNTO = await this.clienteRepository.findOneBy({
      ID: updatePersonaDto.CONJUNTO,
    });

    if (!ROL) {
      console.log(ROL);
      throw new BadRequestException(`ESTE ROL NO EXISTE`);
    }

    if (!CONJUNTO && updatePersonaDto.CONJUNTO != 0) {
      console.log(CONJUNTO);
      throw new BadRequestException(`ESTE CONJUNTO NO EXISTE`);
    }
    return await this.personasRepository.update(id, {
      ...updatePersonaDto,
      ROL,
      CONJUNTO,
    });
    return;
  }

  async remove(id: number) {
    return await this.personasRepository.softDelete({ ID: id }); //no elimina el registro, solo actualizo campo deleteAt y lo omite en el findAll
  }

  async findOneByDoc(USUARIO: number) {
    return await this.personasRepository.findOneBy({ DOCUMENTO: USUARIO });
  }
}
