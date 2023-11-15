const ModelStore = require('../models/Stores')

const createStore = (req, res) => {
  ModelStore.createS(req.body)
    .then(row => {
      res.status(201).send({ message: 'Store created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating store', err })
    })
}

const findAllStores = (req, res) => {
  ModelStore.findAllS()
    .then(rows => {
      res.status(200).send({ rows })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing stores', err })
    })
}

const findOneStore = (req, res) => {
  ModelStore.findOneS(req.params.idStore)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing store', err })
    })
}

const updateOneStore = (req, res) => {
  ModelStore.updateS(req.params.idStore, req.body)
    .then(row => {
      res.status(200).send({ message: 'Store updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating store', err })
    })
}

const destroyOneStore = (req, res) => {
  ModelStore.destroyS(req.params.idStore)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying store', err })
    })
}

const softDeleteStore = (req, res) => {
  ModelStore.softDeleteS(req.params.idStore)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting store', err })
    })
}

module.exports = {
  createStore,
  findAllStores,
  findOneStore,
  updateOneStore,
  destroyOneStore,
  softDeleteStore
}
