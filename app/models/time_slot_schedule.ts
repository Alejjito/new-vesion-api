import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Schedule from './schedule.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class TimeSlotSchedule extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasOne(() => Schedule)
  declare schedule: HasOne<typeof Schedule>

  @column()
  declare startTime: string

  @column()
  declare endTime: string

  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
