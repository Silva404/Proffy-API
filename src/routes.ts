import express from 'express'
const routes = express.Router()

import ClassesController from './controller/ClassController'
import ConnectionController from './controller/ConnectionController'

const classesController = new ClassesController()
const connectionsController = new ConnectionController()

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes