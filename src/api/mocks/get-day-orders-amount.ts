import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-order-amount'

export const getDayOrderAmoountMock = http.get<
  never,
  never,
  GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})
