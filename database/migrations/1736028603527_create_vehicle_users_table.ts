import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vehicle_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('placa', 255).notNullable()
      table.bigInteger('user_id').unsigned().notNullable()
      table.bigInteger('vehicle_type_id').unsigned().nullable()
      table.text('image').nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')

      table
        .foreign('vehicle_type_id')
        .references('id')
        .inTable('vehicle_types')
        .onDelete('SET NULL')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
