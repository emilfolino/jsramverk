import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const products = { data: [
  {
    name: "iPhone 15",
  },
  {
    name: "iPhone Pro Max 15",
  },
]}

export const restHandlers = [
  rest.get('https://lager.emilfolino.se/v2/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products))
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
