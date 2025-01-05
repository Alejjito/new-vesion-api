import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import VehicleType from './vehicle_type.js'

export default class VehicleUser extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare placa: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @hasOne(() => VehicleType)
  declare vehcileType: HasOne<typeof VehicleType>

  @column()
  declare image: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
