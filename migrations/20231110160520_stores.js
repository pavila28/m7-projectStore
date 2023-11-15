/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('stores').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('stores', function (table) {
        table.increments('stores_id').primary()
        table.string('store_name').notNullable()
        table.string('store_address')
        table.string('store_city')
        table.string('store_cp').notNullable()
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
  return knex.schema.hasTable('stores').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('stores')
    }
  })
}
