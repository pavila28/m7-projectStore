/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('components').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('components', function (table) {
        table.increments('components_id').primary()
        table.integer('quantity').notNullable()
        table.integer('fk_products').unsigned().references('products.products_id')
        table.integer('fk_sells').unsigned().references('sells.sells_id')
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
  return knex.schema.hasTable('components').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('components')
    }
  })
}
