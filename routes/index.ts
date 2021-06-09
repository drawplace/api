import { Router } from 'express'

import security from './security'
import home from './home'
import messages from './messages'

const router = Router()

router.use(security)
router.use(home)
router.use(messages)

router.get('/echo', (req, res) => {
	res.send(req.headers.cookie)
})

export default router
