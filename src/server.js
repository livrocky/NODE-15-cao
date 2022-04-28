const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { PORT, dbConfig } = require('./config');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// 2.1. GET "/" - išmeta, kad serveris funkcionuoja. //
app.get('/', (req, res) => res.json('yellou'));

app.use('/api', itemsRoutes);

app.listen(PORT, () => console.log('express is online', PORT));
