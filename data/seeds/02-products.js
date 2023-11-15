/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      products_id: 1,
      product_name: 'Milk',
      description: 'Fresh dairy milk',
      price: '2.99',
      sku: '123456'
    },
    {
      products_id: 2,
      product_name: 'Bread',
      description: 'Whole wheat bread',
      price: '1.99',
      sku: '234567'
    },
    {
      products_id: 3,
      product_name: 'Eggs',
      description: 'Farm fresh eggs',
      price: '3.46',
      sku: '345678'
    },
    {
      products_id: 4,
      product_name: 'Banana',
      description: 'Ripe bananas',
      price: '0.69',
      sku: '456789'
    },
    {
      products_id: 5,
      product_name: 'Chicken',
      description: 'Skinless chicken breast',
      price: '4.99',
      sku: '567890'
    },
    {
      products_id: 6,
      product_name: 'Cereal',
      description: 'Crunchy breakfast cereal',
      price: '2.49',
      sku: '678901'
    },
    {
      products_id: 7,
      product_name: 'Yogurt',
      description: 'Low-fat yogurt',
      price: '1.79',
      sku: '789012'
    },
    {
      products_id: 8,
      product_name: 'Apples',
      description: 'Crisp red apples',
      price: '1.29',
      sku: '890123'
    },
    {
      products_id: 9,
      product_name: 'Pasta',
      description: 'Whole wheat pasta',
      price: '0.99',
      sku: '901234'
    },
    {
      products_id: 10,
      product_name: 'Tomatoes',
      description: 'Vine-ripened tomatoes',
      price: '0.89',
      sku: '012345'
    }
  ])
}
