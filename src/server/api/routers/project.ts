import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

export const projectRouter = createTRPCRouter({
  add: protectedProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.project.create({
          data: {
            title: input.title,
            userId: ctx.session.user.id,
          },
        })
      } catch (err) {
        console.error(err)
        throw new Error('Could not be create the project')
      }
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.project.findMany({
        select: {
          title: true,
          id: true,
        },
      })
    } catch (error) {
      console.log(error)
      throw new Error('Could not be get projects, try more later')
    }
  }),
})
