import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'time_slot_schedules'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('schedule_id').unsigned().notNullable() // Solo esta definición
      table.foreign('schedule_id').references('id').inTable('schedules').onDelete('CASCADE')

      table.time('start_time').notNullable()
      table.time('end_time').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
