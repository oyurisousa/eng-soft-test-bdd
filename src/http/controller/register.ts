import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUseCase } from "../../use-cases/register";
import { z } from 'zod'
import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { randomUUID } from "node:crypto";
export async function register(request: FastifyRequest, reply: FastifyReply) {
  const userBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = userBodySchema.parse(request.body)
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(prismaUsersRepository)
  const id = randomUUID()
  const user = await registerUseCase.execute({
    id, name, email, password
  })

  reply.status(201).send(user)
}