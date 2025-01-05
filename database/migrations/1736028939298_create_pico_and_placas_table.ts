import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pico_and_placas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('city_id').unsigned().notNullable()
      table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE')
      table.boolean('is_even_odd_bassed').nullable().defaultTo(false)
      table.string('even_day_digits').nullable()
      table.string('odd_day_digits').nullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
