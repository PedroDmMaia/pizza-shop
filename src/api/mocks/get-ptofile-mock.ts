import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'customer-user-id',
      name: 'Pedro Maia',
      email: 'pedrodelmonico@hotmail.com',
      phone: '11988050110',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
