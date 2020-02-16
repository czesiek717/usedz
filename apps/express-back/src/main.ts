/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ItemRouter } from '@usedz/express-back';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { connect } from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/usedz/items', ItemRouter);

connect(
  'mongodb://localhost:27017/usedz',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => console.log('Successfully connected to database'))
  .catch(error => console.error(error));

const port = process.env.port || 8080;
const server = app.listen(port, () => {
  console.log('Express listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);
