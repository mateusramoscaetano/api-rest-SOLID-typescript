import { DeleteUser } from "../../entities/DeleteUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async update(user: User): Promise<void> {
    this.users.push(user);
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
