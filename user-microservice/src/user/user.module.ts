import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'd#8Gp@2L!xYfPzQwR^k8%MzZk3uS!7tL', 
      signOptions: { expiresIn: '60m' },
    }),
    PassportModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
