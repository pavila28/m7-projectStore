/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('stores').del()
  await knex('stores').insert([
    {
      stores_id: 1,
      store_name: 'Monterrey',
      store_address: 'Garza Sada 1967',
      store_city: 'Monterrey, Nuevo León',
      store_cp: '64849'
    },
    {
      stores_id: 2,
      store_name: 'CDMX',
      store_address: 'Condesa 1524',
      store_city: 'Ciudad de México',
      store_cp: '11000'
    },
    {
      stores_id: 3,
      store_name: 'Guadalajara',
      store_address: 'Jalisco 4153',
      store_city: 'Guadalajara, Jalisco',
      store_cp: '94825'
    },
    {
      stores_id: 4,
      store_name: 'Culiacán',
      store_address: 'Sinaloa 2023',
      store_city: 'Culiacán, Sinaloa',
      store_cp: '83754'
    }
  ])
}
