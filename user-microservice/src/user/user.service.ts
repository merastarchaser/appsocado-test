import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(name: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ name, password: hashedPassword });
    return this.userRepository.save(newUser);
  }

  async validateUser(name: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { name } });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { username: user.name, sub: user.id };
      return {
        ...user,
        token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
