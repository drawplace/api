import { Router } from 'express'

const router = Router()

router.ws('/messages', (socket, req) => {
	socket.send(JSON.stringify(req.headers.cookie))
})

export default router
