import { config } from "dotenv";
config();
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const port = process.env.PORT || 3001; 
const app = express();
app.use(cors())

app.use('/api', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});