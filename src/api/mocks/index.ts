import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrderAmoountMock } from './get-day-orders-amount'
import { getMangedRestaurantMock } from './get-managed-resaturant-mock'
import { getMonthCanceledOrderAmoountMock } from './get-month-canceled-orders-amount'
import { getMonthOrderAmoountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getOrderDetailMock } from './get-orders-datails-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products'
import { getProfileMock } from './get-ptofile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrderAmoountMock,
  getMonthCanceledOrderAmoountMock,
  getMonthOrderAmoountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  updateProfileMock,
  getMangedRestaurantMock,
  getOrdersMock,
  getOrderDetailMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
