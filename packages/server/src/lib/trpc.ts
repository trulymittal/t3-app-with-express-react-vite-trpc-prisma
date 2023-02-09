import { inferAsyncReturnType, initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  // req.
  const token = req.headers.authorization
  // Validate token
  // Get the user
  const user = 'Truly'

  const noUser = undefined

  if (user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You are not authorized',
    })
  }

  return {
    user: user,
  }
}

type Context = inferAsyncReturnType<typeof createContext>
export const trpc = initTRPC.context<Context>().create()
