import { Router } from 'express'

const router = Router()

router.ws('/messages', (socket, req) => {
	socket.send(req.query.data)
})

export default router
