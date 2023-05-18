import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.list();
  }
}
