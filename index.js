const express = require ('express');
const app = express();
const database = require('./config/database');
const cors = require ('cors');
const pretty = require('pretty');


database();

app.use(cors());
// app.use(pretty());
app.use(express.json());
// app.use(router);