import { beforeEach, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { describe } from 'node:test'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'
import { prisma } from '../lib/prisma'

describe("Register User", () => {
  beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM users`
  })

  it('should be able register a new user', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const newUser = {
      name: "john",
      email: "john@gmail.com",
      password: "john123"
    }

    const userRegistred = await registerUseCase.execute(newUser)

    expect(userRegistred.email).toBe(newUser.email)
  })
  it('should not be able register users with same email ', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    const newUser = {
      name: "john",
      email: "john@gmail.com",
      password: "john123"
    }

    await registerUseCase.execute(newUser)

    await expect(() => registerUseCase.execute(newUser)).rejects.toBeInstanceOf(Error)
  })
})