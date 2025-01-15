import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async signUp(CreateUserDto: CreateUserDto): Promise<void> {
    const { userId, password } = CreateUserDto;
    const user = this.userRepository.create({ userId, password });
    await this.userRepository.save(user);
  }
}
