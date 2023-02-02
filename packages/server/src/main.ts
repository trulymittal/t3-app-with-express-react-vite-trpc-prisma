import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello world!' })
})

const PORT: number = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`)
})
