import { http, HttpResponse } from 'msw'

import { singInBody } from '../sign-in'

export const signInMock = http.post<never, singInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'pedrodelmonico@hotmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth=sample-jwt',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
