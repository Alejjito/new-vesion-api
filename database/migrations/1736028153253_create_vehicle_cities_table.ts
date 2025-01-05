import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicle_cities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'),
        table.bigInteger('city_id').unsigned().notNullable(),
        table.bigInteger('vehicle_type_id').unsigned().nullable(),
        table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE'),
        table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE'),
        table
          .foreign('vehicle_type_id')
          .references('id')
          .inTable('vehicle_types')
          .onDelete('SET NULL'),
        table.string('reference_digit').notNullable(),
        table.timestamp('created_at'),
        table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
