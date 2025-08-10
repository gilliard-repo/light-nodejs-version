// ------------------------------
// 📦 Imports                 //
// ------------------------------
const mongoose = require('mongoose');
//-------------------------------
// 💚 Connect                 //
//-------------------------------
const connectDB = async () => {
    try {
        // Mongoose Connect
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        // Console
        console.log(`💚 → DB CONNECTED : ${ conn.connection.host } ← 💚`);
    } catch(error) {
        // Console
        console.log(`🛑 → ${ error } ← 🛑`);
    }
};
// ------------------------------
// 🔗 Exports                 //
// ------------------------------
module.exports = connectDB;