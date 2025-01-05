import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exceptions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.integer('exception_type_id').unsigned().notNullable()
      table.string('description')
      table.json('exception_dates').nullable()
      table.boolean('apply_all_cities').defaultTo(false)
      table.json('cities').nullable()
      table
        .foreign('exception_type_id')
        .references('id')
        .inTable('exception_types')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
