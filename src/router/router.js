import {Router} from 'express'
import {crearTarea, getTarea, getTareas, updateTarea, deleteTarea, pruebaConexion} from '../controllers/controllers.js'



const router = Router()

router.get('/tasks', getTareas)

router.get('/task/:id', getTarea)

router.put('/tasks', updateTarea)

router.post('/tasks', crearTarea )

router.delete('/tasks', deleteTarea)

router.get('/tasks/aws', pruebaConexion)

export default router