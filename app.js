require('dotenv').config();
// ------------------------------
// 📦 Imports                 //
// ------------------------------
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoDBConnect = require('./server/config/db');
//-------------------------------
// 💻 Server                  //
//-------------------------------
const PORT = process.env.PORT || 5000;
const app = express();
//-------------------------------
// 💚 MongoDB                 //
//-------------------------------
mongoDBConnect();
//-------------------------------
// 🔨 Set                     //
//-------------------------------
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
//-------------------------------
// 👍 Use                     //
//-------------------------------
app.use(expressLayout);
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('public'));
//-------------------------------
// 🌍 Routes                  //
//-------------------------------
app.use('/', require('./server/routes/main'));
//-------------------------------
// 👂 Listen                  //
//-------------------------------
app.listen(PORT, () => console.log(`🌍 → Server Running on PORT : ${ PORT } ← 🌍`));