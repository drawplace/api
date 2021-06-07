import express from 'express'

import routes from '../routes'
import { PORT } from '../lib/constants'

const app = express()

app.set('trust proxy', 1)
app.disable('x-powered-by')

app.use(routes)

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`)
})
