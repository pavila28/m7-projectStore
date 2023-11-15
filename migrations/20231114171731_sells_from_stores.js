/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('components').then(function (exists) {
    if (exists) {
      return knex.schema.table('components', function (table) {
        table.integer('fk_stores').unsigned().references('stores.stores_id')
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
      return knex.schema.table('components', function (table) {
        table.dropColumn('fk_stores')
      })
    }
  })
}
