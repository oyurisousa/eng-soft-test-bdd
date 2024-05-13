import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";

export type RegisterUseCaseRequest = {
  name: string,
  email: string,
  password: string
}

export type RegisterUseCaseReponse = {
  id: string,
  name: string,
  email: string,
  password: string
}


export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(user: Prisma.UserCreateInput) {

  }
}
