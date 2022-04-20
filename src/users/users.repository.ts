import { CreateUserDto } from './dto/create-user.dto';
import { Repository, EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { password } = createUserDto;

      const saltRounds = 10;
      const hash = bcrypt.hashSync(password, saltRounds);

      const user = await this.create({
        ...createUserDto,
        verified: false,
        password: hash,
      });
      await this.save(user);
      return user;
    } catch (error) {
      throw new Error('This email is existed.');
    }
  }
  async findAll() {
    try {
      return await this.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}
