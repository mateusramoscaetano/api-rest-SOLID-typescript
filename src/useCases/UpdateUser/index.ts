import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCaseDTO";

const postgresUsersRepository = new PostgresUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController, updateUserUseCase };
