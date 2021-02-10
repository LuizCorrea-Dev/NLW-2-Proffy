import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
  return response.send('🚀 Backend started!');
});

//localhoslt:3333
app.listen(3333, () => {
  console.log('🚀 Backend started! in http://localhost:3333');
});
