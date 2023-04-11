import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(condition: any): Promise<User> {
        return this.userRepository.findOne(condition);
    }
    //    async update(id: number, updateUserDto: User): Promise<User> {
    //     const user = await this.userRepository.findOne({ where: { id } });
    //     if (!user) {
    //         throw new NotFoundException('User not found');
    //     }

    //     const updatedUser = Object.assign(user, updateUserDto);
    //     return this.userRepository.save(updatedUser);
    // }

    // async delete(id: number): Promise<User> {
    //     const user = await this.userRepository.findOne({ where: { id } });
    //     if (!user) {
    //         throw new NotFoundException('User not found');
    //     }

    //     return this.userRepository.remove(user);
    // }
//   async update(id: number, data: any): Promise<User> {
//   const user = await this.userRepository.findOne({ where: { id } });
//   if (!user) {
//     throw new NotFoundException(`User with ID ${id} not found`);
//   }
//   Object.assign(user, data);
//   return this.userRepository.save(user);
// }

// async delete(id: number): Promise<void> {
//   const result = await this.userRepository.delete(id);
//   if (result.affected === 0) {
//     throw new NotFoundException(`User with ID ${id} not found`);
//   }
// }

}
