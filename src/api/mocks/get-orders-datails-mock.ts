import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Pedro Maia',
      email: 'johndoe@test.com',
      phone: '123123123',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza Pepperoni',
        },
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza Marguerita',
        },
      },
    ],
    totalInCents: 5000,
  })
})
