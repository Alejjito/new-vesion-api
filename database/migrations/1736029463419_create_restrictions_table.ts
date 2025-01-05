import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'restrictions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('restriction_type_id').unsigned().notNullable()
      table.bigInteger('city_id').unsigned().notNullable()
      table.json('dates').nullable()
      table.json('time_slots').nullable()
      table.boolean('is_all_day').defaultTo(false)
      table.json('applicable_streets').notNullable()
      table
        .foreign('restriction_type_id')
        .references('id')
        .inTable('restriction_types')
        .onDelete('CASCADE')
      table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
