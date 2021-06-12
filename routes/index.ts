import { Router } from 'express'

import security from './security'
import home from './home'
import messages from './messages'

const router = Router()

router.use(security)
router.use(home)
router.use(messages)

export default router
