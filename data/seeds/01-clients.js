/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  await knex('clients').insert([
    {
      clients_id: 1,
      name: 'Clark',
      last_name: 'Kent',
      email: 'clarkkent@dc.com',
      phone: '1234567890',
      address: '85 Temple Dr.Fort Dodge, IA 50501',
      cp: '11000'
    },
    {
      clients_id: 2,
      name: 'Bruce',
      last_name: 'Wayne',
      email: 'brucewayne@dc.com',
      phone: '3456789012',
      address: '9902 W. Ridgewood Lane Severna Park, MD 21146',
      cp: '12000'
    },
    {
      clients_id: 3,
      name: 'Diana',
      last_name: 'Prince',
      email: 'dianaprince@dc.com',
      phone: '3456789712',
      address: '7296 Lilac St.Buffalo, NY 14215',
      cp: '13000'
    },
    {
      clients_id: 4,
      name: 'Barry',
      last_name: 'Allen',
      email: 'barryallen@dc.com',
      phone: '4567890123',
      address: '801 Maple St.Boynton Beach, FL 33435',
      cp: '14000'
    },
    {
      clients_id: 5,
      name: 'Arthur',
      last_name: 'Curry',
      email: 'arhurcurry@dc.com',
      phone: '5678901234',
      address: '793 Sherman Court Manassas, VA 20109',
      cp: '15000'
    },
    {
      clients_id: 6,
      name: 'Hal',
      last_name: 'Jordan',
      email: 'haljordan@dc.com',
      phone: '6789012345',
      address: '4 Smith Store Road Marlton, NJ 08053',
      cp: '16000'
    },
    {
      clients_id: 7,
      name: 'Peter',
      last_name: 'Parker',
      email: 'peterparker@marvel.com',
      phone: '7890123456',
      address: '14 Depot Dr.Clinton, MD 20735',
      cp: '17000'
    },
    {
      clients_id: 8,
      name: 'Steve',
      last_name: 'Rogers',
      email: 'steverogers@marvel.com',
      phone: '8901234567',
      address: '8 High Noon St.Reynoldsburg, OH 43068',
      cp: '18000'
    },
    {
      clients_id: 9,
      name: 'Tony',
      last_name: 'Stark',
      email: 'tonystark@marvel.com',
      phone: '9012345678',
      address: '6 West Longfellow Avenue Conway, SC 29526',
      cp: '19000'
    },
    {
      clients_id: 10,
      name: 'Natasha',
      last_name: 'Romanoff',
      email: 'natasharomanoff@marvel.com',
      phone: '0124567590',
      address: '8 Bishop St.Wisconsin Rapids, WI 54494',
      cp: '20000'
    }
  ])
}
