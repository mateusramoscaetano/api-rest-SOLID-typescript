import { User } from "../entities/User";

export interface IUserRepository {
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  update(user: User): Promise<void>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<User>;
}
