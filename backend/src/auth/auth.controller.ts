import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcrendentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authcrendentialDto);
  }

  @Post('/signIn')
  signIn(
    @Body(ValidationPipe) authcredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authcredentialDto);
  }
}
