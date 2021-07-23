import { Router } from "express"
const routes = new Router()

import animais from './app/controllers/AnimalController'
import donos from './app/controllers/DonoController'

routes.get('/animais', animais.index)
routes.get('/animais/:id', animais.show)
routes.post('/animais', animais.create)
routes.put('/animais/:id', animais.update)
routes.delete('/animais/:id', animais.destroy)

routes.get('/donos', donos.index)
routes.get('/donos/:id', donos.show)
routes.post('/donos', donos.create)
routes.put('/donos/:id', donos.update)
routes.delete('/donos/:id', donos.destroy)

export default routes