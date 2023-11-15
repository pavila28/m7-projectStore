const knex = require('../config')

const create = (body) => {
  return knex
    .insert(body)
    .into('products')
    .returning('*')
}

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}

const findOne = (productId) => {
  return knex
    .select(['products_id', 'product_name', 'description', 'price', 'sku', 'active', 'created_at'])
    .from('products')
    .where('products_id', productId)
    .where('active', true)
}

const update = (productId, body) => {
  return knex
    .update(body)
    .from('products')
    .where('products_id', productId)
    .returning(['products_id', 'product_name', 'description', 'price', 'sku', 'active', 'created_at'])
}

const destroy = (productId) => {
  return knex
    .del()
    .from('products')
    .where('products_id', productId)
}

const softDelete = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where('products_id', productId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
