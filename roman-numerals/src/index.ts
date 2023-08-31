import express from 'express';
import dotenv from 'dotenv';

import { chainMiddlewares } from './lib';

dotenv.config();

const app = express();

app.use(express.json());
chainMiddlewares(app);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})