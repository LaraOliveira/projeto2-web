const { Router } = require ("express")
const routes = new Router()

const animais = require('./app/controllers/AnimalController')

routes.get('/animais', animais.index)
routes.get('/animais/:id', animais.show)
routes.post('/animais', animais.create)
routes.put('/animais/:id', animais.update)
routes.delete('/animais/:id', animais.destroy)

module.exports = routes