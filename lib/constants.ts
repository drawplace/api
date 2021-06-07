export const DEV = process.env.NODE_ENV === 'development'
export const PORT = process.env.PORT ?? '5000'

export const ORIGIN = process.env.ORIGIN as string
if (!ORIGIN) throw new Error('Missing origin')
