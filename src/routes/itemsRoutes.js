const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

const itemsRoutes = express.Router();
module.exports = itemsRoutes;

itemsRoutes.get('/items', async (req, res) => {
  let connection;
  try {
    // 1 prisijungti
    connection = await mysql.createConnection(dbConfig);
    console.log('connected');
    // 2 atlikti veiksma
    const sql = 'SELECT * FROM `items`';
    const [rows, fields] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    // // err gaudom klaidas
    console.log('home route error ===', error);
    res.status(500).json('something went wrong');
  } finally {
    // 3 atsijungti
    if (connection) connection.end();
    // connection?.close();
  }
});
