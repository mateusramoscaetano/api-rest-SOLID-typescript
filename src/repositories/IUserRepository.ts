import { DeleteUser } from "../entities/DeleteUser";
import { UpdateUser } from "../entities/UpdateUser";
import { User } from "../entities/User";

export interface IUserRepository {
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  update(user: UpdateUser): Promise<void>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
