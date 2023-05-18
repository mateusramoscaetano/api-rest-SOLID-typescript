import { UpdateUser } from "../../entities/UpdateUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUpdateUserRequestDTO } from "./UpdateUserUseCases";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUpdateUserRequestDTO) {
    const userExist = await this.userRepository.findByEmail(data.email);
    if (!userExist) {
      throw new Error("User not found");
    }

    userExist.name = data.name;
    userExist.email = data.email;

    await this.userRepository.update(userExist);
  }
}
