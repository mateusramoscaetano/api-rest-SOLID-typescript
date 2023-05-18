import { DeleteUser } from "../../entities/DeleteUser";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUserRepository {
  private static instance: PostgresUsersRepository;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): PostgresUsersRepository {
    if (!PostgresUsersRepository.instance) {
      PostgresUsersRepository.instance = new PostgresUsersRepository();
    }

    return PostgresUsersRepository.instance;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async update(user: User): Promise<void> {
    const userIndex = this.users.findIndex((u) => u.id === user.id);
    console.log(user);

    if (userIndex !== -1) {
      this.users[userIndex] = user;
    }
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
