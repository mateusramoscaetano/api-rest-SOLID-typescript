import { UpdateUser } from "../entities/UpdateUser";
import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  update(user: UpdateUser): Promise<void>;
  save(user: User): Promise<void>;
}
