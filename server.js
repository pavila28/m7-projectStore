const express = require('express')

const productRoutes = require('./routes/productRoutes')
const clientRoutes = require('./routes/clientRoutes')
const storeRoutes = require('./routes/storeRoutes')

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/api/v1', productRoutes)
app.use('/api/v1', clientRoutes)
app.use('/api/v1', storeRoutes)

// Server up
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
