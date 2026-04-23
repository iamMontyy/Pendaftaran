const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kampus_db')
    .then(() => console.log('Terhubung ke database kampus!'))
    .catch((err) => console.log('Gagal terhubung:', err));