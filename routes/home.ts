import { Router } from 'express'

import { ORIGIN } from '../lib/constants'

const router = Router()

router.get('/', (_req, res) => {
	res.redirect(301, ORIGIN)
})

export default router
