import { api } from '@/lib/axios'

export interface resgisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function resgisterRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: resgisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
