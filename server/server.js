const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const db = require('./DB');
const userRouter = require('./routers/userRouter');
const foodTypeRouter = require('./routers/foodTypeRouter')


const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log(`Server stared on port ${PORT}`))
db.on('error', () => {
}); 

app.use('/api/user', userRouter)
app.use('/api/food', foodTypeRouter)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}
