const knex = require('../config')

const createC = (body) => {
  return knex
    .insert(body)
    .into('clients')
    .returning('*')
}

const findAllC = () => {
  return knex
    .select('*')
    .from('clients')
    .where('active', true)
}

const findOneC = (clientId) => {
  return knex
    .select('*')
    .from('clients')
    .where('clients_id', clientId)
    .where('active', true)
}

const updateC = (clientId, body) => {
  return knex
    .update(body)
    .from('clients')
    .where('clients_id', clientId)
    .returning('*')
}

const destroyC = (clientId) => {
  return knex
    .del()
    .from('clients')
    .where('clients_id', clientId)
}

const softDeleteC = (clientId) => {
  return knex
    .update({ active: false })
    .from('clients')
    .where('clients_id', clientId)
}

module.exports = {
  createC,
  findAllC,
  findOneC,
  updateC,
  destroyC,
  softDeleteC
}
