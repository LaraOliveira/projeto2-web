import { Router } from "express"
const routes = new Router()

import animais from './app/controllers/AnimalController'
//import dono from './app/controllers/DonoController'

routes.get('/animais', animais.index)
routes.get('/animais/:id', animais.show)
routes.post('/animais', animais.create)
routes.put('/animais/:id', animais.update)
routes.delete('/animais/:id', animais.destroy)

export default routes