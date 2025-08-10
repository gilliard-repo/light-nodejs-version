// ------------------------------
// 📦 Imports                 //
// ------------------------------
const express = require('express');
// ------------------------------
// 🧠 Config                  //
// ------------------------------
const Router = express.Router();
//-------------------------------
// 🌍 Routes                  //
//-------------------------------
Router.get('/', (req, res) => {
    // Local
    const locals = {
        msg : '😀 Welcome to my Node.js Light Version with EJS for Templating! 😀'
    }
    // Render Page
    res.render('pages/index', locals);
});
// ------------------------------
// 🔗 Exports                 //
// ------------------------------
module.exports = Router;