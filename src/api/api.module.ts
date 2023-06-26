import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './user/auth/auth.module';

@Module({
  providers: [UserService],
  imports: [UserModule, AuthModule]
})
export class ApiModule {}
