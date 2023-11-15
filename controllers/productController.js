const ModelProduct = require('../models/Products')

const createProduct = (req, res) => {
  ModelProduct.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Product created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating product', err })
    })
}

const findAllProducts = (req, res) => {
  ModelProduct.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing products', err })
    })
}

const findOneProduct = (req, res) => {
  ModelProduct.findOne(req.params.idProduct)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing home', err })
    })
}

const updateOneProduct = (req, res) => {
  ModelProduct.update(req.params.idProduct, req.body)
    .then(row => {
      res.status(200).send({ message: 'Product updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating product', err })
    })
}

const destroyOneProduct = (req, res) => {
  ModelProduct.destroy(req.params.idProduct)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying product', err })
    })
}

const softDeleteOneProduct = (req, res) => {
  ModelProduct.softDelete(req.params.idProduct)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting product', err })
    })
}

module.exports = {
  createProduct,
  findAllProducts,
  findOneProduct,
  updateOneProduct,
  destroyOneProduct,
  softDeleteOneProduct
}
