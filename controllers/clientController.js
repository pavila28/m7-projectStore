const ModelClient = require('../models/Clients')

const createClient = (req, res) => {
  ModelClient.createC(req.body)
    .then(row => {
      res.status(201).send({ message: 'Client created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating client', err })
    })
}

const findAllClients = (req, res) => {
  ModelClient.findAllC()
    .then(rows => {
      res.status(200).send({ rows })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing clients', err })
    })
}

const findOneClient = (req, res) => {
  ModelClient.findOneC(req.params.idClient)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing client', err })
    })
}

const updateOneClient = (req, res) => {
  ModelClient.updateC(req.params.idClient, req.body)
    .then(row => {
      res.status(200).send({ message: 'Client updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating client', err })
    })
}

const destroyOneClient = (req, res) => {
  ModelClient.destroyC(req.params.idClient)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying client', err })
    })
}

const softDeleteOneClient = (req, res) => {
  ModelClient.softDeleteC(req.params.idClient)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting client', err })
    })
}

module.exports = {
  createClient,
  findAllClients,
  findOneClient,
  updateOneClient,
  destroyOneClient,
  softDeleteOneClient
}
