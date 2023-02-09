import { prisma } from '../lib/prismaClient'
import { trpc } from '../lib/trpc'
import { z } from 'zod'

export const todoRouter = trpc.router({
  list: trpc.procedure.query(({ ctx }) => {
    console.log(ctx.user)
    // const todos = await prisma.todo.findMany()
    // return todos
    return prisma.todo.findMany()
  }),
  create: trpc.procedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      const title = input.title
      return prisma.todo.create({
        data: {
          title: title,
          isCompleted: false,
        },
      })
    }),
  delete: trpc.procedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      return prisma.todo.delete({
        where: {
          id: input.id,
        },
      })
    }),
  update: trpc.procedure
    .input(z.object({ id: z.string(), isCompleted: z.boolean() }))
    .mutation(({ ctx, input }) => {
      return prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          isCompleted: input.isCompleted,
        },
      })
    }),
})
