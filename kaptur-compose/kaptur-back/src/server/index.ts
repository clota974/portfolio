import express from 'express'
import injectMiddlewares from './middlewares';

const app = express();

injectMiddlewares(app);


export default function startServer() {
  app.listen(process.env.PORT, () => {
    console.log(`Starting on port ${process.env.PORT}`)
  })
}