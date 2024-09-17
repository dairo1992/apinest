import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PersonasModule } from 'src/personas/personas.module';

@Module({
  imports: [PersonasModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
