import { Injectable } from '@nestjs/common';
import { PersonasService } from 'src/personas/personas.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly personaService: PersonasService) {}

  login() {
    return 'login s';
  }

  async register(resgisterDto: RegisterDto) {
    await this.personaService.create(resgisterDto)
    return 'register s';
  }
}
