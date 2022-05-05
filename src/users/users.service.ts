import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'need fixing';
    // return this.usersRepository.createUser(createUserDto);
  }

  findAll() {
    return 'need fixing';

    // return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return 'need fixing';
    // return this.usersRepository.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return 'need fixing';
    // return this.usersRepository.updateInfoUser(id, updateUserDto);
  }

  remove(id: string) {
    return 'need fixing';
    // return this.usersRepository.deleteById(id);
  }
  findByEmail(email: string) {
    return 'need fixing';
    // return this.usersRepository.findByEmail(email);
  }
}
