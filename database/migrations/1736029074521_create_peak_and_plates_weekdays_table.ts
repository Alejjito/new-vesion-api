import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'peak_and_plates_weekdays'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('digits')
      table.boolean('apply').defaultTo(false)
      table.bigInteger('weekday_id').unsigned().notNullable()
      table.bigInteger('pico_and_placa_id').unsigned().notNullable()
      table.foreign('weekday_id').references('id').inTable('weekdays').onDelete('CASCADE')
      table
        .foreign('pico_and_placa_id')
        .references('id')
        .inTable('pico_and_placas')
        .onDelete('CASCADE'),
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
