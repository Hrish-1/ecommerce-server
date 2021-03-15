import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import ProductRoutes from './routes/ProductRoutes.js'
import { notFound, errorHandler } from './middleware/ErrorMiddleware.js'
import cors from 'cors'

dotenv.config()
connectDb()

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use('/api/products', ProductRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${process.env.PORT}`)
);