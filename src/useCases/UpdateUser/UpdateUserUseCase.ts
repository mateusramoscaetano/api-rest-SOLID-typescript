import { IUserRepository } from "../../repositories/IUserRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserUseCasesDTO";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUpdateUserRequestDTO) {
    const userExist = await this.userRepository.findById(data.id);
    if (!userExist) {
      throw new Error("User not found");
    }

    userExist.name = data.name;
    userExist.email = data.email;

    await this.userRepository.update(userExist);
  }
}
