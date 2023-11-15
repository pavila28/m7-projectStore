/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sells').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sells', function (table) {
        table.increments('sells_id').primary()
        table.string('date').notNullable()
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sells').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sells')
    }
  })
}
