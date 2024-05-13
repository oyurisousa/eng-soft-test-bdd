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
    const userResgistered = await this.usersRepository.findByEmail(user.email)
    if (userResgistered) {
      throw new Error('this email already exists')
    }

    const newUser = this.usersRepository.create(user)
    return newUser
  }
}
