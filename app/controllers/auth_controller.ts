import City from '#models/city'
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ response, request }: HttpContext) {
    const data = request.all()
    //validate date
    const payload = await createUserValidator.validate(data)
    const user = await User.create(payload)
    return response.created(user)
  }

  async login({ response, request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)
    return response.ok({
      user,
      token,
    })
  }

  async logout({ response, auth }: HttpContext) {
    const user = auth.user
    const token = user?.currentAccessToken
    if (token?.identifier && user) {
      User.accessTokens.delete(user, token.identifier)
      return response.ok({
        message: 'Logged out successfully',
      })
    }
  }

  async updateCity({ response, request, auth }: HttpContext) {
    const user = auth.user
    const city = request.input('cityId')
    user?.merge({ city_id: city })
    const cityData = await City.find(city)
    if (!cityData) {
      return response.badRequest({
        message: 'City not found',
      })
    }
    await user?.save()

    return response.ok({
      message: 'City updated successfully',
      data: {
        user,
        cityData,
      },
    })
  }

  async getCity({ response, auth }: HttpContext) {
    const user = auth.user
    const city = await City.find(user?.cityId)
    return response.ok(city)
  }
}
