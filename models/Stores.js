const knex = require('../config')

const createS = (body) => {
  return knex
    .insert(body)
    .into('stores')
    .returning('*')
}

const findAllS = () => {
  return knex
    .select('*')
    .from('stores')
    .where('active', true)
}

const findOneS = (storeId) => {
  return knex
    .select('*')
    .from('stores')
    .where('stores_id', storeId)
    .where('active', true)
}

const updateS = (storeId, body) => {
  return knex
    .update(body)
    .from('stores')
    .where('stores_id', storeId)
    .returning('*')
}

const destroyS = (storeId) => {
  return knex
    .del()
    .from('stores')
    .where('stores_id', storeId)
}

const softDeleteS = (storeId) => {
  return knex
    .update({ active: false })
    .from('stores')
    .where('stores_id', storeId)
}

module.exports = {
  createS,
  findAllS,
  findOneS,
  updateS,
  destroyS,
  softDeleteS
}
