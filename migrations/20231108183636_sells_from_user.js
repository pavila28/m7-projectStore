/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sells').then(function (exists) {
    if (exists) {
      return knex.schema.table('sells', function (table) {
        table.integer('fk_clients').unsigned().references('clients.clients_id')
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
      return knex.schema.table('sells', function (table) {
        table.dropColumn('fk_clients')
      })
    }
  })
}
