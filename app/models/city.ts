import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import VehicleCity from './vehicle_city.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class City extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare active: boolean

  @hasMany(() => VehicleCity)
  declare vehicleCities: HasMany<typeof VehicleCity>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
