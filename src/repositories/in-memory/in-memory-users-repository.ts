import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<{ id: string; name: string; email: string; password: string; }> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: String): Promise<{ id: string; name: string; email: string; password: string; } | null> {
    throw new Error("Method not implemented.");
  }

}