const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeController')

router.post('/stores', storeController.createStore)
router.get('/stores', storeController.findAllStores)
router.get('/stores/:idStore', storeController.findOneStore)
router.patch('/stores/:idStore', storeController.updateOneStore)
router.delete('/stores/:idStore', storeController.softDeleteStore)
router.delete('/stores/destroy/:idStore', storeController.destroyOneStore)

module.exports = router
