import { Router } from 'express'

import security from './security'
import home from './home'

const router = Router()

router.use(security)
router.use(home)

export default router
