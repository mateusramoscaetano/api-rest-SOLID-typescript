import { DeleteUser } from "../../entities/DeleteUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IDeleteUserRequestDTO } from "./DeleteUserUseCaseDTO";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IDeleteUserRequestDTO) {
    await this.userRepository.delete(data.id);
  }
}
