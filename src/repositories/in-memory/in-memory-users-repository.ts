import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "crypto";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async findByEmail(email: String): Promise<User | null> {
    const user = await this.users.find(user => user.email === email)
    if (user == undefined) {
      return null
    }
    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const { name, email, password } = data
    const id = randomUUID()
    const newUser: User = {
      id,
      name,
      email,
      password
    }
    await this.users.push(newUser)

    return newUser
  }

}