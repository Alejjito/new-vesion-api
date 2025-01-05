import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import City from './city.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import VehicleType from './vehicle_type.js'

export default class VehicleCity extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => City)
  declare city: HasOne<typeof City>

  @hasOne(() => VehicleType)
  declare vehicleType: HasOne<typeof VehicleType>

  @column()
  declare vehicleTypeId: number

  @column()
  declare referenceDigit: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
