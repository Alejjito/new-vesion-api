import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'peak_and_plates_weekdays'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('digits')
      table.boolean('apply').defaultTo(false)
      table.bigInteger('weekday_id').unsigned().notNullable()
      table.bigInteger('peak_and_plate_id').unsigned().notNullable()
      table.foreign('weekday_id').references('id').inTable('weekdays').onDelete('CASCADE')
      table
        .foreign('peak_and_plate_id')
        .references('id')
        .inTable('peak_and_plates')
        .onDelete('CASCADE'),
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
