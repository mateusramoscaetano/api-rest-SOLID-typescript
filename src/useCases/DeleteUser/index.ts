import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const postgresUsersRepository = PostgresUsersRepository.getInstance();

const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase };
