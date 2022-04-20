import { UpdateUserDto } from './dto/update-user.dto';
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
  async findAll(): Promise<User[]> {
    try {
      return await this.find();
    } catch (error) {
      throw new Error(error);
    }
  }
  async findById(id: string): Promise<User> {
    try {
      return await this.findOne({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateInfoUser(id: string, updateUserDto: UpdateUserDto) {
    // try {
    const result = await this.createQueryBuilder()
      .update(User)
      .set({ ...updateUserDto })
      .where({ id })
      .execute();
    return result.affected;
  }
  async deleteById(id: string) {
    const result = await this.createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
    console.log(result);
    return result.affected;
  }
  async findByEmail(email: string) {
    const result = await this.findOne({ email });
    return result;
  }
}
