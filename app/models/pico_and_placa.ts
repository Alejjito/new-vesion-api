import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import City from './city.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class PicoAndPlaca extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => City)
  declare city: HasOne<typeof City>

  @column()
  declare isEvenOddBased: boolean

  @column()
  declare evenDayDigits: string

  @column()
  declare oddDayDigits: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

