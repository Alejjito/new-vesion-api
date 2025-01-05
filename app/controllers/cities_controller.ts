import type { HttpContext } from '@adonisjs/core/http'
import City from '#models/city'
export default class CitiesController {
  async index({ response }: HttpContext) {
    const cities = await City.all()
    return response.ok({
      data: cities,
      status: 'ok',
    })
  }

  async create({ response, request }: HttpContext) {
    const data = request.all()
    const city = await City.create(data)
    return response.ok(city)
  }
}
