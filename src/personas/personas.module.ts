import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { RolesModule } from 'src/roles/roles.module';
import { RolesService } from 'src/roles/roles.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { ClientesModule } from 'src/clientes/clientes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]), RolesModule, ClientesModule],
  controllers: [PersonasController],
  providers: [PersonasService, RolesService, ClientesService],
})
export class PersonasModule {}
