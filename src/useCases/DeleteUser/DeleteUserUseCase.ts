import { IUserRepository } from "../../repositories/IUserRepository";
import { IDeleteUserRequestDTO } from "./DeleteUserUseCaseDTO";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IDeleteUserRequestDTO) {
    const userExist = await this.userRepository.findById(data.id);
    if (!userExist) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(data.id);
  }
}
