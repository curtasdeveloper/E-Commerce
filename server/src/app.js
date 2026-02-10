import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
const app = express()

// ROUTES
import userRoute from './routes/userRoute.js';

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())


app.get('/test', (req,res) => {
  res.status(200).send({message: "Hello World", success: true});
})
// app.use('/api', routes)
app.use('/api/', userRoute);

// app.use(errorHandler) -> to be able implement next function in controllers
export default app;