// const {Client} = require('@elastic/elasticsearch');
import {Client} from '@elastic/elasticsearch';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('ELASTIC_SEARCH_API_KEY', process.env.ELASTIC_SEARCH_API_KEY);

const host = process.env.ELASTIC_SEARCH_HOST;
const apiKey = process.env.ELASTIC_SEARCH_API_KEY;

const hostLocal = 'http://localhost:9200';
const apiKeyLocal =
  'dk00MjU0d0JFSk50RW5sc0hXUU06TkJBekc1TGlUaGVXY2Mtbm92eXQzZw==';

const client = new Client({
  node: hostLocal,
});

export {client};
