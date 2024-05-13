import { FastifyInstance } from "fastify";
import { app } from "../app";
import { register } from "./controller/register";


export async function appRoutes(app: FastifyInstance) {
  app.post('/', register)

}
