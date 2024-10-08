import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('register')
  register(@Body() resgisterDto: RegisterDto) {
    // console.log(resgisterDto);
    
    return this.authService.register(resgisterDto);
  }
}
