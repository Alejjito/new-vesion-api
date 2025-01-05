import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ response }: HttpContext) {
    response.send('Hello from UsersController')
  }

  async create({ response }: HttpContext) {
    response.send('Hello from UsersController')
  }
}
