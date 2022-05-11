import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm'; 
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;

    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    
    const user = await this.usersRepository.create({
      ...createUserDto,
      verified: false,
      password: hash,
      // avatar: JSON.parse(avatar).originalName,
    });

    return await this.usersRepository.save(user);
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne({ id });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    avatar: Express.Multer.File,
  ) {
    const user = await this.findOne( id );
    const newUser = await this.usersRepository.save({
      ...user,
      ...updateUserDto,
      avatar: avatar ? avatar.path : user.avatar,
    });

    return await this.usersRepository.save(newUser);
  }

  async remove(id: string) {
    return await this.usersRepository.delete({ id });
  }
  async findByEmail(email: string) {
    return await this.usersRepository.findOne({ email });
    // return this.usersRepository.findByEmail(email);
  }
  async verifyEmail(id: string) {
    const user =  await this.findOne(id);
    return await this.usersRepository.save({
      ...user,
      verified: true,
    });
  }
}
